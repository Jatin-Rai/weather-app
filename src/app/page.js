"use client";
import { useState } from "react";
import Search from "@/components/Search";
import WeatherCard from "@/components/WeatherCard";
import { fetchData } from "@/api/weatherAPI";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const handleSearchCity = async (inputValue) => {
    setSearchCity(inputValue);
    setLoading(true);
    try {
      const result = await fetchData(inputValue);
      setData(result);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request aborted");
      } else {
        console.log("Error fetching data: ", error);
      }
    }
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center">
      <Search onSearch={handleSearchCity} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <WeatherCard data={data} searchCity={searchCity} />
      )}
    </main>
  );
}
