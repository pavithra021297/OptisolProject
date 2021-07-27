package org.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utilities.BaseClass;

public class RegisterPojo extends BaseClass {
	public RegisterPojo() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//a[text()='Register']")
	private WebElement linkRegister;

	@FindBy(xpath = "//input[@placeholder='First Name']")
	private WebElement txtFirstName;

	@FindBy(xpath = "//input[@placeholder='Last Name']")
	private WebElement txtLastName;

	@FindBy(xpath = "//input[@placeholder='Username']")
	private WebElement txtUserName;

	@FindBy(xpath = "//input[@placeholder='E-Mail']")
	private WebElement txtEmail;

	@FindBy(xpath = "//input[@placeholder='Password']")
	private WebElement txtPassword;

	@FindBy(xpath = "//input[@placeholder='Confirm Password']")
	private WebElement txtConfirmPassword;

	@FindBy(xpath = "//input[@id='customSwitch1']")
	private WebElement btnSwitch;

	@FindBy(xpath = "//button[text()='Register']")
	private WebElement btnRegister;

	@FindBy(xpath = "//h1[text()='Benefits of the Premium Plans']")
	private WebElement textPremiumMessage;

	public WebElement getTextPremiumMessage() {
		return textPremiumMessage;
	}

	public WebElement getLinkRegister() {
		return linkRegister;
	}

	public WebElement getTxtFirstName() {
		return txtFirstName;
	}

	public WebElement getBtnRegister() {
		return btnRegister;
	}

	public WebElement getTxtLastName() {
		return txtLastName;
	}

	public WebElement getTxtUserName() {
		return txtUserName;
	}

	public WebElement getTxtEmail() {
		return txtEmail;
	}

	public WebElement getTxtPassword() {
		return txtPassword;
	}

	public WebElement getTxtConfirmPassword() {
		return txtConfirmPassword;
	}

	public WebElement getBtnSwitch() {
		return btnSwitch;
	}

}
