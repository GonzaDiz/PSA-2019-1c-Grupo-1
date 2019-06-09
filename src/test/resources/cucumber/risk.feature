# new feature
# Tags: optional

Feature: risk

  Scenario Outline: Crear riesgo y definir sus campos
    Given tengo un proyecto creado
    When creo un riesgo nuevo con una "<descripcion>", una <probabilidad> y un <impacto>
    And la probabilidad va entre 0.0 y 1.0
    And el impacto va entre 0.0 y 1.0
    Then ese riesgo pasa a tener esa "<descripcion>", esa <probabilidad> y ese <impacto>
    And su exposicion debe ser el producto de la <probabilidad> con el <impacto>

    Examples:
      | descripcion | probabilidad | impacto |
      |      A      |     0.2      |   0.5   |
      |      B      |     0.8      |   0.9   |
      |      C      |     0.5      |   0.9   |
      |      D      |     0.6      |   0.3   |


  Scenario Outline: crear un riesgo con probabilidad invalida
    Given tengo un proyecto creado
    When intento crear un riesgo con una probabilidad <invalida>
    Then el riesgo no es creado


      Examples:
                  | invalida |
                  | 0.0        |
                  | 1.0        |
                  | -0.0001  |
                  |1.000001  |
                  | -5.0      |
                  | 2.0     |


  Scenario Outline: crear un riesgo con impacto invalido
    Given tengo un proyecto creado
    When intento crear un riesgo con un impacto <invalido>
    Then el riesgo no es creado


      Examples:
      | invalido |
      | 0.0        |
      | 1.0        |
      | -0.0001  |
      |1.000001  |
      | -5.0       |
      | 2.0        |

  Scenario: Asignar una probabilidad valida
    Given tengo un proyecto con un riesgo creado
    When ingreso una probabilidad de 0.3
    Then ese riesgo pasa a tener esa probabilidad de 0.3

  Scenario: Asignar una probabilidad invalida
    Given tengo un proyecto con un riesgo creado
    When ingreso una probabilidad de 1.6
    Then ese riesgo no pasa a tener esa probabilidad de 1.6

  Scenario: Asignar un impacto valido
    Given tengo un proyecto con un riesgo creado
    When ingreso un impacto de 0.7
    Then ese riesgo pasa a tener ese impacto de 0.7

  Scenario: Asignar un impacto invalido
    Given tengo un proyecto con un riesgo creado
    When ingreso un impacto de -0.2
    Then ese riesgo no pasa a tener ese impacto de -0.2

  Scenario: Calcular exposicion
    Given tengo un proyecto con un riesgo creado
    When ingreso una probabilidad de 0.4 y un impacto de 0.3
    Then ese riesgo pasa a tener 0.12 de exposicion