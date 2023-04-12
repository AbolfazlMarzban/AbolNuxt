<template>
  <v-app id="app">
    <Nav></Nav>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </v-app>
</template>

<script>
import "../assets/style.scss";
import Nav from "../components/nav.vue";
import Footer from "../components/footer.vue";
export default {
  // name: "main",
  components: { Nav, Footer },
};
</script>

<style lang src="../assets/style.scss"></style>
