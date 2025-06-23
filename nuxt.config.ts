// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Bắt buộc để Nuxt hoạt động với SSG
  nitro: {
    preset: "static", // Xuất ra static site khi generate
    prerender: {
      crawlLinks: true, // Tự động phát hiện và generate các route từ <a>
      routes: ["/"], // Bạn có thể thêm các route cụ thể nếu cần
    },
  },

  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/icon"],
  i18n: {
    defaultLocale: "ja",
    locales: [
      // {
      //   code: "vi",
      //   name: "Tiếng Việt",
      //   file: "vi.json",
      // },
      {
        code: "ja",
        name: "日本語",
        file: "ja.json",
      },
    ],
    langDir: "locales/",
    strategy: "prefix_except_default",
  },
  css: ["~/assets/css/main.css"],
  devServer: {
    host: "0.0.0.0",
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
