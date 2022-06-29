@runall
Feature: cypress cucumber boiler plate project example tests

  @sauceDemo
  Scenario: Invoke Sauce Demo url
    Given Invoke SauceDemo URL

  @sauceDemo
  @sauceLogin
  Scenario: Login to Sauce Demo site
    Given Invoke SauceDemo URL
    And Login as standard_user

  @google
  Scenario: Invoke Google Page
    Given  Invoke Google Page

  @amazon
  Scenario: Invoke Amazon Page
    Given Invoke Amazon Page

  @facebook
  Scenario: Invoke facebook Page
    Given Invoke facebook Page


