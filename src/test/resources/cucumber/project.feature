Feature: project

Scenario: estado inicial de un proyecto
  Given: he creado un proyecto
  When: veo el estado del proyecto creado
  Then: el estado del proyecto es inicial


Scenario: nombres repetidos de un proyecto
  Given: he creado un proyecto con un nombre
  When: intento crear un proyecto con el mismo nombre
  Then: el proyecto no fue creado