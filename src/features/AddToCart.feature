Feature: Agregar un item al carrito

  Scenario Outline: Agregar un elemento al carrito de compras
    Given que estoy logueado en la pagina de saucedemo para agregar un item "<username>" "<password>"
    When agrego un item al carrito
    Then deberia ver el item agregado

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |