Feature: Gestion de cliente

  Scenario: Ver los productos que tiene un cliente
    Given Hay un cliente con productos
    When es seleccionado
    Then se puede ver un listado de productos que tiene

  Scenario: Asignar implementacion
    Given Hay un cliente seleccionado y busco asignarle un implementacion de un proeducto
    When Selecciono el producto
    Then La implementacion es asignada el cliente