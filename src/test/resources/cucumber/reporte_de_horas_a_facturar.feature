Feature: Reporte de facturas con las horas y cotos de cada proyecto

  Scenario: Reporte
    Given hay recursos trabajando en un proyecto
    When es fin de mes
    Then espero un reporte de costos