<template>
  <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <p><strong>Get connected with us on social networks!</strong></p>
      <v-spacer />
      <v-btn
        class="mx-4"
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        variant="plain"
        size="small"
        ></v-btn
      >
    </div>
    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} -
      <p><strong>Mandela University</strong></p>
    </div>
  </v-footer>
</template>

<script setup>
    const icons= ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
</script>
