<template>
  <header class="flex justify-between">
    <div>
      <button 
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400" 
        :disabled="spotsLeft <= 0" 
        @click="toggleForm"
      >
        Add Member ({{ spotsLeft }} Spots Left)
      </button>
    </div>
    <div>
      <div class="inline-flex items-center text-3xl relative">
        <h3>Acme Team</h3>
        <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">{{ spotsLeft }}</div>
      </div>
    </div>
  </header>
  <form v-if="showForm" @submit.prevent="addMember">
    <input v-model="newMember.name" placeholder="Name" required />
    <input v-model="newMember.email" placeholder="Email" type="email" required />
    <select v-model="newMember.status">
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useTeamStore } from '../datos/team';

const teamStore = useTeamStore();
const showForm = ref(false);
const newMember = ref({ name: '', email: '', status: 'Active' });
const spotsLeft = ref(teamStore.maxMembers - teamStore.members.length);

const toggleForm = () => {
  showForm.value = !showForm.value;
};

const addMember = () => {
  if (teamStore.members.length < teamStore.maxMembers && newMember.value.name && newMember.value.email) {
    teamStore.addMember(newMember.value);
    newMember.value = { name: '', email: '', status: 'Active' };
    showForm.value = false;
  }
};

watch(
  () => teamStore.members,
  () => {
    spotsLeft.value = teamStore.maxMembers - teamStore.members.length;
  },
  { deep: true }
);
</script>
