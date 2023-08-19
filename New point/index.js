function cnotas (sng) {
        function sngn(nf) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    if (score <= 59) return 'F';
        }
}
const parsed = studentGrades.map(grade => sngn(grade));
const passed = studentGrades.map()


return {
    parsed,
    passed,
    lose,
    average,
  };

const studentGrades = [100, 50, 65, 70, 85, 96, 45]
const result = computeGrades(studentGrades)
console.log(result)
