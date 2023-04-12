<template>
  <div>
    <v-container>
      <v-row class="mt-16">
        <v-col cols="12">
          <h1>Let's get connected!</h1>
          <span>Let's get connected and make that</span>
          <br />
          <span style="color: #6155a6">Dream Project of Yours</span>
        </v-col>
      </v-row>
      <v-row class="mb-16">
        <v-col cols="12" lg="6" md="6" xl="6">
          <v-text-field
            v-model="fullname"
            label="fullname"
            required
          ></v-text-field>
          <v-text-field v-model="email" label="email" required></v-text-field>
          <v-textarea
            v-model="message"
            label="message"
            outlined
            required
          ></v-textarea>
          <v-btn color="purple" dark rounded block>Send your Message!</v-btn>
          <v-row class="mt-10">
            <v-col cols="2">
              <a href="" class="social">
                <v-icon color="black" large>mdi-linkedin</v-icon>
              </a>
            </v-col>
            <v-col cols="2">
              <a href="" class="social">
                <v-icon color="black" large>mdi-whatsapp</v-icon>
              </a>
            </v-col>
            <v-col cols="2">
              <a href="" class="social">
                <v-icon color="black" large>mdi-instagram</v-icon>
              </a>
            </v-col>
            <v-col cols="2">
              <a href="" class="social">
                <v-icon color="black" large>mdi-github</v-icon>
              </a>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-icon color="black">mdi-phone</v-icon>
              <span>+989183933164</span>
            </v-col>
            <v-col cols="12">
              <v-icon color="black">mdi-email</v-icon>
              <span>abolfazlmarzban39@gmail.com</span>s
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6" md="6" xl="5">
          <img src="../../assets/images/finaly 1.png" alt="" width="100%" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      fullname: "",
      email: "",
      message: "",
    };
  },
};
</script>

<style></style>
