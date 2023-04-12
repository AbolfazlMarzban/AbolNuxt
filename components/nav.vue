<template>
  <div class="pt-3">
    <v-row class="px-16">
      <v-col cols="12" lg="2" md="2" xl="2">
        <!-- <h1>AbolazlMarzban</h1> -->
        <img src="../assets/images/logo-abol.png" alt="Abolfazl Marzban" style="width: 100%">
      </v-col>
      <v-col cols="12" lg="10" md="10" xl="10" class="d-flex justify-end">
        <ul class="navmenu">
          <li>
            <NuxtLink to="/" style="text-decoration: none">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" style="text-decoration: none"
              >Services</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/courses" style="text-decoration: none"
              >courses</NuxtLink
            >
          </li>
          <li>blog</li>
          <li>
            <NuxtLink to="/about" style="text-decoration: none"
              >about me</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" style="text-decoration: none"
              >Contact me</NuxtLink
            >
          </li>
          <!-- <li>
            <v-btn @click="changedTheme = !changedTheme">
              <v-icon v-if="!changedTheme">mdi-weather-sunny</v-icon>
              <v-icon v-if="changedTheme">mdi-weather-night</v-icon>
            </v-btn>
          </li> -->
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "../assets/style.scss";
export default {
  data() {
    return {
      changedTheme: false,
    };
  },
};
</script>

<style lang src="../assets/style.scss"></style>
