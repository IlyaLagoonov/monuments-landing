<script setup lang="ts">
defineProps<{
  index: number | string
  alt?: string
}>()
</script>

<template>
  <div class="job-card">
    <img
        :src="`/assets/jobs/${index}.jpg`"
        :alt="alt || `Фото работы №${index}`"
        loading="lazy"
    />
  </div>
</template>

<style scoped lang="scss">
.job-card {
  border: 1px solid var(--primary-burgundy);
  border-radius: 12px;
  overflow: hidden;
  background: var(--background-black);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>