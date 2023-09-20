Feature: Main Header

  Background:
    Given I successfully intercept the country's list API

  Scenario: I see the Main Header's Title with the Color Switcher Icon
    When I am in the country list page
    Then I see "Where in the world" title
    And I see a "light" background color
    And I see the theme switcher "moon" icon with the text "Dark Mode"

  Scenario: Background color changes upon clicking on the Color Switcher Icon
    Given I am in the country list page
    When I click on the "moon" theme-switcher icon
    Then I see a "dark" background color
    And I see the theme switcher "sun" icon with the text "Light Mode"
