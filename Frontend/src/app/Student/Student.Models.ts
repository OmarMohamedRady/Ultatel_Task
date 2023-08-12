export namespace StudentModel {
  export class StudentReqModel {
    FirstName: string = '';
    LastName: string = '';
    Email: string = '';
    Gender: string = '';
    Country: string = '';
    BirthDate!: { year: number; month: number; day: number };
  }
}
