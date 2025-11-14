<script setup lang="ts">
import aboutImg from '/assets/about.png'
</script>

<template>
  <div class="about">
    <div class="landing-container">
      <h2>О нас</h2>
      <div class="about__content">
        <div class="about__text">
          <p>
            Мы ценим внимание к деталям и индивидуальный подход к каждому заказу. <br />
            Для нас важно, чтобы памятник отражал уважение к памяти близких.
          </p>
          <p>
            Наши работы можно посмотреть на
            <a
                href="https://www.avito.ru/volgograd/predlozheniya_uslug/izgotovlenie_i_ustanovka_pamyatnikov_2966375288?context=H4sIAAAAAAAA_wE_AMD_YToyOntzOjEzOiJsb2NhbFByaW9yaXR5IjtiOjA7czoxOiJ4IjtzOjE2OiJxaVIzWThSM0F0UmVhU1N0Ijt9iuAL2T8AAAA#open-reviews-list"
                target="_blank"
                rel="noopener"
            >Авито</a> — там же есть отзывы довольных клиентов.
          </p>
          <p>
            Честная работа и прозрачные цены — вот наш принцип.
          </p>
        </div>
        <div class="about__image">
          <img :src="aboutImg" alt="about-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  background: var(--background-accent-black);
  padding: 4rem 0;

  h2 {
    margin-bottom: 2rem;
    color: var(--text-light);
    text-align: left;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  &__text {
    color: var(--text-light);
    font-size: 1rem;
    line-height: 1.6;

    a {
      color: var(--accent-burgundy);
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: var(--primary-burgundy);
      }
    }
  }

  &__image {
    display: flex;
    justify-content: center;


    img {
      width: 100%;
      border: 3px solid #6b1515;
      max-width: 500px;
      border-radius: 1rem;
      object-fit: cover;
    }
  }
}
</style>