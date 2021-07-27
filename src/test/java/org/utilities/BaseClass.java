package org.utilities;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	public static WebDriver driver;

	public static void launchBrowser() {

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();

	}

	public static void loadUrl(String url) {
		driver.get(url);
	}

	public static void maximizeWindow() {
		driver.manage().window().maximize();

	}

	public static void applyWaitToAllLocators() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	public static void fill(WebElement element, String text) {

		element.sendKeys(text);

	}

	public static void btnClick(WebElement element) {

		element.click();

	}

	public static void closeBrowser() {
		driver.quit();
	}

	public static void takeSnap(String filename) throws IOException {

		TakesScreenshot ts = (TakesScreenshot) driver;
		File src = ts.getScreenshotAs(OutputType.FILE);
		File dest = new File(
				"C:\\eclipse-committers-oxygen-3a-win32-x86_64\\sample\\Cucumber9AM\\src\\test\\resources\\Reports\\Screenshots\\"
						+ filename + ".png");
		FileUtils.copyFile(src, dest);

	}

	public static Map<String, String> readDatas(String testdataid) throws IOException {
		File file = new File(
				"C:\\eclipse-committers-oxygen-3a-win32-x86_64\\sample\\OptisolProject\\TestData\\TestDataUpload.xlsx");
		FileInputStream fileInput = new FileInputStream(file);
		Workbook workbook = new XSSFWorkbook(fileInput);
		Sheet sheet = workbook.getSheet("Sheet1");

		Map<String, String> excelData = new LinkedHashMap<String, String>();

		for (int i = 1; i < sheet.getPhysicalNumberOfRows(); i++) {

			Row headerRow = sheet.getRow(0);
			Row currentRow = sheet.getRow(i);

			if (currentRow.getCell(0).getStringCellValue().equals(testdataid))

				for (int j = 1; j < currentRow.getPhysicalNumberOfCells(); j++) {

					Cell c = currentRow.getCell(j);

					String value = "";

					if (c.getCellType() == 1) {
						value = c.getStringCellValue();
					} else if (DateUtil.isCellDateFormatted(c)) {
						Date d = c.getDateCellValue();
						SimpleDateFormat sim = new SimpleDateFormat("dd-MM-yyyy");
						value = sim.format(d);
					} else {
						double dd = c.getNumericCellValue();
						long l = (long) dd;
						value = String.valueOf(l);
					}

					excelData.put(headerRow.getCell(j).getStringCellValue(), value);

				}

		}

		return excelData;

	}

	public static void javascriptClick(WebElement element) {

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", element);

	}

	public static void applyWaitForWebElement(WebElement element) {

		WebDriverWait w = new WebDriverWait(driver, 10);
		w.until(ExpectedConditions.elementToBeClickable(element));

	}

	public static void uploadAFile(String filename) throws AWTException {

		StringSelection stringSelection = new StringSelection(filename);
		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringSelection, null);
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

		r.keyPress(KeyEvent.VK_CONTROL);
		r.keyPress(KeyEvent.VK_V);
		r.keyRelease(KeyEvent.VK_V);
		r.keyRelease(KeyEvent.VK_CONTROL);

		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

	}

}
