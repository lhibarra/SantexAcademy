export interface Survey {
    email: string;
    questions: {
      [index: string]: string;
    };
    surveyorId: number;
  }
  