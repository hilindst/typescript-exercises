var Student = /** @class */ (function () {
    function Student(studentName, studentAge, studentGrade) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    Student.prototype.displayInfo = function () {
        console.log(this.studentName, this.studentAge, this.studentGrade);
    };
    Student.prototype.isPassing = function (gradeThreshold) {
        if (this.studentGrade >= 60) {
            console.log("".concat(this.studentName, " is passing"));
        }
        else {
            console.log("".concat(this.studentName, " needs some help \uD83E\uDD72"));
        }
        ;
    };
    return Student;
}());
var newStudent = new Student("Hank", 45, 99);
