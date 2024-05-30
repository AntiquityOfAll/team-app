<template>
  <HeaderComponent />
  <TeamTableComponent :members="members" />
  <FooterComponent />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import TeamTableComponent from '../components/TeamTableComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

const members = ref([]);

onMounted(async () => {
  const response = await fetch('/src/assets/data.json');
  const data = await response.json();
  members.value = data.members;
});
</script>
