<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text?: string
  variant: 'primary' | 'accent' | 'dark'
  disabled?: boolean
}>()

const variantClass = computed(() => {
  switch (props.variant) {
    case 'accent':
      return 'accent'
    case 'dark':
      return 'dark'
    case 'primary':
    default:
      return 'primary'
  }

})
</script>

<template>
  <button
      :class="variantClass"
      :disabled="props.disabled"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<style lang="scss">
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
 .primary {
   border-radius: 3px;
   border: 1px solid #6b1515;
   padding: var(--spacing-100);
   background: var(--primary-burgundy);
   color: var(--text-light);
 }

.accent {
  border-radius: 3px;
  border: 1px solid #6b1515;
  padding: var(--spacing-100);
  background: var(--accent-burgundy);
  color: var(--text-light);
}

.dark {
  border-radius: 3px;
  border: 1px solid #6b1515;
  padding: var(--spacing-100);
  background: var(--surface-black);
  color: var(--text-light);
}
</style>