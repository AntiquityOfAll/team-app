import { defineStore } from 'pinia';
import membersData from '../assets/data.json';

export const useTeamStore = defineStore('team', {
  state: () => ({
    members: membersData.members,
    maxMembers: 6
  }),
  actions: {
    addMember(member) {
      if (this.members.length < this.maxMembers) {
        this.members.push(member);
      }
    },
  },
});
