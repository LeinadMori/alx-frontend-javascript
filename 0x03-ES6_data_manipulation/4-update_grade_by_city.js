function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const gradeObj = newGrades.find(grade => grade.studentId === student.id);
            if (gradeObj) {
                student.grade = gradeObj.grade;
            } else {
                student.grade = 'N/A';
            }
            return student;
        });
}

export default updateStudentGradeByCity;