# new feature
# Tags: optional
    
Feature: Creación de un riesgo (RIE2)
    
Scenario Outline: Crear riesgo y definir sus campos
    Given creo un riesgo nuevo
    When ingreso una "<descripcion>", una <probabilidad> y un <impacto>
    And la probabilidad va entre 0.0 y 1.0
    And el impacto va entre 0.0 y 1.0
    Then ese riesgo pasa a tener esa "<descripcion>", esa <probabilidad> y ese <impacto>
    And su <exposicion> debe ser el producto de la probabilidad con el impacto y se denota "<cualitativamente>"

    Examples:
        | descripcion | probabilidad | impacto | exposicion | cualitativamente |
        |      A      |     0.2      |   0.5   |    0.1     |      LOW         |
        |      B      |     0.8      |   0.9   |    0.72    |      HIGH        |
        |      C      |     0.5      |   0.9   |    0.45    |      MEDIUM      |
        |      D      |     0.1      |   0.0   |    0.0     |      LOW         |
        |      E      |     0.6      |   0.3   |    0.18    |      LOW         |

Scenario: Asignar un nombre
    Given creo un riesgo nuevo
    When ingreso una "<descripcion>"
    Then ese riesgo pasa a tener esa "<descripcion>"

Scenario: Asignar una probabilidad valida
    Given creo un riesgo nuevo
    When ingreso una probabilidad de 0.3
    Then ese riesgo pasa a tener esa probabilidad de 0.3

Scenario: Asignar una probabilidad invalida
    Given creo un riesgo nuevo
    When ingreso una probabilidad de 1.6
    Then ese riesgo no pasa a tener esa probabilidad de 1.6

Scenario: Asignar un impacto valido
    Given creo un riesgo nuevo
    When ingreso un impacto de 0.7
    Then ese riesgo pasa a tener ese impacto de 0.7

Scenario: Asignar un impacto invalido
    Given creo un riesgo nuevo
    When ingreso un impacto de -0.2
    Then ese riesgo no pasa a tener ese impacto de -0.2

Scenario: Calcular exposicion
    Given creo un riesgo nuevo
    When ingreso una probabilidad de 0.4 y un impacto de 0.3 y se calcula su exposicion
    Then ese riesgo pasa a tener 0.12 de exposicion
