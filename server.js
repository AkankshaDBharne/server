
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const { name, email, comments } = req.body; // Get form data from your website

    const formData = {
      AccessCode: '8UW3AMI6VO30MS6RHB07K2E2P',
      FirstName: name,
      Email: email,
      Message: comments,
    };

    // Make a POST request to the target API
    const response = await axios.post('https://forms.maakeetoo.com/formapi/644', formData);

    // Return the response from the API to your website
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to submit data' });
  }
};
