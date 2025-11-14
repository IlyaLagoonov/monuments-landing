<script setup lang="ts">
  const objectList = [
  'Даниловское кладбище (Советский район)',
  'Димитриевское кладбище (Тракторозаводский район)',
  'Кирпичное кладбище (Красноармейский район)',
  'Горьковское кладбище (Ворошиловский район)',
  'Среднеахтубинское кладбище',
  'Ерзовское кладбище',
  'Городище (Городищенское кладбище)',
  'Кладбище посёлка Южный',
  'Кладбище посёлка ГЭС',
  'Кладбище посёлка Водстрой',
  'Кладбище п. Ангарский',
  'Кладбище п. Спартановка'
]

</script>

<template>
  <div class="landing-container">
    <h2>
      Работаем на всех кладбищах города
    </h2>
    <p>
      Выполняем установку памятников на всех кладбищах Волгограда и области.
     <br/> Знаем особенности каждого кладбища и работаем с учётом всех требований администрации.
    </p>

    <div class="geography-jobs">
      <div class="main-block">
        <div class="main-block__header">
          <div class="main-block__img-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 aria-hidden="true">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193
            4 14.993 4 10a8 8 0 0 1 16 0">
              </path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <h3>
            Основные кладбища
          </h3>
        </div>

        <ul>
          <li v-for="(item, i) in objectList" :key="i">
            {{ item }}
          </li>
        </ul>

        <p>
          И другие кладбища Волгограда и области. Уточните возможность работы на нужном вам кладбище по телефону.
        </p>
      </div>
      <div class="secondary-blocks">
        <div class="secondary-block-one">
          <div class="secondary-block__header">
            <div class="secondary-block__img-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-6 h-6 text-white" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <h3>
              Знание требований
            </h3>
          </div>
          <p>
            Учитываем все регламенты и требования администрации каждого кладбища при установке памятников
          </p>
        </div>
        <div class="secondary-block-two">
          <div class="secondary-block__header">
            <div class="secondary-block__img-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-6 h-6 text-white" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <h3>
              Помощь с документами
            </h3>
          </div>
          <p>
            Оформляем все необходимые разрешения и согласования для установки памятника
          </p>
        </div>
        <div class="secondary-block-three">
          <div class="secondary-block__header">
            <div class="secondary-block__img-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check w-6 h-6 text-white" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <h3>
              Выезд на место
            </h3>
          </div>

          <p>
            Бесплатный выезд мастера на кладбище для замеров и консультации по установке
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.geography-jobs {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    height: auto;
  }
}

.main-block ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  list-style: none;
  margin: 1rem 0 0 0;

  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    color: var(--text-light);

    &::before {
      content: '✓'; /* галочка */
      position: absolute;
      left: 0;
      top: 28%;
      transform: translateY(-50%);
      width: 1.2rem;
      height: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--primary-burgundy); /* круг */
      border-radius: 50%;
      background: var(--background-accent-black);
      color: var(--primary-burgundy); /* цвет галочки */
      font-size: 0.75rem;
    }
  }
}

.main-block {
  border-radius: 1rem;
  background: var(--background-accent-black);
  border: 1px solid var(--accent-burgundy);
  color: var(--text-light);
  padding: 16px;

  @media (max-width: 768px) {
    padding: 6px;
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  &__img-wrapper {
    width: 35px;
    height: 35px;
    display: flex;
    border-radius: 1rem;
    margin-right: var(--spacing-100);
    border: 1px solid var(--accent-burgundy);
    align-items: center;
    justify-content: center;
    padding: var(--spacing-100);
    background: var(--primary-burgundy);
  }
}


.secondary-block {
  border-radius: 1rem;
  background: var(--background-accent-black);
  border: 1px solid var(--accent-burgundy);
  color: var(--text-light);
  padding: 16px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__img-wrapper {
    width: 15px;
    height: 15px;
    display: flex;
    border-radius: 1rem;
    margin-right: var(--spacing-100);
    border: 1px solid var(--accent-burgundy);
    align-items: center;
    justify-content: center;
    padding: var(--spacing-100);
    background: var(--primary-burgundy);
  }
}

.secondary-blocks {
  border-radius: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr; /* три блока по одинаковой высоте */
  gap: 16px;
}

.secondary-block-one,
.secondary-block-two,
.secondary-block-three {
  border-radius: 1rem;
  border: 1px solid var(--accent-burgundy);
  background: var(--background-accent-black);
  color: var(--text-light);
  padding: 16px;
}
</style>