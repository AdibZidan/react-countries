Feature: Country Detail

  Background:
    Given I successfully intercept the country's list API
    And I successfully intercept "Austria" country's detail API

  Scenario: I am navigated back to Country List
    Given I am in the country list page
    When I click on the "Ukraine" country card
    Then I verify the country detail has "https://flagcdn.com/ua.svg" image source
    And I click on the Back button
    And I see a total of "3" countries

  Scenario: See the Country Detail
    Given I am in the country list page
    When I click on the "Austria" country card
    Then I verify the country detail has "https://flagcdn.com/at.svg" image source
    And I see the "Austria" country detail name
    And I verify the following country details:
      | LABEL            | VALUE               |
      | Native Name      | Republik Österreich |
      | Population       | 8,917,205           |
      | Region           | Europe              |
      | Capital          | Vienna              |
      | Top Level Domain | .at                 |
      | Currency         | Euro                |
      | Language         | German              |
    And I see the following "Austria" Border Countries:
      | Hungary       |
      | Slovenia      |
      | Switzerland   |
      | Czechia       |
      | Germany       |
      | Liechtenstein |
      | Italy         |
      | Slovakia      |

  Scenario: I am navigated to Country Border Detail
    Given I am in the country list page
    When I click on the "Austria" country card
    And I click on "Hungary" border country
    Then I verify that the url includes "detail/Hungary"
