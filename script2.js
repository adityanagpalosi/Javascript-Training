const students = [
    { name: "Alice", age: 17, scores: [85, 90, 78] },
    { name: "Bob", age: 20, scores: [95, 88, 92] },
    { name: "Charlie", age: 18, scores: [70, 75, 80] },
    { name: "David", age: 19, scores: [65, 70, 72] },
];

function filterAndMapScores(students) {
    return students
        .filter(student => student.age >= 18)  // Filter out students younger than 18
        .map(student => {
            const averageScore = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
            return { name: student.name, averageScore: parseFloat(averageScore.toFixed(2)) };
        });
}

const result = filterAndMapScores(students);
console.log(result); 



