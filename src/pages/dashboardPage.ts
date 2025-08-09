import { expect } from "@playwright/test";

export default class DashboardPage{
    private Elements = {
        dashboardTitle: "//div[@class='app_logo']",
        addSauceLabsBackpack: "[data-test='add-to-cart-sauce-labs-backpack']",
        cartBadge: "[data-test='shopping-cart-badge']",
        shopping_cart_container: '.shopping_cart_container'
   
    }

    async loginSuccess(){
        await global.page.waitForSelector(this.Elements.dashboardTitle);
        await expect(global.page.locator(this.Elements.dashboardTitle)).toBeVisible();
        await expect(global.page.locator(this.Elements.dashboardTitle)).toHaveText('Swag Labs');
    }

    async addItem(){
        await global.page.waitForSelector(this.Elements.addSauceLabsBackpack);
        await expect(global.page.locator(this.Elements.addSauceLabsBackpack)).toBeVisible();
        await global.page.click(this.Elements.addSauceLabsBackpack);
    }

    async viewItem(){
       await global.page.waitForSelector(this.Elements.cartBadge);
       await expect(global.page.locator(this.Elements.cartBadge)).toBeVisible();
       await expect(global.page.locator(this.Elements.cartBadge)).toHaveText('1');
    }

}