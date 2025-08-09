Feature: Loguearse a la aplicación saucedemo

#@creacion_empleado
Scenario Outline: Realizar un login exitoso a sauce demo
    Given que estoy en la página de saucedemo
    When ingreso mis credenciales username "<username>" y password "<password>"
    Then el inicio de sesión es satisfactorio

    Examples:
        | username       | password      |
        | standard_user  | secret_sauce  |
   
Scenario Outline: Realizar un login invalido a sauce demo
    Given que estoy en la página de saucedemo
    When ingreso mis credenciales username "<username>" y password "<password>"
    Then el mensaje de validacion es correcto

    Examples:
        | username       | password |
        | standard_user  | 123456   |