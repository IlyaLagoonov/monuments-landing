<script setup lang="ts">
import HeaderMonuments from "../components/Monuments/HeaderMonuments.vue";
import HeroBlock from "../components/Monuments/Blocks/HeroBlock.vue";
import ServicesBlock from "../components/Monuments/Blocks/ServicesBlock.vue";
import JobsBlock from "../components/Monuments/Blocks/JobsBlock.vue";
import GeographyJobsBlock from "../components/Monuments/Blocks/GeographyJobsBlock.vue";
import ContactsBlock from "../components/Monuments/Blocks/ContactsBlock.vue";
import AboutBlock from "../components/Monuments/Blocks/AboutBlock.vue";
</script>
<template>
  <div>
    <HeaderMonuments />
    <HeroBlock />
    <AboutBlock id="about" />
    <ServicesBlock id="services"/>
    <JobsBlock id="jobs"/>
    <GeographyJobsBlock id="geography"/>
    <ContactsBlock id="contacts" />
  </div>
</template>
<style lang="scss">
.landing-container {
  max-width: var(--spacing-container);
  margin: 0 auto;
  padding: 50px var(--spacing-100) 50px var(--spacing-100);

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
}
</style>