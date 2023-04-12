<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8" md="8" xl="8">
          <h1>Who am I?</h1>
          <h2>Abolfazl Marzban</h2>
          <h2>Front End Developer</h2>
          <span>Birth Date:</span>
          <span>1996</span>
          <br />
          <span>marital status:</span>
          <span>married</span>
          <h2 class="mt-3">Summary of my c.v</h2>
          <p class="mt-2">
            I'm a front end developer skilled in HTML, CSS and Javascript, my
            specialties are Vuejs and Nuxtjs. I'm also familiar with Nodejs as a
            backend framework using Javascript and mongoDB as a database which
            uses json files to save data. I'm also experienced with developing
            and designing wordpress websites including developing exclusive
            wordpress themes and plugins, as well as designing websites with
            wordpress pagebuilders lik elementor and visual composer.
          </p>
          <h2>Job Experiences:</h2>

          <h3 class="mt-3">Front End Developer at Pargas Agency</h3>
          <span>Pargas digital marketing agency</span>
          <br />
          <span>Location:</span>
          <span>Iran, Khouzestan, Ahvaz</span>
          <br />
          <span>Duration:</span>
          <span>2020-2021</span>
          <br />
          <span>responsibilities:</span>
          <span>
            <ul class="mb-3">
              <li>
                developing and designing different kinds of websites using
                wordpress
              </li>
              <li>
                developing company websites, ecommerce websites, booking
                websites, ...
              </li>
            </ul>
          </span>
          <hr />
          <h3 class="mt-3">Front End Developer at Pan Co.</h3>
          <span>Pan printing and advertisement company</span>
          <br />
          <span>Location:</span>
          <span>Iran, Khouzestan, Ahvaz</span>
          <br />
          <span>Duration:</span>
          <span>2021-2023</span>
          <br />
          <span>responsibilities:</span>
          <span>
            <ul class="mb-3">
              <li>
                developing and designing different kinds of websites using
                wordpress
              </li>
              <li>
                developing Chapex.ir web app which is used to automate the
                difficult process of taking orders and producing the product for
                a big printing company(such as Vistaprint web app).
              </li>
              <li>
                Chapex.ir is developed by Nuxtjs as frontend javascript
                framework and Vuetify as UI framework, alse Nodejs and
                Typescript is used for backend of the web app
              </li>
            </ul>
          </span>
          <h2>Skills:</h2>
          <br />
          <v-chip color="purple" text-color="white" class="ma-1">Html</v-chip>
          <v-chip color="purple" text-color="white" class="ma-1">Css</v-chip>
          <v-chip color="purple" text-color="white" class="ma-1">Scss</v-chip>
          <v-chip color="purple" text-color="white" class="ma-1"
            >Javascript</v-chip
          >
          <v-chip color="purple" text-color="white" class="ma-1">Vuejs</v-chip>
          <v-chip color="purple" text-color="white" class="ma-1">Nuxtjs</v-chip>
          <v-chip color="purple" text-color="white" class="ma-1"
            >Vuetify</v-chip
          >
          <v-chip color="purple" text-color="white" class="ma-1"
            >Bootstrap</v-chip
          >
          <v-chip color="purple" text-color="white" class="ma-1">Nodejs</v-chip>
          <v-chip color="purple" text-color="white" class="ma-1"
            >mongoDB</v-chip
          >
          <v-chip color="purple" text-color="white" class="ma-1"
            >Wordpress</v-chip
          >
          <v-chip color="purple" text-color="white" class="ma-1"
            >Elementor</v-chip
          >
          <v-chip color="purple" text-color="white" class="ma-1"
            >Visual Composer</v-chip
          >
        </v-col>
        <v-col cols="12" lg="4" md="4" xl="4">
          <img
            src="../../assets/images/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
            alt=""
            width="100%"
            class="profilepic"
          />
          <br />
          <h2 class="mt-3">English Skills:</h2>
          <span>Reading skills:</span>
          <br />
          <v-rating length="5" color="pink" value="5" hover></v-rating>
          <br />
          <span>Writing skills:</span>
          <br />
          <v-rating length="5" color="pink" value="5" hover></v-rating>
          <br />
          <span>Speaking skills:</span>
          <br />
          <v-rating length="5" color="pink" value="4" hover></v-rating>
          <br />
          <span>Listening skills:</span>
          <br />
          <v-rating length="5" color="pink" value="4" hover></v-rating>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <span style="font-size: 30px">My</span>
          <span style="font-size: 30px; color: #6155a6">Projects:</span>
          <br />
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
              <v-row>
                <v-col
                  cols="12"
                  lg="6"
                  md="6"
                  xl="6"
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
                  lg="6"
                  md="6"
                  xl="6"
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
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-center">
            <NuxtLink to="/contact" style="text-decoration: none">
              <v-btn color="pink" depressed rounded dark x-large class="seeHow"
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
import portfolios from "../../portfolios/pwas.json";
export default {
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
};
</script>

<style></style>
