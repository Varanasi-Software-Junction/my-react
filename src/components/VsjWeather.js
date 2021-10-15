import React, { useState, useEffect } from 'react';

function VsjWeather() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Varanasi&appid=4a1f8a61b74546825af1e0be106e797b")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
		  console.log(result);
        },
      
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
	  console.log("loading failed");
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
	  <li>
        {JSON.stringify(items.list[0].main)}
		</li>
		 <li>
        {JSON.stringify(items.list[0].main.temp)}
		</li>
      </ul>
    );
  }

}
export default VsjWeather;