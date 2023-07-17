import Image from "next/image";
import React from "react";

import { WiSunrise, WiSunset } from "react-icons/wi";
import { RiWindyLine } from "react-icons/ri";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { convertUnixTo12Hr } from "@/utils/convertUnixTo12Hr";

const WeatherCard = ({ data, searchCity }) => {
  if (!data) {
    return null;
  }

  console.log(data);
  const { name, visibility, dt, timezone } = data;
  const { description, icon } = data.weather[0];
  const { temp, temp_max, temp_min, humidity, pressure, feels_like } =
    data.main;
  const { sunrise, sunset, country } = data.sys;
  const { speed } = data.wind;

  const fTemp = temp * (9 / 5) + 32;

  const newSunrise = convertUnixTo12Hr(sunrise);
  const newSunset = convertUnixTo12Hr(sunset);

  const newTimezone = convertUnixTo12Hr(timezone);

  return (
    <div className="flex flex-col items-center mt-8 sm:flex-row">
      <div className="mx-8 bg-gradient-to-br from-blue-300 to-blue-700 shadow-xl rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-28 p-4 flex justify-end items-center"
          style={{
            backgroundImage:
              "url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/seattle-skyline-with-mount-rainier-during-sunrise-panorama-david-gn.jpg)",
          }}
        >
          <p className="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">
            {name || searchCity}, {country}
          </p>
        </div>
        <div className="pt-6 px-4">
          <div className="flex flex-col items-center">
            <Image
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              className="shadow-lg rounded-full bg-gradient-radial from-blue-300 to-blue-700 border-2 border-white"
              width={80}
              height={80}
              alt="weather icon"
            />
            <div className="my-2 py-2 text-center">
              <p className="text-5xl text-white">
                {Math.round(temp)}°
                <span className="text-2xl text-slate-700">
                  {" "}
                  / {Math.round(fTemp)}°
                </span>
              </p>
              <p className="my-1 py-1 text-xs text-slate-200">
                {description.toUpperCase()}
              </p>
            </div>
            <span className="m-2 p-2 text-sm text-slate-200">
              Feels like {Math.round(feels_like)}°
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 border-t border-white text-white gap-10 sm:flex-col md:flex-row">
          <div className="flex items-center">
            <p className="flex items-center">
              <span className="text-white font-bold">{humidity}%</span>
              <span className="ml-1 text-sm text-slate-200">Humidity</span>
            </p>
          </div>
          <div className="flex items-center">
            <p>
              <span className="text-white font-bold">{pressure}</span>{" "}
              <span className="text-sm text-slate-200">mb</span>
            </p>
          </div>
          <div className="flex items-center">
            <p>
              <span className="text-white font-bold">{visibility / 1000}</span>{" "}
              <span className="text-sm text-slate-200">km Visibility</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8 mx-4 sm:mt-8 sm:mx-10">
        <div className="p-4 bg-gradient-to-br from-blue-300 to-blue-700 border rounded-lg shadow-lg">
          <div className="flex items-center text-sm">
            <RiWindyLine className="text-lg text-slate-200" />
            <span className="text-slate-200">Wind</span>
          </div>
          <p className="my-4 text-2xl text-center text-white">
            {speed}
            <span className="text-sm text-slate-200"> km/h</span>
          </p>
        </div>
        <div className="my-4 p-6 bg-gradient-to-br from-blue-300 to-blue-700 border rounded-lg shadow-lg">
          <div className="flex flex-row justify-end gap-10">
            <div className="flex flex-col gap-2">
              <FaTemperatureArrowUp className="text-red-500" />
              <span className="text-white">{Math.round(temp_max)}°</span>
            </div>
            <div className="flex flex-col gap-2">
              <FaTemperatureArrowDown className="text-blue-200" />
              <span className="text-white">{Math.round(temp_min)}°</span>
            </div>
          </div>
        </div>
        <div className="my-2 p-6 bg-gradient-to-br from-blue-300 to-blue-700 border rounded-lg shadow-lg">
          <div className="flex flex-row justify-end gap-10">
            <h4>{newTimezone}</h4>
            <div className="flex flex-col gap-2">
              <WiSunrise className="text-yellow-500 text-5xl" />
              <span className="text-white">{newSunrise}</span>
            </div>
            <div className="flex flex-col gap-2">
              <WiSunset className="text-purple-600 text-5xl" />
              <span className="text-white">{newSunset}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

// <div className="m-1 p-1 w-2/3">
// <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//   <div className="flex flex-col items-center py-4 px-6">
//     <div className="flex justify-end">
//       <h1 className="text-gray-700 text-5xl font-sans">
//         {Math.round(temp)}° C
//       </h1>
//     </div>
//     <Image
//       src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
//       className="m-8 p-8 bg-blue-400 rounded-full"
//       width={150}
//       height={150}
//       alt="weather icon"
//     />
//     <a href="#" className="text-blue-500 font-semibold">
//       {description.toUpperCase()}
//     </a>
//     <h2 className="text-4xl font-semibold text-gray-800 m-4">
//       {name || searchCity}
//     </h2>

//     <div className="flex flex-col items-center mt-4">
//       <p className="text-gray-600">
//         Max: {Math.round(temp_max)}° C Min: {Math.round(temp_min)}° C
//       </p>
//       <div className="text-gray-700">
//         <ul>
//           {/* {rainCheck()} */}
//           <li>Humidity: {Math.round(humidity)}%</li>
//           <li>Pressure: {pressure} mb</li>
//           <li>Feels like: {Math.round(feels_like)}° C</li>

//           <li>Sunrise: {newSunrise}</li>
//           <li>Sunset: {newSunset}</li>
//           <li>Windspeed: {Math.round(speed)} km/h</li>
//           <li>Degree: {deg / 32}</li>
//           <li>Visibility: {visibility / 1000} km</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
