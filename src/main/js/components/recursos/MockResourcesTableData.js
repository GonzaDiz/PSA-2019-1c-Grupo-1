function createResource(cuit, firstName, lastName, seniority, salary, limWeekHours, workload) {
  return { cuit, firstName, lastName, seniority, salary, limWeekHours, workload };
}



const response = {
  data: [
    createResource(20386755567, 'Ariel', 'Alvarez Windey', 'Junior', 35000, 30, 120),
    createResource(22377777771, 'Gonzalo',  'Diz', 'Semi-senior', 58000, 40, 100),
    createResource(21383838380, 'María Victoria', 'Robles Cerquetti', 'Senior', 86500, 40, 20),
    createResource(20407776661, 'Damian', 'Okalandia', 'Trainee', 8500, 20, 80),
    createResource(20380001112, 'Flavio', 'Perez', 'Senior', 125600, 40, 80),
  ]
}

export default response;