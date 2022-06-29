#Cypress-cucumber-boilerplate 

Clone repo using `git@github.com:sandygit2201/cypress-cucumber-boilerplate.git`

* Steps to run scripts  
  * run `npm install` 
  * run `npm run sauce-demo` to run test scenarios related to sauce-demo scripts
  * run `npm run sauce-login` to run test scenarios related to sauce login scripts
  * run `npm run amazon-tests` to run test scenarios related to amazon tests
  * run `npm run runall` to run test scenarios related to run all tests
once test is completed, you can find test execution video under `cypress/videos/`

* Creating Cucumber report:
  * For every execution, `<Scenario>.cucumber.json` files are created under `cypress/cucumber-json/` folder
  * run ` node cypress/support/generateReport.js ` to create report 
  * reports are created under `cypress/reports` folder( by default it will be index.html)  
 


