<template>
    <div id="contactus">
      <v-container>
        <v-layout column>
          <v-carousel>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>
  
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>
  
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
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
                  title="CONTACT US"
                  subtitle="AT ANY TIME"
                  text="Contact Us
Thank you for your interest in contacting Strathmore University. We're here to assist you with any inquiries you may have. Please feel free to reach out to us using the contact information provided below:

General Inquiries
For general inquiries about admissions, programs, events, and other university-related matters, please contact our main office:0878675765"
                ></v-card>
  
                <div class="mt-4 text-subtitle-2"></div>
  
                <v-card width="400">
                  <template v-slot:title>Admissions</template>
  
                  <template v-slot:subtitle>Get to the varsity</template>
  
                  <template v-slot:text> Admissions
For questions regarding admissions requirements, application procedures, deadlines, and financial aid options, please contact the Admissions Office:

Phone: 0987766687</template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2">ACADEMIC DEPARTMENTS.</div>
  
                <v-card width="400">
                  <v-card-item>
                    <v-card-title></v-card-title>
  
                    <v-card-subtitle></v-card-subtitle>
                  </v-card-item>
  
                  <v-card-text> Academic Departments
For inquiries related to specific academic departments, programs, faculty, research opportunities, and student services, please contact the respective department directly:

SCHOLARS
Phone: 0897768978
Email: [Department Email Address] </v-card-text>
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