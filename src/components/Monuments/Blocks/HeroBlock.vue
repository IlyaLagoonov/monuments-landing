<!-- HeroBlock.vue -->
<template>
  <div class="hero-block">
    <div class="overlay"></div> <!-- темный фильтр -->
    <div class="hero-block__content">
      <h1>Рыба рыбная</h1>
      <p>еще рыба</p>
      <UiButton variant="primary" text="и кнопка" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UiButton from "../../UiButton.vue";
</script>

<style scoped lang="scss">
.hero-block {
  position: relative;
  width: 100%;
  height: 100vh; /* полный экран */
  background-image: url("https://images.unsplash.com/photo-1654866555003-4504470e4ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1ldGVyeSUyMG1vbnVtZW50fGVufDF8fHx8MTc2MjQxNjY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &__content {
    position: relative;
    z-index: 10; /* выше overlay */
    text-align: center;
    color: var(--text-light);
    padding: 0 2rem;
  }

  .overlay {
    position: absolute;
    inset: 0; /* сверху, снизу, слева, справа = 0 */
    background: rgba(0, 0, 0, 0.3); /* легкий темный фильтр */
    z-index: 5;
  }
}
</style>