import common from "./common";
import { UserCredentials } from "../DataObjects/userCredentials";

const { I } = inject();
const invalidLoginMsg = "Your username is invalid!";

export = {
  ...common,
  invalidLoginMsg,
  url: "practice-test-login/",
	successfullLoginUrl: "logged-in-successfully/",


	loginError: locate(common.errorBanner!).withText(invalidLoginMsg),
	passwordInput: { css: "#password" },
	postTitle: { css: ".post-title" },
	submitButton: { css: "#submit" },
	usernameInput: { css: "#username" },
	
  open() { //method to open login page
		I.amOnPage(this.url); //open loginPage url
		I.waitForElement(this.usernameInput); //verify that expected page was loaded
	},

	login(userCredentials: UserCredentials) { //method to peroform login with provided user object
		I.appendField(this.usernameInput, userCredentials.username); //clear username input field and fill it with username
		I.appendField(this.passwordInput, userCredentials.password); //clear password input filed and fill it with password
		I.click(this.submitButton); //submit login data
	}
};
