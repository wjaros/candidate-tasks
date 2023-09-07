import common from "./common";
import { UserCredentials } from "../DataObjects/userCredentials";

const { I } = inject();

export = {
	...common,
	url: "practice-test-login/",

	usernameInput: { css: "#username" },
	passwordInput: { css: "#password" },

	submitButton: { css: "#submit" },
	postTitle: { css: ".post-title" },
	open() {
		I.amOnPage(this.url);
		I.waitForElement(this.usernameInput);
	},

	login(userCredentials: UserCredentials) {
		I.appendField(this.usernameInput, userCredentials.username);
		I.appendField(this.passwordInput, userCredentials.password);
		I.click(this.submitButton);
	}
};
