Feature: task

Scenario Outline: crear una tarea con un titulo valido
	Given: tengo un proyecto
	When: creo una tarea con un "<titulo>" que no existe en el proyecto
	Then: la tarea es creada con el "<titulo>" que le acabo de indicar

	Examples:	| titulo |
				| MiTarea|
				| MyTask |

Scenario Outline: crear una tarea con un titulo repetido
	Given: tengo un proyecto con una tarea con un "<titulo>"
	When: intento crear una tarea con el mismo "<titulo>"
	Then: la tarea no es creada

	Examples:	| titulo |
				| miTarea|
				| myTask |
				| aaaasfgasfga|
				| 1324240g88b0|



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
	Then: la tarea no esta asignada
	
Scenario Outline: creo tarea con un nombre
	Given: he creado una tarea con un titulo "<titulo>"
	When: veo el titulo de la tarea
	Then: el titulo es "<titulo>"
	
	Examples: 
		|  titulo  |
		|  Tarea 1 |
		|  Tarea 2 |
		|  implementar estados de ordenes | 
			  
Scenario Outline: dar descripcion a una tarea
	Given: he creado una tarea
	When: le agrego una descripcion "<descripcion>"
	Then: puedo ver que la tarea tiene la descripcion "<descripcion>"
	
	Examples:
		|  descripcion  |
		|  se debe hacer lo que dice el titulo de la tarea  |
		|  una descripcion  |
		|      A        |
		
Scenario: asignar recurso que no pertenece al proyecto
	Given: tengo un proyecto con una tarea y un recurso que no pertenece al proyecto
	When: intento asignar a la tarea el recurso que no pertenece al proyecto
	Then: la tarea no esta asignada


	
	