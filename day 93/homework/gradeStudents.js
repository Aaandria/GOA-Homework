export function gradeStudents(grades) {
    const letterGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 90) {
            letterGrades.push('A');
        } else if (grades[i] >= 80) {
            letterGrades.push('B');
        } else if (grades[i] >= 70) {
            letterGrades.push('C');
        } else if (grades[i] >= 60) {
            letterGrades.push('D');
        } else {
            letterGrades.push('F');
        }
    }
    return letterGrades;
}