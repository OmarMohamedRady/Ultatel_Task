export namespace StudentModels {
  export class StudentReqModel {
    FirstName: string = '';
    LastName: string = '';
    Email: string = '';
    Gender: string = '';
    Country: string = '';
    BirthDate!: { year: number; month: number; day: number };
  }

  export class StudentModel {
    _id: string | null = null;
    FirstName: string = '';
    LastName: string = '';
    Email: string = '';
    Gender: string = '';
    Country: string = '';
    BirthDate!: { year: number; month: number; day: number };
  }
}
