Feature: Reporte de facturas con las horas y cotos de cada proyecto

  Scenario: Segimiento y registros de horas
    Given Hay Recursos trabajando
    When quiero facturar
    Then devo poder ver las horas que trabajaron los recursos

  Scenario: Reporte
    Given hay recursos trabajando en un proyecto
    When es fin de mes
    Then espero un reporte de costos