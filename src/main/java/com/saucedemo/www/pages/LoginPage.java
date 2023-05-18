package com.saucedemo.www.pages;

import com.saucedemo.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "user-name")
    WebElement userNameField;
    @CacheLookup
    @FindBy(id = "password")
    WebElement passwordField;
    @CacheLookup
    @FindBy(id = "login-button")
    WebElement loginButton;
    @CacheLookup
    @FindBy(xpath = "//span[@class='title']")
    WebElement actualText;


    //Send text to username field
    public void enterUserName(String userName) {
        log.info("Enter Username : " + userNameField.toString());
        sendTextToElement(userNameField, userName);
    }

    //Send text to password field
    public void enterPassword(String password) {
        log.info("Enter password : " + passwordField.toString());
        sendTextToElement(passwordField, password);
    }

    //Click on login button
    public void clickOnLoginButton() {
        log.info("Click on login button : " + loginButton.toString());
        clickOnElement(loginButton);
    }


    //Get text from the element
    public String getActualText() {
        log.info("Get actual text : " + actualText.toString());
        return getTextFromElement(actualText);
    }
}
