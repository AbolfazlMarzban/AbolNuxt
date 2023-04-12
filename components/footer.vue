<template>
  <div style="background: #e0e0e0">
    <v-container>
      <v-row class="pt-10">
        <v-col cols="12" lg="4" md="4" xl="4" class="d-flex flex-column pa-5">
          <!-- <label style="font-size: 25px; font-weight: bold"
            >Abolfazl Marzban</label
          > -->
          <img src="../assets/images/logo-abol.png" alt="Abolfazl Marzban" style="width:50%">
          <span class="mt-3"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, cum
            rerum? Architecto omnis esse at numquam laboriosam fugit natus vero
            vel ad, quibusdam temporibus, officia delectus cum provident quae!
            Totam?</span
          >
          <v-row class="mt-3">
            <v-col cols="3">
              <a href="" class="social">
                <v-icon color="black" large>mdi-linkedin</v-icon>
              </a>
            </v-col>
            <v-col cols="3">
              <a href="" class="social">
                <v-icon color="black" large>mdi-whatsapp</v-icon>
              </a>
            </v-col>
            <v-col cols="3">
              <a href="" class="social">
                <v-icon color="black" large>mdi-instagram</v-icon>
              </a>
            </v-col>
            <v-col cols="3">
              <a href="" class="social">
                <v-icon color="black" large>mdi-github</v-icon>
              </a>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="4" md="4" xl="4" class="pa-5 d-flex flex-column">
          <label style="font-size: 25px; font-weight: bold">Contact Info</label>
          <ul class="contacts">
            <li>
              <v-icon color="black">mdi-phone</v-icon>
              <span>+989183933164</span>
            </li>
            <li>
              <v-icon color="black">mdi-email</v-icon>
              <span>abolfazlmarzban39@gmail.com</span>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="4" md="4" xl="4" class="d-flex flex-column pa-5">
          <label style="font-size: 25px; font-weight: bold">Quick Links</label>
          <ul class="quicklinks">
            <li>
              <NuxtLink to="">About Me</NuxtLink>
            </li>
            <li>
              <NuxtLink to="">Services</NuxtLink>
            </li>
            <li>
              <NuxtLink to="">Courses</NuxtLink>
            </li>
            <li>
              <NuxtLink to="">blog</NuxtLink>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
