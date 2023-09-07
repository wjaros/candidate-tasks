import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
	tests: "./Tests/*_test.ts",
	output: "./output",
	helpers: {
		Playwright: {
			browser: "chromium",
			url: "https://practicetestautomation.com/",
			show: true
		},
		AssertWrapper: {
			require: "codeceptjs-assert"
		}
	},
	include: {
		I: "./steps_file",
		common: "./Pages/common.ts",
    loginPage: "./Pages/loginPage.ts"
	},
	name: "candidate-tasks"
};
