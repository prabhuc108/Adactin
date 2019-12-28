package com.adactin.baseclass;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {
	
	public static WebDriver driver;

	public static WebDriver browserLaunch(String browsername) {

		try {
			if (browsername.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "\\Driver\\chromedriver.exe");
				driver = new ChromeDriver();

			} else if (browsername.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir") + "\\Driver\\geckodriver.exe");
				driver = new FirefoxDriver();

			} else if (browsername.equalsIgnoreCase("ie")) {
				System.setProperty("webdriver.ie.driver",
						System.getProperty("user.dir") + "\\Driver\\IEDriverServer.exe");
				driver = new InternetExplorerDriver();

			} else {
				System.out.println("Invalid browsername");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		driver.manage().window().maximize();

		return driver;

	}

	public static void getUrl(String url) {
		
		driver.get(url);
	}

	public static void dropDown(WebElement element, String option, String value) {
		
		Select s = new Select(element);
		try {
			if (option.equals("index")) {
				s.selectByIndex(Integer.parseInt(value));
			} else if (option.equals("value")) {
				s.selectByValue(value);
			} else if (option.equals("text")) {
				s.selectByVisibleText(value);
			}
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
	}
	
	public static void inputOnElement(WebElement element, String value) {
		element.sendKeys(value);
	}
	
	public static void clickOnElement(WebElement element) {
		element.click();
	}
	
	public static void ClearElement(WebElement element){
		element.clear();
	}
	
	public static void driverQuit(WebElement element) {
		
		driver.quit();
	}
	
	public static void isSelected(WebElement element) {
		
		if (element.isSelected()) {
			System.out.println("Element is choosen");
		}
	}
	
	public static void isEnabled(WebElement element) {
		
		if (element.isEnabled()) {
			System.out.println("Element is Editable");		
		}	
	}
	
	public static void isDisplayed(WebElement element) {
		
		if (element.isDisplayed()) {
			System.out.println("Element is viewable");			
		}
	}
	
	public static void ScrollDown(WebElement element) {
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();",element);
		
	}
	
	private static void scrollUp() {
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,1000)");
	}
	
	public static void takeScreenshot(String filename) throws Exception {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File sourcefile = ts.getScreenshotAs(OutputType.FILE);
		File destFile = new File(System.getProperty("user.dir")+"\\ScreenShot\\"+filename+".png");
		FileUtils.copyFile(sourcefile,destFile);
	}
	
	public static void iframes(WebElement element,WebElement element1,WebElement element2) throws Exception {
		element.click();
		Thread.sleep(3000);
		
		driver.switchTo().frame(element1);
		element2.sendKeys("Prabhu");
	}
	
	public static void navigateTo(WebElement element) {
		driver.navigate().to("Url");
	}
	
	public static void navigateBack(WebElement element) {
		driver.navigate().back();
	}
	
	public static void navigateForward(WebElement element) {
		driver.navigate().forward();
	}
	
	public static void navigateRefresh(WebElement element) {
		driver.navigate().refresh();
	}
	
	public static void alert(WebElement element) throws Exception {
		element.click();
		Thread.sleep(3000);
		
		Alert alert = driver.switchTo().alert();
		alert.accept();
		Thread.sleep(3000);
	}
	
	public static void alertdismiss(WebElement element) throws Exception {
		element.click();
		Thread.sleep(3000);
		
		Alert alert = driver.switchTo().alert();
		alert.dismiss();
		Thread.sleep(3000);
	}
	
	public static void alerttext(WebElement element,WebElement element1) throws Exception {
		element.click();
		Thread.sleep(3000);
		
		element1.click();
		Thread.sleep(3000);
		
		Alert alert = driver.switchTo().alert();
		alert.sendKeys("Sasi");
		Thread.sleep(3000);
	}
	
	public static void robot() throws Exception {
		
		Robot r = new Robot();
		
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
		Thread.sleep(3000);
		
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
				
	}
	
	public static void actionperform(WebElement element,WebElement element1, WebElement source, WebElement target) {
		
		Actions ac =new Actions(driver);
		if (ac.contextClick(element).equals(true)) {
			ac.contextClick(element).build().perform();
		}else if(ac.doubleClick(element).equals(true)) {
			ac.doubleClick(element).build().perform();			
		}else if (ac.dragAndDrop(source, target).equals(true)) {
			ac.dragAndDrop(source, target).build().perform();			
		}else if (ac.moveToElement(target).equals(true)) {
			ac.moveToElement(target).build().perform();		
		}else {
			System.out.println("Invalid sction performed");
		}
	}
	
	public static void implicitWait() {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}
	
	public static void fluentWait() {
		
		Wait wait = new FluentWait(driver).withTimeout(30,TimeUnit.SECONDS).pollingEvery(30,TimeUnit.SECONDS)
						.ignoring(Exception.class);

	}
	
	public static void explicitWait(long timeOutInSeconds, WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
				wait.until(ExpectedConditions.visibilityOf(element));

	}
	
	
}

