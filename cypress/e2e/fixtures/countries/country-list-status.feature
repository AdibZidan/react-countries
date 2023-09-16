Feature: Country List Status

  Scenario: See the Country List Pending Message
    Given I intercept the country's list API with pending status
    When I am in the country list page
    Then I see the "Countries are loading..." "loading" message

  Scenario: See the Country List Error Message
    Given I intercept the country's list API with error status
    When I am in the country list page
    Then I see the "Something went wrong..." "error" message
