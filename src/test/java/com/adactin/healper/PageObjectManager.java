package com.adactin.healper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookingPage;
import com.adactin.pom.ConformationPage;
import com.adactin.pom.LoginPage;
import com.adactin.pom.SearchHotel1;

public class PageObjectManager {
	public static WebDriver driver;
	
	private LoginPage lp;
	private BookingPage Bp;
	private SearchHotel1 sh;
	private ConformationPage cp;
	
	public PageObjectManager(WebDriver driver) {
		this.driver=driver;
	}
	public LoginPage getLp() {
		lp=new LoginPage(driver);
		return lp;
	}
	public BookingPage getBp() {
		Bp=new BookingPage(driver);
		return Bp;
	}
	public SearchHotel1 getSh() {
		sh=new SearchHotel1(driver);
		return sh;
	}
	public ConformationPage getCp() {
		cp=new ConformationPage(driver);
		return cp;
	}
	

}
