<template>
    <div class="place-self-center flex flex-col gap-y-3">
      <table class="table-fixed border-spacing-2 border-separate">
        <thead>
          <th class="text-left px-6 py-2">Name</th>
          <th class="text-left px-6 py-2">Email</th>
          <th class="text-left px-6 py-2">Status</th>
        </thead>
        <tbody>
          <MemberRowComponent v-for="member in members" :key="member.email" :member="member" />
        </tbody>
      </table>
      <p class="text-right text-gray-600 italic">There are no remaining team spots. Upgrade to add more.</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import MemberRowComponent from './MemberRowComponent.vue';
  
  const props = defineProps({
    members: {
      type: Array,
      required: true
    }
  });
  </script>
  