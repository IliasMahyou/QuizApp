export interface IQuestions {
    category:string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[],
    allOptions?:string[],
    filledInAnswer?:string
  }
  
  export interface IQuestionsContext {
    questions: IQuestions[],
    setQuestions:  React.Dispatch<React.SetStateAction<IQuestions[]>>
  }
  