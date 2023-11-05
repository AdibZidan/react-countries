Feature: Country List Status

  Scenario: See the Country List Pending State
    Given I intercept the country's list API with pending status
    When I am in the country list page
    Then I see the country list card skeletons

  Scenario: See the Country List Error State
    Given I intercept the country's list API with error status
    When I am in the country list page
    Then I see the country list error message

  Scenario: See the Country List With No Results Found State
    Given I successfully intercept the country's list API
    When I am in the country list page
    And I type "test" in the country list filter
    Then I see the country list empty with no results found message
