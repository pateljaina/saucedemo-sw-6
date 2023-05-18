$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs a user I want to login to homepage",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2650746200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I Enter “standard_user” username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Enter “secret_sauce” password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Click on ‘LOGIN’ button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Verify the text “PRODUCTS”",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 65141000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterStandard_userUsername()"
});
formatter.result({
  "duration": 95159100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterSecret_saucePassword()"
});
formatter.result({
  "duration": 52542600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLOGINButton()"
});
formatter.result({
  "duration": 88244400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyTheTextPRODUCTS()"
});
formatter.result({
  "duration": 29084400,
  "status": "passed"
});
formatter.after({
  "duration": 596504000,
  "status": "passed"
});
formatter.before({
  "duration": 1464684300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to see six products displayed on page",
  "description": "",
  "id": "login-test;user-should-be-able-to-see-six-products-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I Enter “standard_user” username",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I Enter “secret_sauce” password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Click on ‘LOGIN’ button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify that six products are displayed on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 17400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterStandard_userUsername()"
});
formatter.result({
  "duration": 56236800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterSecret_saucePassword()"
});
formatter.result({
  "duration": 41355900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLOGINButton()"
});
formatter.result({
  "duration": 61018300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatSixProductsAreDisplayedOnPage()"
});
formatter.result({
  "duration": 20553700,
  "status": "passed"
});
formatter.after({
  "duration": 586335900,
  "status": "passed"
});
});