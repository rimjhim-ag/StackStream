import React, { useState, useEffect } from 'react';
import axios from 'axios';

const withWeatherLogic = (WrappedComponent) => {
  return (props) => {
    const [isDaytimeTheme, setIsDaytimeTheme] = useState(true);
    const [userLocation, setUserLocation] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });

            const apiKey = '74c92d48ebab9ea710fde44587ca575c'; 
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
              params: {
                lat: latitude,
                lon: longitude,
                appid: apiKey,
              },
            });

            const currentTimestamp = new Date().getTime();
            const sunrise = new Date(weatherResponse.data.sys.sunrise * 1000).getTime();
            const sunset = new Date(weatherResponse.data.sys.sunset * 1000).getTime();

            const isDaytime = currentTimestamp > sunrise && currentTimestamp < sunset;
            setIsDaytimeTheme(isDaytime);
            setLoading(false); 
          });
        } catch (error) {
          console.error('Error fetching weather:', error);
          setLoading(false); 
        }
      };

      fetchData();
    }, []);

    const themeStyle = {
  backgroundColor: isDaytimeTheme ? '#F5F5F5' : '#2D2D2D',
  color: isDaytimeTheme ? '#333' : '#DDD', // Adjust text color for readability
  transition: 'background-color 0.5s ease-in-out', // Smooth transition effect
};


    return (
      <div style={themeStyle}>
        {loading ? (
          
          <div>Loading ...</div>
        ) : (
          <WrappedComponent {...props} />
        )}
      </div>
    );
  };
};

export default withWeatherLogic;
