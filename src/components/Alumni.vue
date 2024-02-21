<template>
    <div id="alumni">
      <v-container>
        <v-layout column>
          <v-carousel>
            <v-carousel-item
              src="/public/rut-miit-hpRGrfOIybc-unsplash.jpg"
              cover
            ></v-carousel-item>
  
            <v-carousel-item
              src="public/leon-wu-LLfRMRT-9AY-unsplash.jpg"
              cover
            ></v-carousel-item>
  
            <v-carousel-item
              src="public/joshua-hoehne-iggWDxHTAUQ-unsplash.jpg"
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
                  title="WELCOME TO THE ALUMNI PAGE."
                  subtitle="ALUMNI"
                  text="Welcome to the Alumni Page of Strathmore University. Our alumni community is an integral part of our university's legacy, and we are proud of the accomplishments and contributions of our graduates."
                ></v-card>
  
                <div class="mt-4 text-subtitle-2"></div>
  
                <v-card width="400">
                  <template v-slot:title>STAY CONNECTED. </template>
  
                  <template v-slot:subtitle> VARIOUS CONNECTIONS </template>
  
                  <template v-slot:text> Stay Connected
As an alum of StrathmoreUniversity, you are part of a global network of accomplished professionals, leaders, and change-makers. Stay connected with fellow alumni, faculty, and the university through various channels:

Alumni Events: Attend alumni reunions, networking events, and professional development workshops organized by the university.
Alumni Associations: Join local and regional alumni associations to connect with alumni in your area and participate in community service projects and social gatherings.
Social Media: Follow [University Name] on social media platforms such as Facebook, LinkedIn, Twitter, and Instagram to stay updated on alumni news, events, and opportunities. </template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2"></div>
  
                <v-card width="400">
                  <v-card-item>
                    <v-card-title>ENGAGE WITH US</v-card-title>
  
                    <v-card-subtitle>CONTACTS</v-card-subtitle>
                  </v-card-item>
  
                  <v-card-text> Get Involved
We invite you to get involved and stay engaged with Strathmore University and your fellow alumni. Here are some ways you can contribute:

Mentorship Programs: Volunteer as a mentor to current students or recent graduates, sharing your knowledge, expertise, and insights.
Guest Lectures: Share your expertise and experiences by participating as a guest speaker in classes, seminars, or career panels.
Alumni Giving: Support the next generation of students by making a donation to scholarships, research funds, or campus improvement projects.
Contact Us
Have questions or want to learn more about alumni opportunities at [University Name]? Contact the Alumni Relations Office at alumni@university.edu or (123) 456-7890 </v-card-text>
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