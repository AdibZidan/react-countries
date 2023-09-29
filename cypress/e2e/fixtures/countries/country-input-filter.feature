Feature: Country Input Filter

  Background:
    Given I successfully intercept the country's list API

  Scenario: See the Filtered Country List
    Given I am in the country list page
    When I see the country list search input
    And I type "s" in the country list filter
    Then I see a total of "2" countries
    And I see the following country card information:
      | SRC                             | NAME    | POPULATION | REGION | CAPITAL  |
      | https://flagcdn.com/w320/sy.png | Syria   | 17,500,657 | Asia   | Damascus |
      | https://flagcdn.com/w320/at.png | Austria | 8,917,205  | Europe | Vienna   |
