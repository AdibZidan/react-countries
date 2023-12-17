Feature: County Detail Status

  Scenario: See the Country Detail Pending State
    Given I intercept "Austria" country's detail API with pending status
    And I am in "Austria" country detail page
    Then I see the country detail skeleton

  Scenario: See the Country Detail Error State
    Given I intercept "Austria" country's detail API with error status
    And I am in "Austria" country detail page
    Then I see the country detail error message
