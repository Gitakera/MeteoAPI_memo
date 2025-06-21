import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator, ImageBackground } from 'react-native';
import axios from 'axios';
import styles from './assets/styles'; // Importation des styles depuis assets/styles.js
import {API_KEY} from '@env';

const DEFAULT_CITY = 'Antananarivo';

const WeatherApp = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpg')} // Image de fond
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>{weather?.name || city}</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : weather ? (
          <View style={styles.weatherContainer}>
            <Text style={styles.weatherDescription}>
              {weather.weather[0]?.description || 'Unknown conditions'}
            </Text>
            <Text style={styles.temperature}>
              {Math.round(weather.main.temp)}°
            </Text>
          </View>
        ) : null}

        <TextInput
          style={styles.input}  
          placeholder="Search any city"
          placeholderTextColor="#fff"
          onSubmitEditing={(e) => fetchWeather(e.nativeEvent.text)}
        />
      </View>
    </ImageBackground>
  );
};

export default WeatherApp;
