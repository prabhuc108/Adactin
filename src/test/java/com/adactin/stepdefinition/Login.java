package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.healper.ConfigurationReader;
import com.adactin.healper.FileReaderManager;
import com.adactin.healper.PageObjectManager;
import com.adactin.pom.LoginPage;
import com.adactin.runner.Runner;

import cucumber.api.java.en.*;

public class Login extends BaseClass {
	
	public static WebDriver driver=Runner.driver;
	public static PageObjectManager pom=new PageObjectManager(driver);
	
	@Given("^the user is logged in the application$")
	public void the_user_is_logged_in_the_application() throws Throwable {
		System.out.println("User starts to login into the application");
	}

	@Given("^goes to landing page$")
	public void goes_to_landing_page() throws Throwable {
		System.out.println("User logged on ");
	}

	@When("^user enter application url$")
	public void user_enter_application_url() throws Throwable {
		String url = FileReaderManager.getInstance().getCrInstance().geturl();
		getUrl(url);
	}

	@When("^user enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
		inputOnElement(pom.getLp().getUserName(), arg1);
	}

	@When("^user enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1 ) throws Throwable {
		//LoginPage lp=new LoginPage(driver);
		inputOnElement(pom.getLp().getPassword(), arg1);
	}
	@Then("^user verify the username in the homepage$")
	public void Prabhuvenkat() throws Throwable {
		//LoginPage lp=new LoginPage(driver);
		clickOnElement(pom.getLp().getLoginBtn());
	}
	
}
