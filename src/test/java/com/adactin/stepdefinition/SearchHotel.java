package com.adactin.stepdefinition;

import com.adactin.baseclass.BaseClass;
import com.adactin.pom.SearchHotel1;
import com.adactin.pom.SearchHotel1;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchHotel extends BaseClass {
	
	@When("^user select valid Location$")
	public void user_select_valid_Location() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		dropDown(sh.getLocation(), "text", "Sydney");
	}

	@When("^user select valid Hotels$")
	public void user_select_valid_Hotels() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		dropDown(sh.getHotel(), "text", "Hotel Sunshine");
	}

	@When("^user select valid Room Type$")
	public void user_select_valid_Room_Type() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		dropDown(sh.getRoom(), "text", "Super Deluxe");
	}

	@When("^user select valid Number Of Rooms$")
	public void user_select_valid_Number_Of_Rooms() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		dropDown(sh.getNumberofroom(), "index", "3");
	}

	@When("^user select valid Check In Date$")
	public void user_select_valid_Check_In_Date() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		inputOnElement(sh.getIn(), "01/01/2020");
	}

	@When("^user select valid Check Out Date$")
	public void user_select_valid_Check_Out_Date() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		inputOnElement(sh.getOut(),"05/09/2020");
	}

	@When("^user select valid Adults per Room$")
	public void user_select_valid_Adults_per_Room() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		dropDown(sh.getAdult(),"index", "3");
	}

	@When("^user select valid Child per Room$")
	public void user_select_valid_Child_per_Room() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		dropDown(sh.getChild(), "index", "2");
	}

	@Then("^user verify the SearchHotel in the homepage$")
	public void user_verify_the_SearchHotel_in_the_homepage() throws Throwable {
		SearchHotel1 sh = new SearchHotel1(driver);
		clickOnElement(sh.getSearchbtn());
	}

}
