<script setup lang="ts">
import Header from "../components/Monuments/Header.vue";
import HeroBlock from "../components/Monuments/Blocks/HeroBlock.vue";
import ServicesBlock from "../components/Monuments/Blocks/ServicesBlock.vue";
import JobsBlock from "../components/Monuments/Blocks/JobsBlock.vue";
import GeographyJobsBlock from "../components/Monuments/Blocks/GeographyJobsBlock.vue";
import ContactsBlock from "../components/Monuments/Blocks/ContactsBlock.vue";
</script>
<template>
  <Header />
  <HeroBlock />
  <ServicesBlock />
  <JobsBlock />
  <GeographyJobsBlock />
  <ContactsBlock />
</template>
<style lang="scss">
 .landing-container {
   padding: var(--cds-spacing-100);
   margin: 0 auto;
   max-width: var(--spacing-container);
 }
</style>