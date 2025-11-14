<script setup lang="ts">
import { ref } from 'vue'
import UiButton from "../../UiButton.vue"
import JobsCard from "../JobsCard.vue";

const tabs = ['Все работы', 'Вертикальные', 'Горизонтальные'];
const allWorks = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const verticalWorks = ['3', '4', '5', '1', '8'];
const horizontalWorks = ['2', '6', '7', '9'];

const activeTab = ref(tabs[0]);
const selectTab = (tab: string) => activeTab.value = tab;
</script>

<template>
  <div class="jobs-block">
    <div class="landing-container">
      <div class="tabs-component">
        <h2>Наши работы</h2>
        <p>Более 1000 установленных памятников. Каждый проект уникален.</p>

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


          <div class="tabs-content" :key="activeTab">
            <div
                v-if="activeTab === 'Все работы'"
                class="jobs-grid"
            >
              <JobsCard
                  v-for="(work, idx) in allWorks"
                  :key="idx"
                  :index="work"
              />
            </div>

            <div
                v-else-if="activeTab === 'Вертикальные'"
                class="jobs-grid"
            >
              <JobsCard
                  v-for="(work, idx) in verticalWorks"
                  :key="idx"
                  :index="work"
              />
            </div>

            <div
                v-else
                class="jobs-grid"
            >
              <JobsCard
                  v-for="(work, idx) in horizontalWorks"
                  :key="idx"
                  :index="work"
              />
            </div>
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
  &__button {
    margin-right: var(--spacing-100);
  }
}

.tabs-buttons {
  margin-bottom: var(--spacing-100);
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: var(--spacing-100);
  margin-top: var(--spacing-200);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.grid-fade-enter-active {
  transition: all 0.4s ease;
}
.grid-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>