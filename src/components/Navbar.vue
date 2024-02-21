<script>
import Homepage from "./Homepage.vue";
import AboutUs from "./AboutUs.vue";
import Alumni from "./Alumni.vue";
import ContactUs from "./ContactUs.vue";
import courses from "./courses.vue";
import Events from "./Events.vue";
import Library from "./Library.vue";
import Partnerships from "./Partnerships.vue";
</script>

<template>
  <v-app-bar color="green">
    <div>
      <v-btn to="/" color="white" dark>Home </v-btn>
    </div>
    <div>
      <v-btn to="/aboutus" color="white" dark>AboutUs </v-btn>
    </div>
    <div>
      <v-btn to="/alumni" color="white" dark>Alumni </v-btn>
    </div>
    <div>
      <v-btn to="/contactus" color="white" dark>ContactUs </v-btn>
    </div>
    <div>
      <v-btn to="/courses" color="white" dark>Courses </v-btn>
    </div>
    <div>
      <v-btn to="/events" color="white" dark>Events </v-btn>
    </div>
    <div>
      <v-btn to="/library" color="white" dark>Library </v-btn>
    </div>
    <div>
      <v-btn to="/partnerships" color="white" dark>Partnerships </v-btn>
    </div>
  </v-app-bar>
</template>
