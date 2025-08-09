import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('que estoy logueado en la pagina de saucedemo para agregar un item {string} {string}', async (user, password)=> {
    await loginPage.navigateTosaucedemo();
    await loginPage.login(user, password);
})

When('agrego un item para comprar', async ()=> {
    await dashboardPage.addItem();
})

Then('deberia ver el item agregado', async ()=> {
    await dashboardPage.viewItem();
})

