<script>
import { createRouter, createWebHistory } from "vue-router";
import Homepage from "Homepage.vue";
import HomeView from "views/HomeView.vue";
import AboutUs from ".AboutUs.vue";
import ContactUs from "ContactUs.vue";
import Alumni from "components/Alumni.vue";
import Events from "Events.vue";
import courses from "courses.vue";
import Library from "Library.vue";
import Patnerships from "Patnerships.vue";
</script>
<template>
  <div>
    <div>
      <v-btn to="/" color="white" dark>Home</v-btn>
    </div>
    <div>
      <v-btn to="/courses" color="white" dark>courses</v-btn>
    </div>
    <div>
      <v-btn to="/Events" color="white" dark>Events</v-btn>
    </div>
    <div>
      <v-btn to="/Library" color="white" dark>Library</v-btn>
    </div>
    <div>
      <v-btn to="/Alumni" color="white" dark>Alumni</v-btn>
    </div>
    <div>
      <v-btn to="/Patnerships" color="white" dark>Patnerships</v-btn>
    </div>
    <div>
      <v-btn to="/AboutUs" color="white" dark>AboutUs</v-btn>
    </div>
    <div>
      <v-btn to="/ContactUs" color="white" dark>ContactUs</v-btn>
    </div>
  </div>
</template>
