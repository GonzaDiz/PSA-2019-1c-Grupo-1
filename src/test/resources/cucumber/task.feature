Feature: task

Scenario: asignar una tarea a un recurso
	Given: tengo una tarea no asignada y un recurso
	When: la asigno al recurso
	Then: veo que la tarea esta asignada

Scenario: tarea desasignada inicialmente
	When: creo una tarea y no la asigno
	Then: la tarea no esta asignada

Scenario: no puedo asignar multiples recursos
	Given: tengo una tarea asignada a un recurso
	When: intento asignarla a otro recurso
	Then: la tarea permanece asignada al primer recurso
	
Scenario: desasignar una tarea
	Given: tengo una tarea asignada
	When: desasigno la tarea y veo si esta asignada
	Then: la tarea no esta desasignada
	
Scenario outline: creo tarea con un nombre
	Given: he creado una tarea con un titulo "<titulo>"
	When: veo el titulo de la tarea
	Then: el titulo es "<titulo>"
	
	Examples: 
		|  titulo  |
		|  Tarea 1 |
		|  Tarea 2 |
		|  implementar estados de ordenes | 
			  
Scenario outline: dar descripcion a una tarea
	Given: he creado una tarea
	When: le agrego una descripcion "<descripcion>"
	Then: puedo ver que la tarea tiene la descripcion "<descripcion>"
	
	Examples:
		|  descripcion  |
		|  se debe hacer lo que dice el titulo de la tarea  |
		|  una descripcion  |
		|      A        |
		
	
	
	
	
	