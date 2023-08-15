// convert unix timestamp to 12H format

export const convertUnixTo12H = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
  const hours = String(date.getHours() % 12 || 12).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = date.getHours() < 12 ? "AM" : "PM";

  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return formattedTime;
};

export const currentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const monthAbbreviation = new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(date);
  const day = String(date.getDate()).padStart(2, "0");

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  // console.log(dayName); // Outputs the full day name (e.g., "Monday")

  const formattedDate = `${day} ${monthAbbreviation}, ${year}`;

  return { date: formattedDate, dayName: dayName };
};
