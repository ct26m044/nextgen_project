import { computed, readonly, ref, watch } from 'vue'

const STORAGE_KEY = 'pixelflow:my-program:v1'
const STORAGE_VERSION = 1

interface StoredProgram {
  version: number
  ids: string[]
}

const selectedIds = ref<string[]>([])
let initialized = false

/** Validates the stored structure; returns the IDs or null if unusable. */
function parseStored(raw: string | null): string[] | null {
  if (raw === null) return null

  try {
    const data: unknown = JSON.parse(raw)

    if (
      typeof data !== 'object' || data === null ||
      (data as StoredProgram).version !== STORAGE_VERSION ||
      !Array.isArray((data as StoredProgram).ids)
    ) {
      return null
    }

    const ids = (data as StoredProgram).ids.filter(
      (id): id is string => typeof id === 'string'
    )
    return [...new Set(ids)]
  } catch {
    return null
  }
}

function load(): string[] {
  try {
    return parseStored(window.localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    // Storage blocked (e.g. privacy mode) → start with an empty program
    return []
  }
}

function save(ids: string[]) {
  try {
    const value: StoredProgram = { version: STORAGE_VERSION, ids }
    const serialized = JSON.stringify(value)
    if (window.localStorage.getItem(STORAGE_KEY) !== serialized) {
      window.localStorage.setItem(STORAGE_KEY, serialized)
    }
  } catch {
    // Quota exceeded or storage blocked → keep the in-memory state only
  }
}

function sameIds(a: string[], b: string[]) {
  return a.length === b.length && a.every((id, i) => id === b[i])
}

/** Rehydrates from localStorage once, then keeps storage and other tabs in sync. */
function init() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  // 1. Rehydration: restore state before anything is persisted
  selectedIds.value = load()

  // 2. Persist every change
  watch(selectedIds, ids => save(ids))

  // 3. Take over changes made in another tab
  window.addEventListener('storage', event => {
    if (event.key !== STORAGE_KEY && event.key !== null) return

    const ids = event.key === null ? [] : parseStored(event.newValue) ?? []
    if (!sameIds(ids, selectedIds.value)) {
      selectedIds.value = ids
    }
  })
}

export function useMyProgram() {
  init()

  function has(id: string): boolean {
    return selectedIds.value.includes(id)
  }

  function toggle(id: string) {
    // Always assign a new array so the watcher fires without `deep`
    selectedIds.value = has(id)
      ? selectedIds.value.filter(existing => existing !== id)
      : [...selectedIds.value, id]
  }

  /** Removes stored IDs that no longer exist in the conference data. */
  function removeInvalidIds(validIds: Iterable<string>) {
    const valid = new Set(validIds)
    const cleaned = selectedIds.value.filter(id => valid.has(id))
    if (cleaned.length !== selectedIds.value.length) {
      selectedIds.value = cleaned
    }
  }

  const count = computed(() => selectedIds.value.length)

  return {
    selectedIds: readonly(selectedIds),
    has,
    toggle,
    count,
    removeInvalidIds
  }
}
