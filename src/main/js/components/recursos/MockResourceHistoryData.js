const response = {
  data: [
    {
      project: {
        title: "ERP V3.2",
        projectId: "P01"
      },
      assignments: [
        {
          id: 0,
          role: "Desarrollador",
          initialDate: "30/01/2019",
          endDate: "01/05/2019",
          hoursPerWeek: 20
        },
        {
          id: 1,
          role: "Lider de projecto",
          initialDate: "01/03/2019",
          endDate: "01/05/2019",
          hoursPerWeek: 40
        }
      ]
    },
    {
      project: {
        title: "ERP V3.1 Toyota",
        projectId: "P03"
      },
      assignments: [
        {
          id: 2,
          role: "Data scientist",
          initialDate: "30/01/2019",
          endDate: "28/02/2019",
          hoursPerWeek: 20
        }
      ]
    },
    {
      project: {
        title: "ERP V2.8 Fiat",
        projectId: "P02"
      },
      assignments: [
        {
          id: 3,
          role: "Arquitecto de software",
          initialDate: "01/09/2018",
          endDate: "01/10/2018",
          hoursPerWeek: 40
        }
      ]
    }
  ]
}

export default response;