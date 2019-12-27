package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel1 {
	
	public static WebDriver driver;
	
     @FindBy(xpath="//select[@name='location']")
     private WebElement location;
     
     @FindBy(xpath="//select[@id='hotels']")
     private WebElement hotel;
     
     @FindBy(xpath="//select[@id='room_type']")
     private WebElement room;
     
     @FindBy(xpath="//select[@id='room_nos']")
     private WebElement numberofroom;
     
     @FindBy(xpath="(//input[@class='date_pick'])[1]")
     private WebElement in;
     
     @FindBy(xpath="(//input[@id='datepick_out'])[1]")
     private WebElement out;
     
     @FindBy(xpath="(//select[@id='adult_room'])[1]")
     private WebElement adult;
     
     @FindBy(xpath="(//select[@id='child_room'])[1]")
     private WebElement child;
     
     @FindBy(xpath="(//input[@id='Submit'])[1]")
     private WebElement searchbtn;
     
     public SearchHotel1(WebDriver sdriver) {
    	 this.driver = sdriver;
    	 PageFactory.initElements(driver, this);
    		 
     }

	public static WebDriver getDriver() {
		return driver;
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoom() {
		return room;
	}

	public WebElement getNumberofroom() {
		return numberofroom;
	}

	public WebElement getIn() {
		in.clear();
		return in;
	}

	public WebElement getOut() {
		out.clear();
		return out;
	}

	public WebElement getAdult() {
		return adult;
	}

	public WebElement getChild() {
		return child;
	}

	public WebElement getSearchbtn() {
		return searchbtn;
	}
 
}
