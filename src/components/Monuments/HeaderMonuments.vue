<script setup lang="ts">
import { ref } from 'vue';
import logo from '/assets/logo.png'

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo-wrapper">
        <img class="header__logo" :src="logo"  alt="logo"  />
        <p>
          Гранитная мастерская <br/> «Стелла-2012»
        </p>
      </div>


      <ul class="header__menu">
        <li><a href="#services">Услуги</a></li>
        <li><a href="#jobs">Наши работы</a></li>
        <li><a href="#geography">География работы</a></li>
        <li><a href="#about">О нас</a></li>
        <li><a href="#contacts">Контакты</a></li>
        <li><a href="tel:89996290514"> 89996290514</a></li>
      </ul>

      <div class="header__burger" @click="toggleMenu">
        <span :class="{ 'open': isMenuOpen }"></span>
        <span :class="{ 'open': isMenuOpen }"></span>
        <span :class="{ 'open': isMenuOpen }"></span>
      </div>
    </div>

    <ul class="header__mobile-menu" v-show="isMenuOpen">
      <li><a href="#services" @click="toggleMenu">Услуги</a></li>
      <li><a href="#jobs" @click="toggleMenu">Наши работы</a></li>
      <li><a href="#geography" @click="toggleMenu">География работы</a></li>
      <li><a href="#about" @click="toggleMenu">О нас</a></li>
      <li><a href="#contacts" @click="toggleMenu">Контакты</a></li>
      <li><a href="tel:89996290514" @click="toggleMenu">89996290514</a></li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.7);
  z-index: 20;
  border-bottom: 1px solid var(--primary-burgundy);

  &__logo-wrapper {
    display: flex;
    align-items: center;

    p {
      margin-bottom: 0;
    }
  }

  &__logo {
    width: 56px;
    height: 56px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    padding: 1rem var(--spacing-100);
    max-width: var(--spacing-container);
    margin: 0 auto;
    align-items: center;
  }

  .header__menu a,
  .header__mobile-menu a {
    color: var(--text-light);
    text-decoration: none;
    transition: color 0.2s ease;
    display: block;
    padding: 0.5rem 0;

    &:hover {
      color: var(--accent-burgundy);
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: var(--spacing-100);

    li {
      list-style: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    span {
      display: block;
      width: 25px;
      height: 3px;
      background: var(--text-light);
      transition: all 0.3s ease;
    }

    span.open:nth-child(1) {
      transform: rotate(45deg) translate(6px, 7px);
    }
    span.open:nth-child(2) {
      opacity: 0;
    }
    span.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }

  &__mobile-menu {
    display: none;
    flex-direction: column;
    background: var(--background-accent-black);
    position: absolute;
    top: 82%;
    left: 0;
    width: 100%;
    padding: 1rem var(--spacing-100);
    border-bottom: 1px solid var(--primary-burgundy);
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);

    li {
      list-style: none;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      display: flex;
    }
  }
}
</style>