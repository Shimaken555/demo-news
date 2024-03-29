import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.scss';

const Weather: React.FC = () => {
  const [temp, setTemp] = useState([]);
  const [main, setMain] = useState([]);
  const [icon, setIcon] = useState(['01']);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const exclude = 'hourly,minutely';
      const weatherKey = process.env.React_APP_WEATHER_API_KEY;
      const lat = 35.4122;
      const lon = 139.413;
      const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${weatherKey}`;
      const res = await axios.get(URL);
      setIcon(res.data.current.weather[0].icon);
      setTemp(res.data.current.temp);
      setMain(res.data.current.weather[0].main);

      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err);
      console.error(err);
    }
  };

  const lenght = temp.toString().slice(2,3)
  console.log(lenght);

  return (
    <>
      <div className="weather">
        <div className="weather__main">
          <div className="weather__title">
            <h2>Tokyo Current Weather</h2>
          </div>
          <div className="weather__top">
            <div className="weather__temp">
              <p>
                {lenght == "."
                  ? temp.toString().slice(0, 2)
                  : temp.toString().slice(0, 1)}
                {/* {temp.toString().slice(0, 2)} */}
                <span>˚c</span>
              </p>
            </div>
            <div className="weather__icon">
              <img
                src={`https://shima-ken.org/sample4/img/weatherIcons/${
                  icon.slice(0, 2) + 'd'
                }.png`}
                alt="Tokyo's weather icon"
              />
              <span>{main}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
