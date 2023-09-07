import loginPage from "./Pages/loginPage";
import {
	validCredentials,
	invalidCredentials
} from "./DataObjects/userCredentials";

Feature("login");

Scenario("Verify that user can login with valid successfuly", async ({I}) => {
	loginPage.open();
	loginPage.login(validCredentials);
    const url = await I.grabCurrentUrl()
    I.assertStringIncludes(url, 'logged-in-successfully/')
});
Scenario("Verify that user cannot login with invalid credentials", async ({I}) => {
	loginPage.open();
	loginPage.login(invalidCredentials);
    I.waitForElement(loginPage.errorBanner)

});
