<template>
  <div class="team-member">
    <span class="member-position">{{ position }}.</span>
    <div class="member-info">
      <h3>{{ member.name }}</h3>
      <p class="member-email">{{ member.email }}</p>
      <span 
        class="member-status"
        :class="member.status.toLowerCase()"
      >
        {{ member.status }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
      validator: (m) => ['name', 'email', 'status'].every(key => key in m)
    },
    position: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.team-member {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
}

.member-position {
  font-weight: bold;
  color: #555;
}

.member-info {
  flex: 1;
}

.member-email {
  color: #666;
  margin: 0.25rem 0;
  font-size: 0.9em;
}

.member-status {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8em;
  text-transform: capitalize;
}

.member-status.active {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.member-status.inactive {
  background-color: #ffebee;
  color: #c62828;
}
</style>