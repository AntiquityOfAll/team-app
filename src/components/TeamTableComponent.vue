<template>
  <div>
    <table class="table-fixed border-spacing-2 border-separate">
      <thead>
        <tr>
          <th class="text-left px-6 py-2">Name</th>
          <th class="text-left px-6 py-2">Mail</th>
          <th class="text-left px-6 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <MemberRowComponent v-for="member in members" :key="member.email" :member="member" />
      </tbody>
    </table>
    <p v-if="spotsLeft <= 0" class="text-right text-gray-600 italic">
      There are no remaining team spots.
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useTeamStore } from '../datos/team';
import MemberRowComponent from './MemberRowComponent.vue';

const teamStore = useTeamStore();
const members = teamStore.members;
const spotsLeft = ref(teamStore.maxMembers - teamStore.members.length);

watch(
  () => teamStore.members,
  () => {
    spotsLeft.value = teamStore.maxMembers - teamStore.members.length;
  },
  { deep: true }
);
</script>
