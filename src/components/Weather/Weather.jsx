/* eslint-disable react/prop-types */
import React from "react";

import { convertUnixTo12H, currentDate } from "../../utils/convertUnixTo12H";

import { MdLocationOn } from "react-icons/md";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";

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
  const { dayName, date } = currentDate();

  return (
    <div className="w-full mt-16 lg:mt-30 lg:px-30 justify-center container mx-auto">
      <div className="flex flex-wrap w-full lg:w-auto">
        <div className="w-full lg:w-1/2 flex rounded-lg bg-auto">
          <div className="rounded-lg py-6 pl-8 pr-32 w-full bg-white bg-opacity-20 shadow text-white">
            <div className="mb-10">
              <h2 className="font-bold text-3xl leading-none pb-1">
                {dayName}
              </h2>
              <h3 className="leading-none pb-2 pl-1">{date}</h3>
              <div className="flex opacity-80 pt-1">
                <MdLocationOn className="text-xl" />
                <span>
                  {name}, {country}
                </span>
              </div>
            </div>
            <div className="flex gap-32">
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${icon}.png`}
                  width={100}
                />
                <strong className="leading-none text-6xl block font-weight-bolder">
                  {Math.round(temperature)}ºC
                </strong>
                <p className="text-sm text-left font-mono">{weather.toUpperCase()}</p>
              </div>
              <div className="flex items-end p-2 font-semibold">
                Feels like {Math.round(feels_like)}ºC
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex ml-0">
          <div className="lg:my-3 bg-gray-800 bg-opacity-50 text-white p-8 lg:rounded-r-lg shadow w-full">
            <div className="flex justify-between mb-4 w-full">
              <div className="w-auto font-bold uppercase text-90">Pressure</div>
              <div className="w-auto text-right">{pressure} mb</div>
            </div>
            <div className="flex justify-between mb-4 w-full">
              <div className="w-auto font-bold uppercase text-90">Humidity</div>
              <div className="w-auto text-right">{humidity} %</div>
            </div>
            <div className="flex justify-between mb-8 w-full">
              <div className="w-auto font-bold uppercase text-90">Wind</div>
              <div className="w-auto text-right">{wind} Mph</div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col w-1/4 bg-gray-100 bg-opacity-30 rounded-lg pb-2">
                <div className="text-center p-4">
                  <div className="flex justify-center">
                    <FaTemperatureArrowUp className="text-4xl text-red-600" />
                  </div>
                  <br />
                  <div className="text-center">
                    <strong className="text-xl text-white">
                      {Math.round(maxTemp)}ºC
                    </strong>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-1/4 bg-gray-100 bg-opacity-30 rounded-lg pb-2">
                <div className="text-center p-4">
                  <div className="flex justify-center">
                    <FaTemperatureArrowDown className="text-4xl text-green-600" />
                  </div>
                  <br />
                  <div className="text-center">
                    <strong className="text-xl text-white">
                      {Math.round(minTemp)}ºC
                    </strong>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-1/4 bg-gray-100 bg-opacity-30 rounded-lg pb-2">
                <div className="text-center p-2">
                  <div className="flex justify-center">
                    <WiSunrise className="text-6xl text-yellow-500" />
                  </div>
                  <br />
                  <div className="text-center">
                    <strong className="text-xl text-white">
                      {convertUnixTo12H(sunrise)}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-1/4 bg-gray-100 bg-opacity-30 rounded-lg pb-2">
                <div className="text-center p-2">
                  <div className="flex justify-center">
                    <WiSunset className="text-6xl text-purple-600" />
                  </div>
                  <br />
                  <div className="text-center">
                    <strong className="text-xl text-white">
                      {convertUnixTo12H(sunset)}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
