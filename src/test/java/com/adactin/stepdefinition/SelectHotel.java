package com.adactin.stepdefinition;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.BookingPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SelectHotel extends BaseClass {
	
	
	
	@When("^user select radio button$")
	public void user_select_radio_button() throws Throwable {
		BookingPage bp = new BookingPage(driver);
		clickOnElement(bp.getRadio());
	}

	@Then("^user verify the BookingPage in the homepage$")
	public void user_verify_the_BookingPage_in_the_homepage() throws Throwable {
		BookingPage bp = new BookingPage(driver);
		clickOnElement(bp.getCon());
	}


}
