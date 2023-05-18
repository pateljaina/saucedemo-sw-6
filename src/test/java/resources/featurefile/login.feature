Feature: Login Test

  As a user I want to login to homepage

  @smoke @regression
  Scenario: User should login successfully with valid credentials
    Given I am on login page
    When I Enter “standard_user” username
    And I Enter “secret_sauce” password
    And I Click on ‘LOGIN’ button
    Then I Verify the text “PRODUCTS”

  @sanity @regression
  Scenario: User should be able to see six products displayed on page
    Given I am on login page
    When I Enter “standard_user” username
    And I Enter “secret_sauce” password
    And I Click on ‘LOGIN’ button
    Then I Verify that six products are displayed on page