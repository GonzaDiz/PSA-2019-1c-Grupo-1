Feature: task

	Scenario Outline: crear una tarea con un titulo valido
		Given tengo un proyecto
		When creo una tarea con un "<titulo>" que no existe en el proyecto
		Then la tarea es creada con el "<titulo>" que le acabo de indicar

		Examples:
			| titulo |
			| MiTarea|
			| MyTask |

	Scenario Outline: crear una tarea con un titulo repetido
		Given tengo un proyecto con una tarea con un "<titulo>"
		When intento crear una tarea con el mismo "<titulo>"
		Then la tarea no es creada

		Examples:
			| titulo |
			| miTarea|
			| myTask |
			| aaaasfgasfga|
			| 1324240g88b0|



	Scenario: asignar una tarea a un recurso
		Given tengo un proyecto
		And tengo una tarea no asignada en el proyecto
		And tengo un recurso asignado al proyecto
		When asigno la tarea al recurso
		Then veo que la tarea esta asignada

	Scenario: tarea desasignada inicialmente
		Given tengo un proyecto
		When creo una tarea en el proyecto y no la asigno
		Then la tarea no esta asignada

	Scenario: no puedo asignar multiples recursos
		Given tengo un proyecto
		And tengo una tarea asignada a un recurso
		And tengo otro recurso en el proyecto
		When intento asignarla al otro recurso
		Then la tarea permanece asignada al primer recurso

	Scenario: desasignar una tarea
		Given tengo un proyecto
		And tengo una tarea asignada a un recurso
		When desasigno la tarea
		Then la tarea no esta asignada

	Scenario Outline: creo tarea con un nombre
		Given tengo un proyecto
		When creo una tarea con un titulo "<titulo>"
		Then el titulo de la tarea es "<titulo>"

		Examples:
			|  titulo  |
			|  Mi primer tarea |
			|  Mi segunda tarea |
			|  implementar estados de ordenes |


	Scenario: asignar recurso que no pertenece al proyecto
		Given tengo un proyecto
		And tengo una tarea no asignada en el proyecto
		And tengo un recurso no asignado al proyecto
		When intento asignar a la tarea el recurso que no pertenece al proyecto
		Then la tarea no esta asignada


	Scenario: estado inicial de una tarea es backlog
		Given tengo un proyecto
		When creo una tarea en el proyecto
		Then su estado inicial es backlog


	Scenario: tarea creada con cero horas dedicadas
		Given tengo un proyecto
		When creo una tarea en el proyecto
		Then la cantidad de horas dedicadas es cero
