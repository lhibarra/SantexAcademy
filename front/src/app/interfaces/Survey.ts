export interface Survey {
    email: string;
    questions: {
      [index: string]: string | boolean | number | null;
    };
    surveyorId: number | null;
  }

  const questionLabels: { [key: string]: string } = {
    pregunta1: "¿Cuál es su nombre?",
    pregunta2: "¿Cuál es su correo electrónico?",
    pregunta3: "¿Cuál es su edad?",
    
  };