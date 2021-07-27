package org.stepdefinition;

import java.awt.AWTException;
import java.io.IOException;
import java.util.Map;

import org.junit.Assert;
import org.objectrepository.HomePage;
import org.objectrepository.LoginPojo;
import org.objectrepository.RegisterPojo;
import org.openqa.selenium.JavascriptExecutor;
import org.utilities.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.datatable.DataTable;

public class StepDefinition extends BaseClass {

	LoginPojo loginPojo;
	Map<String, String> datas;
	HomePage homePage;
	String testDataId;
	RegisterPojo registerPojo;

	@Given("User is in login page")
	public void userIsInLoginPage() {

		loadUrl("https://test.smartblacknetwork.com/login/1");
		Assert.assertTrue(driver.getCurrentUrl().contains("login"));

	}

	@When("User enter username and password")
	public void userEnterUsernameAndPassword(DataTable dataTable) throws IOException {

		testDataId = dataTable.asList().get(0);
		datas = readDatas(testDataId);
		loginPojo = new LoginPojo();
		fill(loginPojo.getTxtEmail(), datas.get("username"));
		fill(loginPojo.getTxtPass(), datas.get("password"));

	}

	@When("User click login button")
	public void userClickLoginButton() {
		btnClick(loginPojo.getBtnLogin());
	}

	@When("User validate successful login")
	public void userValidateSuccessfulLogin() {
		homePage = new HomePage();
		Assert.assertTrue(homePage.getBtnCreatePost().isDisplayed());

	}

	@When("User click create post")
	public void userClickCreatePost() {

		homePage = new HomePage();
		btnClick(homePage.getBtnCreatePost());

	}

	@When("User enter description and tagname")
	public void userEnterDescriptionAndTagname(DataTable dataTable) throws IOException {
		fill(homePage.getTxtTitle(), datas.get("Title"));
		fill(homePage.getTxtDescription(), datas.get("Description"));
		fill(homePage.getTxtTags(), datas.get("Tagname"));

	}

	@When("User select the file to be uploaded")
	public void userSelectTheFileToBeUploaded() throws AWTException {
		btnClick(homePage.getBtnAddMedia());
		uploadAFile(datas.get("filename"));

	}

	@When("User click post button")
	public void userClickPostButton() throws InterruptedException {
		Thread.sleep(3000);
		btnClick(homePage.getBtnPost());
	}

	@Then("User validate post has been uploaded succesfully")
	public void userValidatePostHasBeenUploadedSuccesfully() {
		Assert.assertTrue(homePage.getTxtImageText().getText().equals(datas.get("filename")));
	}

	@When("User click register button")
	public void userClickRegisterButton() {
		registerPojo = new RegisterPojo();
		btnClick(registerPojo.getLinkRegister());

	}

	@When("User enter {string},{string},{string},{string} and {string}")
	public void userEnterAnd(String firstname, String lastname, String username, String email, String password) {
		fill(registerPojo.getTxtFirstName(), firstname);
		fill(registerPojo.getTxtLastName(), lastname);
		fill(registerPojo.getTxtUserName(), username);
		fill(registerPojo.getTxtEmail(), email);
		fill(registerPojo.getTxtPassword(), password);
		fill(registerPojo.getTxtConfirmPassword(), password);

		Assert.assertTrue(
				registerPojo.getTxtPassword().getText().equals(registerPojo.getTxtConfirmPassword().getText()));

	}

	@When("User accept terms of privacy and click register button")
	public void userAcceptTermsOfPrivacyAndClickRegisterButton() throws InterruptedException {
		Thread.sleep(3000);
		javascriptClick(registerPojo.getBtnSwitch());
		btnClick(registerPojo.getBtnRegister());
	}

	@Then("User validate registration is successful")
	public void userValidateRegistrationIsSuccessful() {

		Assert.assertTrue(registerPojo.getTextPremiumMessage().isDisplayed());

	}
}
