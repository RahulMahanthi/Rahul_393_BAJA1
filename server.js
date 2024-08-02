const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const getHighestAlphabet = (alphabets) => {
  if (alphabets.length === 0) return [];
  alphabets.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return [alphabets[alphabets.length - 1]];
};

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid input data format. Expected an array.',
    });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));

  const highestAlphabet = getHighestAlphabet(alphabets);

  const response = {
    is_success: true,
    user_id: 'john_doe_17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
