// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      "name": "Spullekes.net",
      "short_name": "Spullekes",
      "description": "Een plek voor jouw tweede hands spullekes",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#12355B",
      "theme_color": "#12355B",
      icons: [
        {
          src: "/spullekes-icons_64x64.png",
          sizes: "64x64",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/spullekes-icons_144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/spullekes-icons_192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/spullekes-icons_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any, maskable",
        },
      ]
    }
  },
  plugins: ["~/plugins/firebaseConfig.js"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "siteMain": {
              100: "#12355B",
              200: "#F0F2EF",
              300: "#FF206E"
            }
          },
        }
      }
    }
  }
}
)