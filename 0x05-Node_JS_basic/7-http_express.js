// 7-http_express.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const app = express();
const PORT = 1245;

const parseCSV = async (filePath) => {
  const students = { CS: [], SWE: [] };
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const [name, field] = line.split(',');
    if (name && field) {
      if (field === 'CS') {
        students.CS.push(name);
      } else if (field === 'SWE') {
        students.SWE.push(name);
      }
    }
  }

  return students;
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const filePath = process.argv[2];

  if (!filePath) {
    return res.status(400).send('Database file is missing');
  }

  try {
    const students = await parseCSV(filePath);

    const csStudents = students.CS.join(', ');
    const sweStudents = students.SWE.join(', ');
    const totalCS = students.CS.length;
    const totalSWE = students.SWE.length;

    res.send(
      `This is the list of our students\n` +
      `Number of students: ${totalCS + totalSWE}\n` +
      `Number of students in CS: ${totalCS}. List: ${csStudents}\n` +
      `Number of students in SWE: ${totalSWE}. List: ${sweStudents}`
    );
  } catch (error) {
    res.status(500).send('Error reading the database file');
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
