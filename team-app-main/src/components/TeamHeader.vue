<template>
  <div>
    <h1>Add Member ({{ maxMembers - members.length }} Spots Left)</h1>
    <h2>{{ teamName }} - {{ members.length }} Member Team</h2>
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      required: true
    }
  },
  computed: {
    teamName() {
      return this.team.teamName
    },
    maxMembers() {
      return this.team.maxMembers
    },
    members() {
      return this.team.members
    }
  }
}
</script>