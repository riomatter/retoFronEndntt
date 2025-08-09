import { expect } from "@playwright/test";

export default class CartPage{
    private Elements = {
        shopping_cart_container:'.shopping_cart_container',
        buttonCheckout: "[data-test='checkout']",
        inputFirstName: "[data-test='firstName']",
        inputLastName: "[data-test='lastName']",
        inputPostalCode: "[data-test='postalCode']",
        buttonContinue: "[data-test='continue']",
        buttonfinish: "[data-test='finish']",
        titleMessage: "[data-test='complete-header']",
        orderMessage: "[data-test='complete-text']"
    }

    async completeCheckout(firstname: string, lastname: string, postalcode: string){
        await global.page.waitForSelector(this.Elements.shopping_cart_container);
        await global.page.click(this.Elements.shopping_cart_container);
        await global.page.waitForSelector(this.Elements.buttonCheckout);
        await global.page.click(this.Elements.buttonCheckout);
        await global.page.type(this.Elements.inputFirstName, firstname);
        await global.page.type(this.Elements.inputLastName, lastname);
        await global.page.type(this.Elements.inputPostalCode, postalcode);
        await global.page.click(this.Elements.buttonContinue);
        await global.page.click(this.Elements.buttonfinish);
    }

    async validateCheckoutComplete(){
       await global.page.waitForSelector(this.Elements.titleMessage);
       await global.page.waitForSelector(this.Elements.orderMessage);
       await expect(global.page.locator(this.Elements.titleMessage)).toBeVisible();
       await expect(global.page.locator(this.Elements.orderMessage)).toBeVisible();
       await expect(global.page.locator(this.Elements.titleMessage)).toHaveText('Thank you for your order!');
       await expect(global.page.locator(this.Elements.orderMessage)).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
    
}