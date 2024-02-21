<template>
    <div id="events">
      <v-container>
        <v-layout column>
          <v-carousel>
            <v-carousel-item
              src="/public/cj-botha-flR7fkL9sLY-unsplash.jpg"
              cover
            ></v-carousel-item>
  
            <v-carousel-item
              src="/public/2014.09.23SBSsmall.jpg"
              cover
            ></v-carousel-item>
  
            <v-carousel-item
              src="/public/Strathmore-University-Launches-the-Strathmore-at-60-Celebrations-web-1.png"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-layout>
        <v-layout>
          <v-container>
            <v-row align="center" justify="center">
              <div class="d-flex align-center flex-column">
                <div class="text-subtitle-2"></div>
  
                <v-card
                  width="400"
                  title="EVENTS."
                  subtitle=""
                  text="Events at Strathmore University
Welcome to the Events Page of Strathmore University. Stay updated on upcoming events, lectures, workshops, performances, and more happening on our campus.

"
                ></v-card>
  
                <div class="mt-4 text-subtitle-2"></div>
  
                <v-card width="400">
                  <template v-slot:title> EVENTS CALENDAR.</template>
  
                  <template v-slot:subtitle></template>
  
                  <template v-slot:text>Event Categories
Explore events by category to find activities that match your interests:

Academic Events: Lectures, seminars, conferences, and academic symposiums.
Cultural Events: Concerts, art exhibitions, theater productions, and cultural festivals.
Community Events: Volunteer opportunities, service projects, and community outreach initiatives.
Student Activities: Club meetings, social gatherings, sports tournaments, and recreational events.
Career Development: Workshops, networking events, career fairs, and professional development seminars.
</template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2"></div>
  
                <v-card width="400">
                  <v-card-item>
                    <v-card-title>MORE</v-card-title>
  
                    <v-card-subtitle></v-card-subtitle>
                  </v-card-item>
  
                  <v-card-text> Hosting an Event
Interested in hosting an event at Strathmore University ? Our campus facilities are available for rent and can accommodate a wide range of events, from small meetings to large conferences. Contact our Events Coordinator to learn more:

Phone: 0856587126</v-card-text>
                </v-card>
              </div>
            </v-row>
          </v-container>
        </v-layout>
      </v-container>
    </div>
  </template>
  <script setup>
  const variants = ["elevated", "flat", "tonal", "outlined"];
  </script>