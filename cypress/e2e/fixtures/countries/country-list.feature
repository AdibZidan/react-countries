Feature: Country List

  Scenario: See the Country List
    Given I successfully intercept the country's list API
    When I am in the country list page
    Then I see a total of "3" countries
    And I see the following country card information:
      | SRC                             | NAME    | POPULATION | REGION | CAPITAL  |
      | https://flagcdn.com/w320/sy.png | Syria   | 17,500,657 | Asia   | Damascus |
      | https://flagcdn.com/w320/ua.png | Ukraine | 44,134,693 | Europe | Kyiv     |
      | https://flagcdn.com/w320/at.png | Austria | 8,917,205  | Europe | Vienna   |
