package com.saucedemo.www.steps;

import com.saucedemo.www.pages.LoginPage;
import com.saucedemo.www.pages.MainPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^I am on login page$")
    public void iAmOnLoginPage() {
    }

    @When("^I Enter “standard_user” username$")
    public void iEnterStandard_userUsername() {
        new LoginPage().enterUserName("standard_user");
    }

    @And("^I Enter “secret_sauce” password$")
    public void iEnterSecret_saucePassword() {
        new LoginPage().enterPassword("secret_sauce");
    }

    @And("^I Click on ‘LOGIN’ button$")
    public void iClickOnLOGINButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I Verify the text “PRODUCTS”$")
    public void iVerifyTheTextPRODUCTS() {
        String expectedText = "Products";
        Assert.assertEquals(new LoginPage().getActualText(), expectedText, "User is not navigated to Main page");
    }

    @Then("^I Verify that six products are displayed on page$")
    public void iVerifyThatSixProductsAreDisplayedOnPage() {
        int expectedNumberOfProducts = 6;
        int actualNumberOfProducts = new MainPage().numberOfProductsDisplayed();
        Assert.assertEquals(expectedNumberOfProducts, actualNumberOfProducts, "Expected number of products are not displayed");
    }

}
