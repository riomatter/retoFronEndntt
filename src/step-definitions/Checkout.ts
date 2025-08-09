import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import CartPage from "../pages/cartPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const cartPage = new CartPage();

Given('que estoy logueado en la pagina de saucedemo para realizar un checkout {string} {string}', async (user, password)=> {
    await loginPage.navigateTosaucedemo();
    await loginPage.login(user, password);
})

When('agrego un item al carrito', async ()=> {
    await dashboardPage.addItem();
})

When('completo el proceso de checkout {string} {string} {string}', async (firstname, lastname, postalcode)=> {
    await cartPage.completeCheckout(firstname, lastname, postalcode);
})

Then('deberia visualizar la pagina final del proceso de checkout de manera exitosa', async ()=> {
    await cartPage.validateCheckoutComplete();
})

