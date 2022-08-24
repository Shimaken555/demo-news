import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './weather.module.scss';

const Weather: React.FC = () => {
  const [temp, setTemp] = useState([]);
  const [main, setMain] = useState([]);
  const [icon, setIcon] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const exclude = 'hourly,minutely';
      const weatherKey = 'c19889a5d98ce4046ae35a0fd80dc0ff';
      const lat = 35.4122; 
      const lon = 139.413;
      const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.React_APP_WEATHER_API_KEY}`;
      const res = await axios.get(URL);
      setTemp(res.data.current.temp);
      setMain(res.data.current.weather[0].main);
      setIcon(res.data.current.weather[0].icon);

      setLoading(false);
      console.log(res);
    } catch (err: any) {
      setLoading(false);
      setError(err);
      console.error(err);
    }
  };

  return (
    <>
      <div className={styles.weather}>
        <div className={styles.weather__main}>
          <div className={styles.weather__title}>
            <h2>Tokyo Current Weather</h2>
          </div>
          <div className={styles.weather__top}>
            <div className={styles.weather__temp}>
              <p>
                {temp.toString().slice(0, 2)}
                <span>˚c</span>
              </p>
            </div>
            <div className={styles.weather__icon}>
              <img
                src={`/img/weatherIcons/${icon.slice(0, 2) + 'd'}.png`}
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
