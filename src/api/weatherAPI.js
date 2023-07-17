import axios from "axios";

export const fetchData = async (searchCity, signal) => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`,
      { signal }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// ${6a6e320bde372be4fbd5ecadb96b8128}
