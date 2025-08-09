# retoFronEndntt
Automation with playwright

# 🧪 Automatización Web con Playwright + Cucumber (POM)  

Este proyecto implementa pruebas automatizadas de la aplicación [SauceDemo](https://www.saucedemo.com) utilizando **Playwright** junto con **Cucumber** bajo el patrón **Page Object Model (POM)**.  

## 📂 Estructura del proyecto  

```
├── config/                 # Configuración de Cucumber y entornos
├── src/
│   ├── features/           # Archivos .feature con escenarios en Gherkin
│   ├── step-definitions/   # Definiciones de pasos (Given, When, Then)
│   ├── pages/              # Clases Page Object con localizadores y acciones
│   ├── hooks/              # Hooks de Cucumber (Before, After)
│   └── helper/             # Utilidades y reportes
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📌 Tecnologías usadas

- [Playwright](https://playwright.dev/) → Automatización de navegadores (Chromium, Firefox, WebKit).  
- [Cucumber](https://cucumber.io/) → Ejecución de escenarios en Gherkin (BDD).  
- **TypeScript** → Tipado y organización de código.  
- **Page Object Model (POM)** → Patrón para separar lógica de pruebas y elementos de UI.  
- **Allure Reports** y **Multiple Cucumber HTML Reporter** → Generación de reportes.  

---

## 📑 Features implementados

### 1. **Login**
- **Login exitoso**: Valida que el usuario pueda iniciar sesión correctamente.  
- **Login inválido**: Valida que se muestre el mensaje de error correspondiente.  

### 2. **Agregar un item al carrito**
- Inicia sesión y agrega un producto al carrito.  
- Valida que el contador del carrito muestre el valor correcto.  

### 3. **Proceso de checkout**
- Inicia sesión, agrega un producto, completa el formulario de checkout y finaliza la compra.  
- Valida que se muestre la página final con el mensaje de confirmación.  

---

## 🏗️ Page Object Model

El proyecto sigue el patrón **POM**, separando elementos y acciones en clases:

- **LoginPage** → Métodos para iniciar sesión y validar errores.
- **DashboardPage** → Métodos para agregar productos y validar login.
- **CartPage** → Métodos para completar y validar el checkout.

Ejemplo de un localizador en `DashboardPage`:
```ts
private Elements = {
    addSauceLabsBackpack: "[data-test='add-to-cart-sauce-labs-backpack']",
    cartBadge: "[data-test='shopping-cart-badge']"
}
```

---

## ⚙️ Configuración y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tuusuario/turepo.git
cd turepo
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno  
Crear un archivo `.env` en la raíz:
```env
BASEURL=https://www.saucedemo.com/
```

### 4️⃣ Ejecutar pruebas

#### Ambiente DEV (navegador Chrome)
```bash
npm run test-dev
```

#### Ambiente UAT (navegador Chrome)
```bash
npm run test-uat
```

#### Navegadores alternativos:
```bash
npm run test-firefox
npm run test-webkit
```

---

## 📊 Reportes

### Allure Report
Generar reporte después de la ejecución:
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

### Multiple Cucumber HTML Reporter  
El reporte se genera automáticamente después de cada prueba en la carpeta configurada en `src/helper/report.ts`.

---

## 📌 Notas importantes

- Los **Steps Definitions** deben coincidir exactamente con el texto de los pasos en `.feature`.
- Usa **selectores estables** como `data-test` siempre que sea posible.
- Evita `waitForTimeout()` salvo para depuración; utiliza esperas explícitas (`waitForSelector`, `toBeVisible`, `toHaveText`).

---

## 📄 Ejemplo de escenario

```gherkin
Feature: Agregar un item al carrito

Scenario Outline: Agregar un elemento al carrito de compras
    Given que estoy logueado en la pagina de saucedemo para agregar un item "<username>" "<password>"
    When agrego un item al carrito
    Then deberia ver el item agregado

Examples:
    | username      | password     |
    | standard_user | secret_sauce |
```

---

✍ **Autor:** *[Mario martin]*  
📅 **Versión:** 1.0.0  
📌 **Licencia:** ISC
