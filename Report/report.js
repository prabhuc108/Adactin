$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinApplication.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for adactin application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter \"\u003cusername\u003e\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;1"
    },
    {
      "cells": [
        "anuamu04123",
        "900388183"
      ],
      "line": 18,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;2"
    },
    {
      "cells": [
        "Mahamilky24",
        "hari.9500"
      ],
      "line": 19,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;3"
    },
    {
      "cells": [
        "Mahamilky22",
        "hari.9500"
      ],
      "line": 20,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;4"
    },
    {
      "cells": [
        "Mahamilky33",
        "hari.9500"
      ],
      "line": 21,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 287400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Prabhuvenkat\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"prabhu9619\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 7007557700,
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
  "duration": 335069499,
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
  "duration": 135599901,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 2466432700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter \"anuamu04123\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"900388183\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 959589400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anuamu04123",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 137365700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "900388183",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 127393901,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 2344805100,
  "status": "passed"
});
formatter.after({
  "duration": 208500,
  "status": "passed"
});
formatter.before({
  "duration": 98899,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Prabhuvenkat\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"prabhu9619\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 1088346400,
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
  "duration": 123525699,
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
  "duration": 130059600,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 1660895900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter \"Mahamilky24\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"hari.9500\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 854960100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahamilky24",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 116747701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hari.9500",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 92590000,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 841984200,
  "status": "passed"
});
formatter.after({
  "duration": 81700,
  "status": "passed"
});
formatter.before({
  "duration": 408201,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Prabhuvenkat\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"prabhu9619\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 825878500,
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
  "duration": 126744600,
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
  "duration": 96003500,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 1515067600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter \"Mahamilky22\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"hari.9500\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 766829301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahamilky22",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 151378599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hari.9500",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 93457500,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 660201799,
  "status": "passed"
});
formatter.after({
  "duration": 105500,
  "status": "passed"
});
formatter.before({
  "duration": 264200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Prabhuvenkat\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"prabhu9619\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 613794600,
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
  "duration": 125422700,
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
  "duration": 98394700,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 1730294100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter \"Mahamilky33\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"hari.9500\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 676444000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahamilky33",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_username(String)"
});
formatter.result({
  "duration": 120368000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hari.9500",
      "offset": 12
    }
  ],
  "location": "Login.user_enter_as_password(String)"
});
formatter.result({
  "duration": 92213400,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 645430600,
  "status": "passed"
});
formatter.after({
  "duration": 124800,
  "status": "passed"
});
formatter.before({
  "duration": 130799,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Prabhuvenkat\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"prabhu9619\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 527992001,
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
  "duration": 130443300,
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
  "duration": 100169101,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 1100543401,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successfull SearchHotel into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-searchhotel-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@searchhotel1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user select valid Location",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user select valid Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user select valid Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user select valid Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user select valid Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user select valid Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user select valid Adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user select valid Child per Room",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user verify the SearchHotel in the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user select radio button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user verify the BookingPage in the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user select valid Full Name",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user select valid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user select valid Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user select valid Credit Card No",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user select valid Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user select valid Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user select valid Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user select valid CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user select valid Booknow",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user click login in the conformationpage",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Location()"
});
formatter.result({
  "duration": 253311500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Hotels()"
});
formatter.result({
  "duration": 155119000,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Room_Type()"
});
formatter.result({
  "duration": 128164100,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Number_Of_Rooms()"
});
formatter.result({
  "duration": 172221100,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Check_In_Date()"
});
formatter.result({
  "duration": 163324499,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Check_Out_Date()"
});
formatter.result({
  "duration": 149534401,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Adults_per_Room()"
});
formatter.result({
  "duration": 158119101,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Child_per_Room()"
});
formatter.result({
  "duration": 137866001,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_verify_the_SearchHotel_in_the_homepage()"
});
formatter.result({
  "duration": 1603290600,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_select_radio_button()"
});
formatter.result({
  "duration": 136860299,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_verify_the_BookingPage_in_the_homepage()"
});
formatter.result({
  "duration": 1218773200,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Full_Name()"
});
formatter.result({
  "duration": 124767500,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Last_Name()"
});
formatter.result({
  "duration": 65622600,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Billing_Address()"
});
formatter.result({
  "duration": 107526000,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Credit_Card_No()"
});
formatter.result({
  "duration": 152442000,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Credit_Card_Type()"
});
formatter.result({
  "duration": 115365400,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Expiry_Month()"
});
formatter.result({
  "duration": 114103300,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Expiry_Year()"
});
formatter.result({
  "duration": 113755300,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_CVV_Number()"
});
formatter.result({
  "duration": 92912200,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Booknow()"
});
formatter.result({
  "duration": 6068017200,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_click_login_in_the_conformationpage()"
});
formatter.result({
  "duration": 4661400,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.clickOnElement(BaseClass.java:88)\r\n\tat com.adactin.stepdefinition.SelectPayment.user_click_login_in_the_conformationpage(SelectPayment.java:75)\r\n\tat ✽.Then user click login in the conformationpage(AdactinApplication.feature:45)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 463362001,
  "status": "passed"
});
formatter.before({
  "duration": 108500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Prabhuvenkat\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"prabhu9619\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 652308800,
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
  "duration": 124785500,
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
  "duration": 104468300,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 1072087400,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Successfull SearchHotel into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-searchhotel-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@searchhotel2"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user select valid Location",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user select valid Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user select valid Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user select valid Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user select valid Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user select valid Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user select valid Adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user select valid Child per Room",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user verify the SearchHotel in the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user select radio button",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user verify the BookingPage in the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "user select valid Full Name",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "user select valid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user select valid Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user select valid Credit Card No",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user select valid Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user select valid Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user select valid Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user select valid CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "user select valid Booknow",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "user click login in the conformationpage",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Location()"
});
formatter.result({
  "duration": 119270400,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Hotels()"
});
formatter.result({
  "duration": 113276600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Room_Type()"
});
formatter.result({
  "duration": 146218699,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Number_Of_Rooms()"
});
formatter.result({
  "duration": 155378200,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Check_In_Date()"
});
formatter.result({
  "duration": 153018301,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Check_Out_Date()"
});
formatter.result({
  "duration": 166977200,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Adults_per_Room()"
});
formatter.result({
  "duration": 159662300,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Child_per_Room()"
});
formatter.result({
  "duration": 160787601,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_verify_the_SearchHotel_in_the_homepage()"
});
formatter.result({
  "duration": 991502100,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_select_radio_button()"
});
formatter.result({
  "duration": 82312700,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_verify_the_BookingPage_in_the_homepage()"
});
formatter.result({
  "duration": 872815900,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Full_Name()"
});
formatter.result({
  "duration": 120753301,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Last_Name()"
});
formatter.result({
  "duration": 70200299,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Billing_Address()"
});
formatter.result({
  "duration": 92880500,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Credit_Card_No()"
});
formatter.result({
  "duration": 180278701,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Credit_Card_Type()"
});
formatter.result({
  "duration": 117081700,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Expiry_Month()"
});
formatter.result({
  "duration": 146638700,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Expiry_Year()"
});
formatter.result({
  "duration": 119955900,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_CVV_Number()"
});
formatter.result({
  "duration": 86784400,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Booknow()"
});
formatter.result({
  "duration": 6075960499,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_click_login_in_the_conformationpage()"
});
formatter.result({
  "duration": 1077100,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.adactin.baseclass.BaseClass.clickOnElement(BaseClass.java:88)\r\n\tat com.adactin.stepdefinition.SelectPayment.user_click_login_in_the_conformationpage(SelectPayment.java:75)\r\n\tat ✽.Then user click login in the conformationpage(AdactinApplication.feature:69)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 413915299,
  "status": "passed"
});
formatter.before({
  "duration": 91800,
  "status": "passed"
});
formatter.before({
  "duration": 97401,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Prabhuvenkat\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"prabhu9619\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_enter_application_url()"
});
formatter.result({
  "duration": 906705100,
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
  "duration": 155094300,
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
  "duration": 94476699,
  "status": "passed"
});
formatter.match({
  "location": "Login.Prabhuvenkat()"
});
formatter.result({
  "duration": 974699300,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Successfull SearchHotel into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-searchhotel-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@searchhotel3"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "user select valid Location",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "user select valid Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "user select valid Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user select valid Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "user select valid Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "user select valid Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "user select valid Adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "user select valid Child per Room",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "user verify the SearchHotel in the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "user select radio button",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "user verify the BookingPage in the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "user select valid Full Name",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "user select valid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user select valid Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user select valid Credit Card No",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user select valid Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user select valid Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "user select valid Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "user select valid CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "user select valid Booknow",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "user click login in the conformationpage finally",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Location()"
});
formatter.result({
  "duration": 128688600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Hotels()"
});
formatter.result({
  "duration": 110030000,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Room_Type()"
});
formatter.result({
  "duration": 118093600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Number_Of_Rooms()"
});
formatter.result({
  "duration": 151142800,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Check_In_Date()"
});
formatter.result({
  "duration": 143507199,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Check_Out_Date()"
});
formatter.result({
  "duration": 149736700,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Adults_per_Room()"
});
formatter.result({
  "duration": 153259600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_select_valid_Child_per_Room()"
});
formatter.result({
  "duration": 130965900,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotel.user_verify_the_SearchHotel_in_the_homepage()"
});
formatter.result({
  "duration": 1085755399,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_select_radio_button()"
});
formatter.result({
  "duration": 65907500,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotel.user_verify_the_BookingPage_in_the_homepage()"
});
formatter.result({
  "duration": 972589800,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Full_Name()"
});
formatter.result({
  "duration": 121543600,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Last_Name()"
});
formatter.result({
  "duration": 88564500,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Billing_Address()"
});
formatter.result({
  "duration": 121942000,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Credit_Card_No()"
});
formatter.result({
  "duration": 141494200,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Credit_Card_Type()"
});
formatter.result({
  "duration": 176040400,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Expiry_Month()"
});
formatter.result({
  "duration": 110272900,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Expiry_Year()"
});
formatter.result({
  "duration": 127910500,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_CVV_Number()"
});
formatter.result({
  "duration": 92973700,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_select_valid_Booknow()"
});
formatter.result({
  "duration": 6068946199,
  "status": "passed"
});
formatter.match({
  "location": "SelectPayment.user_click_login_in_the_conformationpage_finally()"
});
formatter.result({
  "duration": 386539699,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d79.0.3945.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-PC\u0027, ip: \u0027192.168.43.129\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\prabh\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:9889}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5c5c714eae16a00a3f1e36b93c78b2e1\n*** Element info: {Using\u003did, value\u003d}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.SelectPayment.user_click_login_in_the_conformationpage_finally(SelectPayment.java:80)\r\n\tat ✽.Then user click login in the conformationpage finally(AdactinApplication.feature:93)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 406845000,
  "status": "passed"
});
});