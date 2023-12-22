'use strict';

import axios from 'axios';

class bard {
  constructor() {}

  // Method to ask a question without an image
  async question({ ask: questionText }) {
    // Check if the question text is provided
    if (!questionText) {
      throw new Error("Please specify a question!");
    }

    try {
      // Make a POST request to a specified API endpoint
      const response = await axios.post("https://bard.rizzy.eu.org/api/onstage", {
        'ask': questionText
      }, {
        'headers': {
          'Content-Type': "application/json"
        }
      });

      // Return the data from the response
      return response.data;
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  }

  // Method to ask a question with an image
  async questionWithImage({ ask: questionText, image: imageUrl }) {
    // Check if both the question text and image URL are provided
    if (!questionText) {
      throw new Error("Please specify a question!");
    }
    if (!imageUrl) {
      throw new Error("Please specify a URL for the image!");
    }

    try {
      // Make a POST request to a specified API endpoint with an image
      const response = await axios.post("https://bard.rizzy.eu.org/api/onstage/image", {
        'ask': questionText,
        'image': imageUrl
      }, {
        'headers': {
          'Content-Type': "application/json"
        }
      });

      // Return the data from the response
      return response.data;
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  }
}

// Export the bard class as the default export
export default bard;
