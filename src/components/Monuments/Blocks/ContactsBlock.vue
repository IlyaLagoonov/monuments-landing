<script setup lang="ts">
import { onMounted, ref } from "vue";

const contacts = [
  { type: 'tel', title: 'Телефон', text: '+7 (937) 693-29-34', isHref: true },
  { type: 'mailto', title: 'Email', text: 'anfisun@gmail.com', isHref: true },
  { type: 'text', title: 'Адрес', text: 'г. Волгоград, Городищенский район, село Орловка, пер. Тихий, д. 12', isHref: false },
  { type: 'text', title: 'Режим работы', text: 'Пн–Вс: 9:00 – 18:00', isHref: false },
  { type: 'link', title: 'Авито', text: 'Avito', href: 'https://www.avito.ru/user/8a105816518769528f5047d916e602b0/profile?src=ratings&page_from=from_reviews', isHref: true }
]


const showMap = ref(false)

onMounted(() => {
  showMap.value = true
})


</script>

<template>
    <div class="contacts-block">
      <div class="landing-container">
      <h2>Свяжитесь с нами</h2>
        <p>Позвоните или напишите — ответим на все вопросы и поможем подобрать памятник под ваши пожелания.</p>

        <div class="contacts-block__wrapper">
        <div v-if="contacts.length" class="contacts-block__contacts">
          <div  v-for="(contact, i) in contacts" :key="i" class="contacts-block__card">
            <h5>{{ contact.title }}</h5>

            <!-- Для Авито -->
            <a
                v-if="contact.isHref && contact.type === 'link'"
                :href="contact.href"
                target="_blank"
                rel="noopener noreferrer"
            >
              {{ contact.text }}
            </a>

            <!-- Для телефона и email -->
            <a
                v-else-if="contact.isHref && contact.type !== 'link'"
                :href="contact.type === 'tel' ? `tel:${contact.text}` : `mailto:${contact.text}`"
            >
              {{ contact.text }}
            </a>

            <!-- Для обычного текста -->
            <p v-else>{{ contact.text }}</p>
          </div>
        </div>

        <div class="contacts-block__map">
          <iframe
              v-if="showMap"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6d7b0cf873c07558924cd32d5f5c634c0cf218f9eb80fe73b7c5a7d85f17e95&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="0"
          ></iframe>
        </div>
      </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
.contacts-block {
  background: var(--background-accent-black);

  @media (max-width: 768px) {
    padding: var(--spacing-100);
  }

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