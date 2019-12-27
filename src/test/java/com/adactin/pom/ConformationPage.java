package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ConformationPage {
	
	public static WebDriver driver;

	@FindBy(xpath="//input[@id='hotel_name_dis']")
	private WebElement hotelname;
	
	@FindBy(xpath="//input[@id='location_dis']")
	private WebElement location;
	
	@FindBy(xpath="//input[@id='room_type_dis']")
	private WebElement roomtype;
	
	@FindBy(xpath="//input[@id='room_num_dis']")
	private WebElement numberofrooms;
	
	@FindBy(xpath="//input[@id='total_days_dis']")
	private WebElement totaldays;
	
	@FindBy(xpath="//input[@id='price_night_dis']")
	private WebElement pricepernight;
	
	@FindBy(xpath="//input[@id='total_price_dis']")
	private WebElement totalprice;
	
	@FindBy(xpath="//input[@id='gst_dis']")
	private WebElement gst;
	
	@FindBy(xpath="//input[@id='final_price_dis']")
	private WebElement finalprice;
	
	@FindBy(xpath="//input[@id='first_name']")
	private WebElement firstname;
	
	@FindBy(xpath="//input[@id='last_name']")
	private WebElement lastname;
	
	@FindBy(xpath="//textarea[@id='address']")
	private WebElement address;
	
	@FindBy(xpath="//input[@id='cc_num']")
	private WebElement creditcard;
	
	@FindBy(xpath="//select[@id='cc_type']")
	private WebElement cardtype;
	
	@FindBy(xpath="//select[@id='cc_exp_month']")
	private WebElement month;
	
	@FindBy(xpath="//select[@id='cc_exp_year']")
	private WebElement year;
	
	@FindBy(xpath="//input[@id='cc_cvv']")
	private WebElement cvvnum;
	
	@FindBy(xpath="//input[@id='book_now']")
	private WebElement booknow;
	
	@FindBy(xpath="//input[@id='logout']")
	private WebElement logout;
	

	public static WebDriver getDriver() {
		return driver;
	}




	public WebElement getHotelname() {
		return hotelname;
	}




	public WebElement getLocation() {
		return location;
	}




	public WebElement getRoomtype() {
		return roomtype;
	}




	public WebElement getNumberofrooms() {
		return numberofrooms;
	}




	public WebElement getTotaldays() {
		return totaldays;
	}




	public WebElement getPricepernight() {
		return pricepernight;
	}




	public WebElement getTotalprice() {
		return totalprice;
	}




	public WebElement getGst() {
		return gst;
	}




	public WebElement getFinalprice() {
		return finalprice;
	}




	public WebElement getBooknow() {
		return booknow;
	}




	public WebElement getLogout() {
		return logout;
	}




	public ConformationPage(WebDriver cdriver) {
		this.driver = cdriver;
		PageFactory.initElements(driver, this);
	}




	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCreditcard() {
		return creditcard;
	}

	public WebElement getCardtype() {
		return cardtype;
	}

	public WebElement getMonth() {
		return month;
	}

	public WebElement getYear() {
		return year;
	}

	public WebElement getCvvnum() {
		return cvvnum;
	}

	public WebElement getBooknowbtn() {
		return booknow;
	}
	
	public WebElement getlogoutbtn() {
		return logout;
	}
	
}
