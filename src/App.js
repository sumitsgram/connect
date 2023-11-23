import React, { useState } from 'react';
import axios from 'axios';


function App() {
// Data you want to send to your backend;
const [postData, setPostData] = useState({
// Initialize your post data here
    movie: '',
    slot: '',
    seats:'',
  });

// Now send request to the required url to database
const handlePostRequest = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/booking', postData, {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed connect
      },
    });

 // If you need the response data in console
 const responseData = response.data;
 console.log(responseData);
 
  // Handle the response data as needed
} catch (error) {
  console.error('Error during POST request:', error);
}
};

  return (
    <div>
      {/* Your form or component that updates the postData state */}
      {/* For example, you might have input fields that update postData */}
      <input
        type="text"
        value={postData.movie}
        onChange={(e) => setPostData({ ...postData, movie: e.target.value })}
      />
      <input
        type="text"
        value={postData.slot}
        onChange={(e) => setPostData({ ...postData, slot: e.target.value })}
      />
       <input
        type="text"
        value={postData.seats}
        onChange={(e) => setPostData({ ...postData, seats: e.target.value })}
      />

      {/* Button to trigger the POST request */}
      <button onClick={handlePostRequest}>Make POST Request</button>
    </div>
  )
}

export default App


