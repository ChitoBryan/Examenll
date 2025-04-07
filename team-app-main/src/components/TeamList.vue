<template>
  <div class="team-list">
    <h2>Team Members</h2>
    <div class="members-container">
      <TeamMember
        v-for="(member, index) in members"
        :key="member.email" 
        :member="member"
        :position="index + 1"
      />
    </div>
  </div>
</template>

<script>
import TeamMember from './TeamMember.vue';

export default {
  components: { TeamMember },
  props: {
    members: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style scoped>
.members-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
</style>