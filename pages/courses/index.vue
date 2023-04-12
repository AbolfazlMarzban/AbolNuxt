<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex flex-column justify-center text-center">
            <h1>Learn web developement with me!</h1>
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              delectus cupiditate recusandae eos ab corporis consectetur
              distinctio quas similique odit saepe, doloremque iste quidem.
              Temporibus nihil perspiciatis totam dolorum et?</span
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <span style="font-size: 30px; font-weight: bold">Our</span>
          <span style="font-size: 30px; font-weight: bold; color: #6155a6"
            >Courses:</span
          >
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
                    <v-row class="fill-height" justify="center" align="center">
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
                  style="font-family: 'Noto Sans' !important; font-weight: bold"
                >
                  {{ course.name }}
                </v-card-title>
                <v-card-actions class="pl-5 pb-3">
                  <a :href="course.link" target="_blank" class="portlink"
                    >Check it Out!</a
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import coursejson from "../../courses/courses.json";
export default {
  layout: "main",
  data() {
    return {
      courses: coursejson,
    };
  },
};
</script>

<style></style>
