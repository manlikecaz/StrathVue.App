<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="public/sam-moghadam-khamseh-Uv66B66YDFI-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="public/scott-graham-5fNmWej4tAA-unsplash.jpg"
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
              <div class="text-subtitle-2">THE BEGINING</div>

              <v-card
                width="400"
                title="WELCOME TO THE VARSITY PAGE"
                subtitle="Strathmore university is part of the Brusell group."
                text="At Stratmore University, we are dedicated to fostering excellence in education, research, and innovation. Our vibrant community of students, faculty, and staff is committed to making a positive impact locally and globally.."
              ></v-card>

              <div class="mt-4 text-subtitle-2">ACADEMICS.</div>

              <v-card width="400">
                <template v-slot:title> Academic Excellence </template>

                <template v-slot:subtitle>Promise to students. </template>

                <template v-slot:text> Discover our diverse range of programs and courses designed to inspire and empower students to achieve their academic and professional goals. </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">STUDENT LIFE.</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>LIFE IN THE UNIVERSITY</v-card-title>

                  <v-card-subtitle></v-card-subtitle>
                </v-card-item>

                <v-card-text>Immerse yourself in the rich tapestry of student life at Strathmore university. From clubs and organizations to cultural events and community service opportunities, there's something for everyone. </v-card-text>
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
