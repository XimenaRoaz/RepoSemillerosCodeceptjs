/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './features/*.feature',
  output: './output',

  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com/',
      show: true,
      browser: 'chromium'
    }
  },

  include: {
    I: './steps_file.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },

  plugins: {
  screenshot: {
    enabled: true
  },

  allure: {
    enabled: true,
    require: "allure-codeceptjs"
  }
},

  name: 'sauce-demo-automation'
}