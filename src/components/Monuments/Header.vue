<script setup lang="ts">

import UiButton from "../UiButton.vue";
</script>

<template>
   <header class="header">
     <div class="header__content">
       <UiButton text="M" variant="primary" />

       <ul class="header__menu">
         <li>Главная</li>
         <li>Услуги</li>
         <li>Галерея</li>
         <li>О нас</li>
         <li>Контакты</li>
         <li> <a href="tel:89996290514"> 89996290514 </a></li>
         <li>
           <UiButton variant="primary" text="Заказать звонок"/>
         </li>
       </ul>
     </div>
   </header>
</template>

<style scoped lang="scss">
.header {
  position: absolute; /* поверх Hero */
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.7); /* полупрозрачный */
  z-index: 20; /* выше overlay */
  border-bottom: 1px solid var(--primary-burgundy);

  &__content {
    display: flex;
    justify-content: space-between;
    padding: 1rem var(--spacing-100);
    max-width: var(--spacing-container);
    margin: 0 auto;
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: var(--spacing-100);

    li {
      list-style: none;
    }
  }
}
</style>