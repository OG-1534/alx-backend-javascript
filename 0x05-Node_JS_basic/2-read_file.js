const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');
        
        // Split the data into lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Remove the header line
        const header = lines.shift();

        // Initialize an object to hold the field data
        const fields = {};

        lines.forEach((line) => {
            const [firstName, , , field] = line.split(',');

            // If the field does not exist in the object, create it
            if (!fields[field]) {
                fields[field] = [];
            }

            // Add the student's first name to the field
            fields[field].push(firstName);
        });

        // Get the total number of students
        const totalStudents = lines.length;
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students in each field and their names
        for (const [field, students] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
