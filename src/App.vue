<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <navbar>
      <main>
        <router-view>
          
        </router-view>
      </main>
    </navbar>
  </v-app>
</template>


