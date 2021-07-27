package org.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utilities.BaseClass;

public class HomePage extends BaseClass {
	public HomePage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//a[text()='Logout']")
	private WebElement btnLogOut;

	@FindBy(xpath = "//textarea[@placeholder='Tap to add a description...']")
	private WebElement txtDescription;

	@FindBy(xpath = "//textarea[@placeholder='Tags']")
	private WebElement txtTags;

	@FindBy(xpath = "//button[text()=' Add Photos/ Videos ']")
	private WebElement btnAddMedia;

	@FindBy(xpath = "//button[text()=' Post ']")
	private WebElement btnPost;

	@FindBy(xpath = "// button[text()=' Create Post ']")
	private WebElement btnCreatePost;

	@FindBy(xpath = "//textarea[@placeholder='Title...']")
	private WebElement txtTitle;

	@FindBy(xpath = "//p[contains(text(),'Butterfly') and @class='fs10 text-white my-2 ng-star-inserted']")
	private WebElement txtImageText;

	public WebElement getTxtImageText() {
		return txtImageText;
	}

	public WebElement getBtnCreatePost() {
		return btnCreatePost;
	}

	public WebElement getTxtTitle() {
		return txtTitle;
	}

	public WebElement getTxtDescription() {
		return txtDescription;
	}

	public WebElement getTxtTags() {
		return txtTags;
	}

	public WebElement getBtnAddMedia() {
		return btnAddMedia;
	}

	public WebElement getBtnPost() {
		return btnPost;
	}

	public WebElement getBtnLogOut() {
		return btnLogOut;
	}

}
