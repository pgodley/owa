const cypress = require('cypress');
console.log('Start of testing');
cypress.run({
    spec:"cypress/integration/owa_test.js"
}) .then((results) => {
    //The tests have finished, check the results
    if(results.totalTests !== results.totalPassed)
    {
     console.log("error:send message to IT");   
    }
  })
  .catch((err) => {
    console.log("error:send message to IT");   
  })