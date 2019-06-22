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

  Scenario Outline: Probabilidad de riesgo baja
    Given tengo un proyecto creado
    When defino el limite bajo_medio con <bajo_medio>
    And creo un riesgo con probabilidad 0.1
    Then la probabilidad cualitativa es baja

    Examples:
    | bajo_medio |
    | 0.2        |
    | 0.3        |

  Scenario Outline: Probabilidad de riesgo media
    Given tengo un proyecto creado
    When defino el limite bajo_medio con <bajo_medio>
    And defino el limite medio_alto con <medio_alto>
    And creo un riesgo con probabilidad 0.1
    Then la probabilidad cualitativa es media

    Examples:
      | bajo_medio | medio_alto |
      |  0.05      | 0.2        |
      |  0.1       | 0.15       |

  Scenario Outline: Probabilidad de riesgo alta
    Given tengo un proyecto creado
    When defino el limite bajo_medio con <bajo_medio>
    And defino el limite medio_alto con <medio_alto>
    And creo un riesgo con probabilidad 0.1
    Then la probabilidad cualitativa es alta

    Examples:
      | bajo_medio | medio_alto |
      |  0.05      | 0.07       |
      |  0.08      | 0.10       |


    Scenario Outline: Riesgo no urgente
      Given tengo un proyecto creado
      When defino el umbral de exposicion con <umbral>
      And creo un riesgo con probabilidad <prob> e impacto <impacto>
      Then el riesgo no es urgente

      Examples:
        | umbral  | prob  | impacto |
        | 0.5     | 0.5   | 0.5     |
        | 0.4     | 0.5   | 0.5     |

  Scenario Outline: Riesgo urgente
    Given tengo un proyecto creado
    When defino el umbral de exposicion con <umbral>
    And creo un riesgo con probabilidad <prob> e impacto <impacto>
    Then el riesgo es urgente

    Examples:
      | umbral  | prob  | impacto |
      | 0.1     | 0.5   | 0.5     |
      | 0.25     | 0.5   | 0.5     |

  Scenario Outline: Impacto de riesgo bajo
    Given tengo un proyecto creado
    When defino el limite bajo_medio con <bajo_medio>
    And creo un riesgo con impacto 0.1
    Then el impacto cualitativo es bajo

    Examples:
      | bajo_medio |
      | 0.2        |
      | 0.3        |

  Scenario Outline: Impacto de riesgo medio
    Given tengo un proyecto creado
    When defino el limite bajo_medio con <bajo_medio>
    And defino el limite medio_alto con <medio_alto>
    And creo un riesgo con impacto 0.1
    Then el impacto cualitativo es medio

    Examples:
      | bajo_medio | medio_alto |
      |  0.05      | 0.2        |
      |  0.1       | 0.15       |

  Scenario Outline: Impacto de riesgo alto
    Given tengo un proyecto creado
    When defino el limite bajo_medio con <bajo_medio>
    And defino el limite medio_alto con <medio_alto>
    And creo un riesgo con impacto 0.1
    Then el impacto cualitativo es alto

    Examples:
      | bajo_medio | medio_alto |
      |  0.05      | 0.07       |
      |  0.08      | 0.10       |


  Scenario Outline: Actualizacion de probabilidad invalida
    Given tengo un proyecto con un riesgo creado
    When intento darle probabilidad invalida <prob>
    Then la probabilidad no se actualizó a <prob>

    Examples:
      | prob |
      | 0.0  |
      | -0.1 |
      | -1.0 |
      | 1.0    |
      | 2.0    |

  Scenario Outline: Actualizacion de impacto invalido
    Given tengo un proyecto con un riesgo creado
    When intento darle un impacto invalido <impacto>
    Then el impacto no se actualizó a <impacto>

    Examples:
      | impacto |
      | 0.0  |
      | -0.1 |
      | -1.0 |
      | 1.0    |
      | 2.0    |
