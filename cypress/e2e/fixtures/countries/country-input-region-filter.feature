Feature: Country Input Region Filter

  Background:
    Given I successfully intercept the country's list API

  Scenario: See the Filtered Country List
    Given I am in the country list page
    And I click on the country list filter by region input
    Then I see the following country list regions:
      | REGION  |
      | Africa  |
      | America |
      | Asia    |
      | Europe  |
      | Oceania |
    And I click on the "Asia" region input
    And I see a total of "1" countries
    And I see the following country card information:
      | SRC                             | NAME  | POPULATION | REGION | CAPITAL  |
      | https://flagcdn.com/w320/sy.png | Syria | 17,500,657 | Asia   | Damascus |

  Scenario: See the Original Country List after resetting the region filter
    Given I am in the country list page
    And I click on the country list filter by region input
    And I click on the "Asia" region input
    And I click on the Reset button
    Then I see a total of "3" countries
