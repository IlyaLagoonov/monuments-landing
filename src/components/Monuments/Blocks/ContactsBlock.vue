<script setup lang="ts">
const contacts = [
  { type: 'tel', title: 'Телефон', text: '+7 (937) 693-29-34', isHref: true },
  { type: 'mailto', title: 'Email', text: 'anfisun@gmail.com', isHref: true },
  { type: 'text', title: 'Адрес', text: 'г.Волгоград, Городищенский район, село Орловка, переулок Тихий, дом 12', isHref: false },
  { type: 'text', title: 'Режим работы', text: 'Пн-Вс: 9:00 - 18:00', isHref: false }
]
</script>

<template>
  <div class="contacts-block">
    <h3>Свяжитесь с нами</h3>
    <p class="mb-3">Получите бесплатную консультацию и расчет стоимости</p>

    <div class="contacts-block__wrapper">
      <div class="contacts-block__contacts">
        <div v-for="(contact, i) in contacts" :key="i" class="contacts-block__card">
          <h5>{{ contact.title }}</h5>
          <a v-if="contact.isHref" :href="contact.type === 'tel' ? `tel:${contact.text}` : `mailto:${contact.text}`">
            {{ contact.text }}
          </a>
          <p v-else>{{ contact.text }}</p>
        </div>
      </div>

      <div class="contacts-block__map">
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6d7b0cf873c07558924cd32d5f5c634c0cf218f9eb80fe73b7c5a7d85f17e95&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts-block {
  padding: 2rem;
  background: var(--background-accent-black);

  h3 {
    margin-bottom: var(--spacing-100);
  }

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-100);
  }

  &__card {
    padding: var(--spacing-100);
    background: var(--background-black);
    border-radius: 1rem;
    border: 1px solid var(--accent-burgundy);

    h5 {
      margin-top: 0;
      margin-bottom: var(--spacing-50);
    }
  }

  &__map {
    width: 100%;
    height: 100%;
    min-height: 300px;
    border-radius: 1rem;
    overflow: hidden;
  }
}
</style>