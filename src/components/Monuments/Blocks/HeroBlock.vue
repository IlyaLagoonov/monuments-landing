<template>
  <div class="hero-block">
    <div class="overlay"></div>
    <div class="hero-block__content">
      <h1>Установка могильных памятников в Волгограде и области</h1>
      <p>
        Мы — небольшая бригада, устанавливаем памятники на кладбищах Волгограда и области.
        <br/> Работаем аккуратно, с уважением к памяти близких и вниманием к каждому заказу.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
.hero-block {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("/assets/hero.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 50vh;
  }

  &__content {
    position: relative;
    z-index: 10;
    text-align: center;
    color: var(--text-light);
    padding: 0 2rem;
  }

  p {
    font-size: 20px;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 5;
  }
}
</style>