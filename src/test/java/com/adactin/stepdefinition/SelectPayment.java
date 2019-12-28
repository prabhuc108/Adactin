package com.adactin.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.ConformationPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SelectPayment extends BaseClass {
	
	@When("^user select valid Full Name$")
	public void user_select_valid_Full_Name() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		inputOnElement(cp.getFirstname(),"Prabhu");
		
	}

	@When("^user select valid Last Name$")
	public void user_select_valid_Last_Name() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		inputOnElement(cp.getLastname(), "C");
	}

	@When("^user select valid Billing Address$")
	public void user_select_valid_Billing_Address() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		inputOnElement(cp.getAddress(), "Chennai");
	}

	@When("^user select valid Credit Card No$")
	public void user_select_valid_Credit_Card_No() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		inputOnElement(cp.getCreditcard(),"1234567891234567");
	}

	@When("^user select valid Credit Card Type$")
	public void user_select_valid_Credit_Card_Type() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		dropDown(cp.getCardtype(),"text","Master Card");
	}

	@When("^user select valid Expiry Month$")
	public void user_select_valid_Expiry_Month() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		dropDown(cp.getMonth(),"text","September");
	}

	@When("^user select valid Expiry Year$")
	public void user_select_valid_Expiry_Year() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		dropDown(cp.getYear(),"text","2020");
	}

	@When("^user select valid CVV Number$")
	public void user_select_valid_CVV_Number() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		inputOnElement(cp.getCvvnum(),"450");
	}
	
	@When("^user select valid Booknow$")
	public void user_select_valid_Booknow() throws Throwable {
		ConformationPage cp = new ConformationPage(driver);
		clickOnElement(cp.getBooknowbtn());
		Thread.sleep(6000);
	}
	

	@Then("^user click login in the conformationpage$")
	public void user_click_login_in_the_conformationpage() throws Throwable {
		WebDriver ldriver = null;
		ConformationPage cp = new ConformationPage(ldriver);
		clickOnElement(cp.getLogout());
	}

	@Then("^user click login in the conformationpage finally$")
	public void user_click_login_in_the_conformationpage_finally() throws Throwable {
	}

}
