package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookingPage {
	
	public static WebDriver driver;
	
	@FindBy(xpath="//input[@type='radio']")
	private WebElement radio;
	
	@FindBy(xpath="//input[@id='continue']")
	private WebElement con;
	
	public BookingPage(WebDriver bdriver) {
		this.driver = bdriver;
		PageFactory.initElements(driver, this);
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getRadio() {
		return radio;
	}

	public WebElement getCon() {
		return con;
	}
	
	
	
	

}
