Feature: Country List

  Background:
    Given I successfully intercept the country's list API

  Scenario: See the Filter Inputs and the Country List
    When I am in the country list page
    Then I see the country list filters
    And I see a total of "3" countries
    And I see the following country card information:
      | SRC                             | NAME    | POPULATION | REGION | CAPITAL  |
      | https://flagcdn.com/w320/sy.png | Syria   | 17,500,657 | Asia   | Damascus |
      | https://flagcdn.com/w320/ua.png | Ukraine | 44,134,693 | Europe | Kyiv     |
      | https://flagcdn.com/w320/at.png | Austria | 8,917,205  | Europe | Vienna   |

  Scenario: I am navigated to the country detail page
    Given I successfully intercept "Syria" country's detail API
    When I am in the country list page
    And I click on the "Syria" country card
    Then I verify that the url includes "/detail/Syria"
