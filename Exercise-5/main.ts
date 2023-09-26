class Student {
  studentName: string;
  studentAge: number;
  studentGrade: number;

  constructor(studentName: string, studentAge: number, studentGrade: number){
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
  }
 
  displayInfo() {
    console.log(this.studentName, this.studentAge, this.studentGrade);
  }

  isPassing(gradeThreshold: number){
    if (this.studentGrade>= 60) {
      console.log(`${this.studentName} is passing`);
    } else {
      console.log(`${this.studentName} needs some help 🥲`);
    };
  }
}

let newStudent = new Student ("Hank", 45, 99);