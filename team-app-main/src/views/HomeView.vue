<script setup>
import { ref, onMounted } from 'vue';
import TeamHeader from '@/components/TeamHeader.vue';
import TeamList from '@/components/TeamList.vue';


const team = ref({
  teamName: 'Acme Team',
  maxMembers: 5,
  members: []
});


onMounted(async () => {
  try {

    const response = await fetch('/data.json');



    if (!response.ok) throw new Error('Error al cargar datos');
    team.value = await response.json();

  } catch (error) {
    console.error('Usando datos de respaldo:', error);
    team.value.members = [
      {
        name: "John Doe",
        email: "john@doe.com",
        status: "Active",
        avatar: "https://i.pravatar.cc/50?u=john@doe.com"
      },
      {
        name: "Sarah Doe",
        email: "sarah@doe.com",
        status: "Active",
        avatar: "https://i.pravatar.cc/50?u=sarah@doe.com"
      }
    ];
  }
});
</script>

<template>
  <div class="home-view">

    <TeamHeader :teamName="team.teamName" :currentMembers="team.members.length" :maxMembers="team.maxMembers" />


    <TeamList :members="team.members" class="mt-8" />


    <footer class="mt-12 bg-gray-100 py-4 text-center">
      <h5 class="font-semibold text-lg">
        {{ team.teamName }} - {{ team.members.length }} Member Team
      </h5>
    </footer>
  </div>
</template>

<style scoped>
.home-view {
  @apply flex flex-col p-6 max-w-6xl mx-auto;
}
</style>