<script setup lang="ts">
import MyProgramCounter from './components/feature/my-program/MyProgramCounter.vue'
</script>

<template>
  <div>
    <header>
      <h2>PixelFlow</h2>
      <nav>
        <RouterLink to="/">Startseite</RouterLink>
        <RouterLink to="/program">Programm</RouterLink>
        <MyProgramCounter />
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
}
</style>