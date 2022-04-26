module.exports = {
  head: {
    title: 'NodeBird',
  },
  modules: [
    '@nuxtjs/axios',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {},
  axios: {
    browserBaseURL: 'http://localhost:3086',
    baseURL: 'http://localhost:3086',
    https: false,
  },
  server: {
    port: 3081,
  },
};