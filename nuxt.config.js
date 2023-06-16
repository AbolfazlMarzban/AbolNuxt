export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  head: {
    title: "AbolfazlMarzban",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/fav.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/tipTapVuetify.js"
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "http://localhost:3000",
    browserBaseURL: "http://localhost:4000", // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  vuetify: {
    customVariables: ["~@/assets/variables.scss"],
    defaultAssets: {
      font: {
        family: "Noto sans",
        size: 15,
      },
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#212121",
          bg: "#ffffff",
          surface: "#ffffff",
          accent: "#424242",
          secondary: "E91E63",
          info: "#FFF9C4",
          warning: "#FDD835",
          error: "#D50000",
          success: "#388E3C",
        },
        dark: {
          primary: "#212121",
          bg: "#0a0514",
          surface: "#130a24",
          accent: "#424242",
          secondary: "E91E63",
          info: "#FFF9C4",
          warning: "#FDD835",
          error: "#D50000",
          success: "#388E3C",
        },
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { transpile: ["vuetify/lib", "tiptap-vuetify"] },
};
