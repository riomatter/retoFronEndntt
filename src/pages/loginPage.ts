import { expect } from "@playwright/test";
export default class LoginPage {
    private Elements = {
        usernameInput: "//input[@name='user-name']",
        passwordInput: "//input[@name='password']",
        loginBtn: "//input[@name='login-button']",
        validationMessage: "[data-test='error']"
    }

    async navigateTosaucedemo() {
        await global.page.goto(process.env.BASEURL);
        await global.page.waitForSelector(this.Elements.usernameInput);
    }

    async login(user: string, password: string) {
        await global.page.waitForSelector(this.Elements.usernameInput);
        await global.page.type(this.Elements.usernameInput, user);
        await global.page.type(this.Elements.passwordInput, password)
        await global.page.click(this.Elements.loginBtn);
    }

    async loginNotSuccess(){
        await global.page.waitForSelector(this.Elements.validationMessage);
        await expect(global.page.locator(this.Elements.validationMessage)).toBeVisible();
        await expect(global.page.locator(this.Elements.validationMessage)).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }
}