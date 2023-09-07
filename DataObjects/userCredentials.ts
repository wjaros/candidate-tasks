export type UserCredentials = {
	username: string;
	password: string;
};

export const validCredentials: UserCredentials = {
	username: "student",
	password: "Password123"
};

export const invalidCredentials: UserCredentials = {
    username: "incorrectUser",
    password: "Password123"
}