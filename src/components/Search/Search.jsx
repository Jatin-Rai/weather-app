import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../features/weatherSlice";
import Loading from "../Loading/Loading";
import Weather from "../Weather/Weather";

const Search = () => {
  console.log("search rendered");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  const handleSubmit = (event) => {
    if (city.trim() !== "" && event.key === "Enter") {
      dispatch(fetchWeather(city));
      setCity("");
    }
  };

  return (
    <div>
      <div className="text-center mt-5">
        <input
          type="text"
          placeholder="Enter Location"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onKeyDown={handleSubmit}
          className="p-3 rounded-full bg-gray-800 bg-opacity-50 text-white focus:outline-none focus:scale-110 transition-all duration-300 placeholder:text-white w-2/3 sm:w-2/5"
        />
      </div>
      {loading && <Loading />}
      {data && (
        <Weather
          name={data.name}
          country={data.sys.country}
          temperature={data.main.temp}
          weather={data.weather[0].description}
          humidity={data.main.humidity}
          pressure={data.main.pressure}
          wind={data.wind.speed}
          sunrise={data.sys.sunrise}
          sunset={data.sys.sunset}
          icon={data.weather[0].icon}
          maxTemp={data.main.temp_max}
          minTemp={data.main.temp_min}
          feels_like={data.main.feels_like}
        />
      )}
      {error && <p className="pt-5 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default Search;
