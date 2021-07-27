package org.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.utilities.BaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {

	@Before
	public void beforeScenario() {

		System.out.println("Scenario starts...");
		launchBrowser();
		maximizeWindow();
		applyWaitToAllLocators();

	}

	@After
	public void afterScenario(Scenario s) throws IOException {

		if (s.isFailed()) {

			TakesScreenshot ts = (TakesScreenshot) driver;
			byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshot, "image/png");

		}
		closeBrowser();
		System.out.println("...Scenario ends");

	}

}
