export function convertUnixTo12Hr(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let period = "AM";

  // Adjust hours and determine period (AM/PM)
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }

  // Add leading zeros to minutes if needed
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Construct the 12-hour time string
  const timeString = `${hours}:${minutes} ${period}`;

  return timeString;
}
