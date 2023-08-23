const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "vspqy5",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://pushing-front.vercel.app/',
    // watchForFileChanges: false, // no actualiza cada vez que cambiamos algo
    // defaultCommandTimeout: 5000 // settear un wait de 5s si el elemento no existe, chequea siempre hasta que exista durante 5s 
  },
  env: {
    username: 'pushingit',
    password: '123456!',
  },
});


