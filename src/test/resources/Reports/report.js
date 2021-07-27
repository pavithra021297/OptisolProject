$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/Login.feature");
formatter.feature({
  "name": "To validate login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userIsInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using different credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "td1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAndPassword(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate successful login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userValidateSuccessfulLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Register.feature");
formatter.feature({
  "name": "To validate register new user functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate registering a new account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click register button",
  "keyword": "When "
});
formatter.step({
  "name": "User enter \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cusername\u003e\",\"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User accept terms of privacy and click register button",
  "keyword": "And "
});
formatter.step({
  "name": "User validate registration is successful",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "username",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "pavi",
        "chandar",
        "Pavithra",
        "pavi@gmail.com",
        "Pavi@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate registering a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userIsInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click register button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"pavi\",\"chandar\",\"Pavithra\",\"pavi@gmail.com\" and \"Pavi@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userEnterAnd(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept terms of privacy and click register button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userAcceptTermsOfPrivacyAndClickRegisterButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate registration is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userValidateRegistrationIsSuccessful()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[text()\u003d\u0027Benefits of the Premium Plans\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.164)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NMN3IV40\u0027, ip: \u0027192.168.1.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\GREENS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55004}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 042959e3b073f371cee46cb5459a8748\n*** Element info: {Using\u003dxpath, value\u003d//h1[text()\u003d\u0027Benefits of the Premium Plans\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.stepdefinition.StepDefinition.userValidateRegistrationIsSuccessful(StepDefinition.java:123)\r\n\tat ✽.User validate registration is successful(file:src/test/resources/FeatureFiles/Register.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/UploadMedia.feature");
formatter.feature({
  "name": "To validate Upload media functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@UploadMedia"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userIsInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username and password",
  "rows": [
    {
      "cells": [
        "td1"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userEnterUsernameAndPassword(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate successful login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userValidateSuccessfulLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate uploading a image",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@UploadMedia"
    }
  ]
});
formatter.step({
  "name": "User click create post",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userClickCreatePost()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter description and tagname",
  "rows": [
    {
      "cells": [
        "td1"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userEnterDescriptionAndTagname(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the file to be uploaded",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userSelectTheFileToBeUploaded()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click post button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userClickPostButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate post has been uploaded succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userValidatePostHasBeenUploadedSuccesfully()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(text(),\u0027Butterfly\u0027) and @class\u003d\u0027fs10 text-white my-2 ng-star-inserted\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.164)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NMN3IV40\u0027, ip: \u0027192.168.1.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\GREENS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59203}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b9705ca5604d89ab5f6379ee72686bd8\n*** Element info: {Using\u003dxpath, value\u003d//p[contains(text(),\u0027Butterfly\u0027) and @class\u003d\u0027fs10 text-white my-2 ng-star-inserted\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat org.stepdefinition.StepDefinition.userValidatePostHasBeenUploadedSuccesfully(StepDefinition.java:89)\r\n\tat ✽.User validate post has been uploaded succesfully(file:src/test/resources/FeatureFiles/UploadMedia.feature:17)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
});