<template>
  <div>
    <v-container>
      <v-row class="justify-center text-center">
        <v-col
          cols="12"
          lg="8"
          md="8"
          xl="6"
          class="d-flex justify-center flex-column"
        >
          <h2 style="font-size: 40px" class="mt-15">
           I help people to shine Online
          </h2>
          <br />
          <p style="font-size: 30px">
            I help you and your business to grow and shine in the digital
            world!
          </p>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="2">
          <NuxtLink to="/services" style="text-decoration: none">
            <v-btn color="pink" depressed rounded dark large class="seeHow"
              >See How</v-btn
            >
          </NuxtLink>
        </v-col>
        <v-col cols="2">
          <NuxtLink to="/contact" style="text-decoration: none">
            <v-btn color="white" depressed class="connectButton" large rounded>
              Let's Connect
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </NuxtLink>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="10" lg="6" md="6" xl="5">
          <img src="../assets/images/Saly-1 1.png" alt="" style="width: 100%" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2
            class="text-xl-h4"
            style="font-family: 'Noto sans' !important; font-weight: bold"
          >
            Services that will help
          </h2>
          <br />
          <h2
            style="color: #6155a6; font-family: 'Noto sans' !important"
            class="text-xl-h4"
          >
            Your Business
          </h2>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" lg="2" md="3" xl="2" class="mt-15">
          <div class="servicebox">
            <img src="../assets/images/Phone 1.png" alt="" width="100%" />
            <span>Progressive Web Apps</span>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="3" xl="2">
          <div class="servicebox">
            <img src="../assets/images/iMac 1.png" alt="" width="100%" />
            <span>Front End Development</span>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="3" xl="2" class="mt-15">
          <div class="servicebox">
            <img src="../assets/images/backend.png" alt="" width="100%" />
            <span>Back End Development</span>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="3" xl="2">
          <div class="servicebox">
            <img src="../assets/images/wordpress (1).png" alt="" width="100%" />
            <span>Wordpress Development</span>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-15">
        <v-col cols="12">
          <h2
            class="text-xl-h4"
            style="font-family: 'Noto sans' !important; font-weight: bold"
          >
            Let's see what I've been
          </h2>
          <br />
          <h2
            style="color: #6155a6; font-family: 'Noto sans' !important"
            class="text-xl-h4"
          >
            working on
          </h2>
          <p class="mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            atque quo consectetur a voluptatum nihil, quasi illum repellat optio
            quaerat est fugit adipisci suscipit cumque quisquam, harum numquam
            eum. Deleniti?
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-tabs v-model="tab">
            <v-tab class="tabHead">
              <v-btn rounded depressed large class="tabBtn">PWA</v-btn>
            </v-tab>
            <v-tab class="tabHead">
              <v-btn rounded depressed large class="tabBtn">Front End</v-btn>
            </v-tab>
            <v-tab class="tabHead">
              <v-btn rounded depressed large class="tabBtn">Back End</v-btn>
            </v-tab>
            <v-tab class="tabHead">
              <v-btn rounded depressed large class="tabBtn">Wordpress</v-btn>
            </v-tab>
            <v-tab class="tabHead">
              <v-btn rounded depressed large class="tabBtn">Courses</v-btn>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab" class="mt-5">
            <v-tab-item>
              <v-row class="justify-center">
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  xl="4"
                  v-for="pwa in this.pwas"
                  :key="pwa.id"
                >
                  <v-card class="el ma-5 portfolios">
                    <v-img height="300" :src="pwa.image">
                      <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="purple"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-title
                      class="pb-1 text-h6"
                      style="
                        font-family: 'Noto Sans' !important;
                        font-weight: bold;
                      "
                    >
                      {{ pwa.name }}
                    </v-card-title>
                    <v-card-actions class="pl-5 pb-3">
                      <a :href="pwa.link" target="_blank" class="portlink"
                        >Check it Out!</a
                      >
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item>
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  xl="6"
                  v-for="front in frontend"
                  :key="front.id"
                >
                  <v-card class="el ma-5 portfolios">
                    <v-img height="300" :src="front.image">
                      <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="purple"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-title
                      class="pb-1 text-h6"
                      style="
                        font-family: 'Noto Sans' !important;
                        font-weight: bold;
                      "
                    >
                      {{ front.name }}
                    </v-card-title>
                    <v-card-actions class="pl-5 pb-3">
                      <a :href="front.link" target="_blank" class="portlink"
                        >Check it Out!</a
                      >
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item>
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  xl="6"
                  v-for="back in backend"
                  :key="back.id"
                >
                  <v-card class="el ma-5 portfolios">
                    <v-img height="300" :src="back.image">
                      <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="purple"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-title
                      class="pb-1 text-h6"
                      style="
                        font-family: 'Noto Sans' !important;
                        font-weight: bold;
                      "
                    >
                      {{ back.name }}
                    </v-card-title>
                    <v-card-actions class="pl-5 pb-3">
                      <a :href="back.link" target="_blank" class="portlink"
                        >Check it Out!</a
                      >
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item>
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  xl="6"
                  v-for="word in wordpress"
                  :key="word.id"
                >
                  <v-card class="el ma-5 portfolios">
                    <v-img height="300" :src="word.image">
                      <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="purple"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-title
                      class="pb-1 text-h6"
                      style="
                        font-family: 'Noto Sans' !important;
                        font-weight: bold;
                      "
                    >
                      {{ word.name }}
                    </v-card-title>
                    <v-card-actions class="pl-5 pb-3">
                      <a :href="word.link" target="_blank" class="portlink"
                        >Check it Out!</a
                      >
                    </v-card-actions>
                  </v-card></v-col
                >
              </v-row>
            </v-tab-item>
            <v-tab-item>
              <v-row>
                <v-col
                  cols="12"
                  lg="4"
                  md="6"
                  xl="4"
                  v-for="course in courses"
                  :key="course.id"
                >
                  <v-card class="el ma-5 portfolios">
                    <v-img height="300" :src="course.image">
                      <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="purple"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-title
                      class="pb-1 text-h6"
                      style="
                        font-family: 'Noto Sans' !important;
                        font-weight: bold;
                      "
                    >
                      {{ course.name }}
                    </v-card-title>
                    <v-card-actions class="pl-5 pb-3">
                      <a :href="course.link" target="_blank" class="portlink"
                        >Check it Out!</a
                      >
                    </v-card-actions>
                  </v-card></v-col
                >
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
      <v-row class="justify-center mb-5">
        <v-col cols="12" lg="8" md="8" xl="8">
          <h3 style="text-align: center; font-size: 30px">
            I can't wait to work with you!
          </h3>
          <div class="d-flex justify-center">
            <NuxtLink to="/contact" style="text-decoration: none">
              <v-btn
                color="pink"
                depressed
                rounded
                dark
                x-large
                class="seeHow mt-10"
                >Let's Connect</v-btn
              >
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import portfolios from "../portfolios/pwas.json";
import Nav from "../components/nav.vue";
export default {
  components: { Nav },
  name: "IndexPage",
  layout: "main",
  data() {
    return {
      tab: null,
      pwas: portfolios,
      frontend: portfolios,
      backend: portfolios,
      wordpress: portfolios,
      courses: portfolios,
    };
  },
  mounted() {
    console.log("pwas", this.pwas);
  },
};
</script>
<style lang="scss" src="../assets/style.scss"></style>
