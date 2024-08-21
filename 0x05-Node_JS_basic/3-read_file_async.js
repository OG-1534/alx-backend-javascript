const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter((line) => line.trim() !== '');

            if (lines.length === 0) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const header = lines.shift(); // Remove header line
            const fields = {};

            lines.forEach((line) => {
                const [firstName, , , field] = line.split(',');

                if (!fields[field]) {
                    fields[field] = [];
                }

                fields[field].push(firstName);
            });

            const totalStudents = lines.length;
            console.log(`Number of students: ${totalStudents}`);

            for (const [field, students] of Object.entries(fields)) {
                console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
            }

            resolve();
        });
    });
}

module.exports = countStudents;
