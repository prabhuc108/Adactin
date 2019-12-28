$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for adactin application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 193300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SampleSuccessBuild"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"Prabhuvenkat\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter \"prabhu9619\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 2796208600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prabhuvenkat",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 179531800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prabhu9619",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 106474100,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 1134175900,
  "status": "passed"
});
formatter.after({
  "duration": 187300,
  "status": "passed"
});
});