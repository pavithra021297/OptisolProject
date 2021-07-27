@register
Feature: To validate register new user functionality

  Scenario Outline: To validate registering a new account
    Given User is in login page
    When User click register button
    And User enter "<firstname>","<lastname>","<username>","<email>" and "<password>"
    And User accept terms of privacy and click register button
    Then User validate registration is successful

    Examples: 
      | firstname | lastname | username        | email             | password |
      | PavithraC | chandar  | Pavithrachandar | pavi456@gmail.com | Pavi@123 |
