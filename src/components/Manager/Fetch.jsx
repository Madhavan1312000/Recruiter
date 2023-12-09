import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YourComponent() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        // Check if the response data is an array
       setContent(response.data)
       console.log(content)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {content.map((x)=>{
                return(
                            <div>
                                <h2>{x.id}</h2>
                                <h3>{x.title}</h3>
                    </div>
                )
            })}
    </div>
  );
}

export default YourComponent;
