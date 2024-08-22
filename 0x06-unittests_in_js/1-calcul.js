// Function that executes sum, subtract, divide

function calculateNumber(type, a, b) {
  const roundIntA = Math.round(a);
  const roundIntB = Math.round(b);

  if (type === 'SUM') {
    return roundIntA + roundIntB;
  } else if (type === 'SUBTRACT') {
    return roundIntA - roundIntB;
  } else if (type === 'DIVIDE') {
    if (roundIntB === 0) {
      return 'Error';
    }
    return roundIntA / roundIntB;
  }
}

module.exports = calculateNumber;
