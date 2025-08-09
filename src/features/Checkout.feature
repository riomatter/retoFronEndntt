Feature: Proceso de checkout

  Scenario Outline: Realizar el proceso de checkout
    Given que estoy logueado en la pagina de saucedemo para realizar un checkout "<username>" "<password>"
    When agrego un item para comprar
    When completo el proceso de checkout "<firstname>" "<lastname>" "<postalcode>"
    Then deberia visualizar la pagina final del proceso de checkout de manera exitosa

    Examples:
      | username      | password     | firstname  | lastname  | postalcode |
      | standard_user | secret_sauce | Mario      | Martin    | 15001      |    