import {
	validCredentials,
	invalidCredentials
} from ".././DataObjects/userCredentials";

Feature("login");

Scenario("Verify that user can login with valid credentials successfully", async ({I, loginPage}) => {
	loginPage.open(); //open login page
	loginPage.login(validCredentials); //execute login method with valid credentials
    const url = await I.grabCurrentUrl() //get current url and store it in a const
    I.assertStringIncludes(url, loginPage.successfullLoginUrl) //assert that user got logged in successfully
});
Scenario("Verify that user cannot login with invalid credentials", async ({I, loginPage}) => {
	loginPage.open();
	loginPage.login(invalidCredentials); //execute login method with invalid credentials
    I.waitForElement(loginPage.errorBanner, 5) //verify that user cannot login by checking visibily of error banner
});
