Feature: phase

  Scenario: proyecto tiene fase inicial
    When creo un proyecto
    Then el proyecto se encuentra en una fase inicial
    And se encuentra en la primer iteracion

  Scenario Outline: dar descripcion a una fase
    Given tengo un proyecto y una fase inicial
    When le doy una descripcion "<descripcion>" a la fase inicial
    Then la fase tiene descripcion "<descripcion>"

    Examples:
      |descripcion|
      | Fase inicial del proyecto |
      | Primer Fase del proyecto  |
      ||
      | a |

