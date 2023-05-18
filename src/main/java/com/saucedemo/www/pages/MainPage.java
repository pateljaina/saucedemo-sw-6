package com.saucedemo.www.pages;

import com.saucedemo.www.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class MainPage extends Utility {
    private static final Logger log = LogManager.getLogger(MainPage.class.getName());

    public MainPage(){
        PageFactory.initElements(driver, this);
    }
    By listOfProducts = By.xpath("//div[@class='inventory_item']");

    //List of displayed web elements
    public int numberOfProductsDisplayed() {
        log.info("Number of products displayed : ");
        List<WebElement> numberOfProducts = driver.findElements(listOfProducts);
        return numberOfProducts.size();
    }
}
