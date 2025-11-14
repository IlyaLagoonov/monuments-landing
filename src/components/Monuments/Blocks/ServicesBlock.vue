<script setup lang="ts">
 import { useMonumentsPage } from "../../../composables/useMonumentsPage";

 import palette from '/assets/icons/palette.svg'
 import hammer from '/assets/icons/hammer.svg'
 import building from '/assets/icons/building.svg'
 import shield from '/assets/icons/shield.svg'
 import car from '/assets/icons/car.svg'
 import clock from '/assets/icons/clock.svg'

 const iconMap = {
   palette,
   building,
   shield,
   car,
   clock,
   hammer
 }
 const { servicesCards } = useMonumentsPage()
</script>

<template>
  <div class="landing-container">
    <div class="services-block">
      <h2>
        Полный спектр услуг
      </h2>
      <p>
        От консультации и выбора памятника до установки и благоустройства места захоронения
      </p>
      <div class="services-cards-wrapper">
        <div v-for="(card, i) in servicesCards" :key="i" class="service-card">
          <div class="icon-wrapper">
            <img :src="iconMap[card.icon]" alt="icon" />
          </div>
          <h5 v-html="card.title"></h5>
          <p v-html="card.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.services-block {
  .services-cards-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    .service-card {
      background: var(--surface-black);
      padding: 2rem;
      border-radius: 1rem;
      border: 2px solid transparent;
      transition: all 0.3s ease;
      text-align: center;

      &:hover {
        border-color: var(--primary-burgundy);
      }

      .icon-wrapper {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        background: var(--primary-burgundy);
        margin: 0 auto 1rem;
        transition: transform 0.3s ease;

        svg {
          width: 100%;
          height: 100%;
          color: var(--primary-burgundy);
        }
      }

      &:hover .icon-wrapper {
        transform: scale(1.2);
      }

      h5 {
        margin: 1rem 0 0.5rem;
        font-size: 1.25rem;
        color: var(--text-light);
      }

      p {
        font-size: 1rem;
        color: var(--text-muted);
      }
    }
  }

  @media (max-width: 1024px) {
    .services-cards-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .services-cards-wrapper {
      grid-template-columns: 1fr;
    }
  }
}
</style>