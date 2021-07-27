@UploadMedia
Feature: To validate Upload media functionality

  Background: 
    Given User is in login page
    When User enter username and password
      | td1 |
    And User click login button
    And User validate successful login

  Scenario: To validate uploading a image
    When User click create post
    And User enter description and tagname
      | td1 |
    And User select the file to be uploaded
    And User click post button
    Then User validate post has been uploaded succesfully
