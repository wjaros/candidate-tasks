/// <reference types='codeceptjs' />

type Common = typeof import("./Pages/common");
type steps_file = typeof import("./steps_file");
type LoginPage = typeof import("./Pages/loginPage");

declare namespace CodeceptJS {
	interface SupportObject {
		I: I;
		current: any;
		common: Common;
		loginPage: LoginPage;
	}
	interface Methods extends Playwright {}
	interface I extends ReturnType<steps_file> {}
	namespace Translation {
		interface Actions {}
	}
}
