<script setup lang="ts">
import { ref } from 'vue'
import UiButton from "../../UiButton.vue"

const tabs = ['Все работы', 'Вертикальные', 'Горизонтальные']
const activeTab = ref(tabs[0])
const selectTab = (tab: string) => activeTab.value = tab
</script>

<template>
  <div class="jobs-block">
    <div class="tabs-component">
      <h2>
        Наши работы
      </h2>
      <p>
        Более 1000 установленных памятников. Каждый проект уникален.
      </p>
      <div class="tabs-buttons">
        <UiButton
            v-for="tab in tabs"
            :key="tab"
            :text="tab"
            variant="primary"
            class="tabs-component__button"
            :class="{ 'bg-dark-burgundy text-white': activeTab === tab }"
            @click="() => selectTab(tab)"
        />
      </div>

      <div class="tabs-content">
        <div v-if="activeTab === 'Все работы'">
          <p>
            Все работы
          </p>
        </div>
        <div v-if="activeTab === 'Вертикальные'">
          <p>
            Вертикальные
          </p>
        </div>
        <div v-if="activeTab === 'Горизонтальные'">
          <p>
            Горизонтальные
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

 .jobs-block {
   background: var(--background-accent-black);
 }
.tabs-component {
  padding: 2rem;
  &__button {
    margin-right: var(--spacing-100);
  }
}
</style>