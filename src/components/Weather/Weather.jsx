/* eslint-disable react/prop-types */
import React from "react";

import { convertUnixTo12H, currentDate } from "../../utils/convertUnixTo12H";

import { MdLocationOn } from "react-icons/md";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import Footer from "../Footer/Footer";

const Weather = ({
  name,
  country,
  temperature,
  feels_like,
  maxTemp,
  minTemp,
  weather,
  humidity,
  pressure,
  wind,
  sunrise,
  sunset,
  icon,
}) => {
  console.log("Weather rendered");
  const { dayName, date } = currentDate();

  return (
    <>
      <div className="w-full mt-16 lg:mt-30 px-4 lg:px-0 flex flex-col lg:flex-row justify-center container mx-auto">
        <div className="w-full pb-5 lg:w-1/2 mb-8 lg:mb-0 rounded-lg bg-gray-800 bg-opacity-50 shadow text-white">
          <div className="py-6 pl-8 pr-12">
            <h2 className="font-bold text-3xl leading-none pb-1">{dayName}</h2>
            <h3 className="leading-none pb-2 pl-1">{date}</h3>
            <div className="flex items-center opacity-80">
              <MdLocationOn className="text-xl" />
              <span className="ml-1">
                {name}, {country}
              </span>
            </div>
          </div>
          <div className="flex justify-between px-8 pt-6">
            <div>
              <img
                src={`http://openweathermap.org/img/w/${icon}.png`}
                width={100}
                alt="Weather Icon"
              />
              <strong className="leading-none text-6xl font-extrabold">
                {Math.round(temperature)}ºC
              </strong>
              <p className="text-sm mt-1">{weather.toUpperCase()}</p>
            </div>
            <div className="flex items-end font-semibold">
              Feels like {Math.round(feels_like)}ºC
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-4 mb-8 lg:mb-0">
          <div className="bg-gray-800 bg-opacity-50 text-white p-6 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <div className="font-bold uppercase">Pressure</div>
              <div>{pressure} mb</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="font-bold uppercase">Humidity</div>
              <div>{humidity} %</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="font-bold uppercase">Wind</div>
              <div>{wind} Mph</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col bg-gray-800 bg-opacity-30 rounded-lg p-2">
                <FaTemperatureArrowUp className="text-4xl text-red-600 mx-auto" />
                <strong className="text-xl text-white mt-2 text-center">
                  {Math.round(maxTemp)}ºC
                </strong>
              </div>
              <div className="flex flex-col bg-gray-800 bg-opacity-30 rounded-lg p-2">
                <FaTemperatureArrowDown className="text-4xl text-green-600 mx-auto" />
                <strong className="text-xl text-white mt-2 text-center">
                  {Math.round(minTemp)}ºC
                </strong>
              </div>
              <div className="flex flex-col bg-gray-800 bg-opacity-30 rounded-lg p-2">
                <WiSunrise className="text-6xl text-yellow-500 mx-auto" />
                <strong className="text-xl text-white mt-2 text-center">
                  {convertUnixTo12H(sunrise)}
                </strong>
              </div>
              <div className="flex flex-col bg-gray-800 bg-opacity-30 rounded-lg p-2">
                <WiSunset className="text-6xl text-purple-600 mx-auto" />
                <strong className="text-xl text-white mt-2 text-center">
                  {convertUnixTo12H(sunset)}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Weather;
