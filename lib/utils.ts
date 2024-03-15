import { type ClassValue, clsx } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const covertISOFormateToReadableFormat = (
  isoDate: string,
  format: string = "MMM D, YYYY"
) => {
  return moment(isoDate).format(format);
};

export function formatDate(dateString: string | undefined): string {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
export function formatDateTwo(dateString: string | undefined): string {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options)
    .format(date)
    .replace(",", "");
}

export function getAmPmFromTime(time: string | undefined): string {
  if (!time) {
    return "";
  }
  const [hours] = time.split(":"); // Split the time by ":" and get the hours part
  const hoursInt = parseInt(hours, 10); // Convert the hours part to an integer
  return hoursInt < 12 ? "AM" : "PM"; // Return "AM" if hours < 12, otherwise "PM"
}

export function formatDateToYYYYMMDD(date: Date | undefined | null) {
  if (!date) {
    return "";
  }
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is zero-based
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function calculateTimeDifference(
  startTime: string | undefined,
  endTime: string | undefined
): string {
  if (!startTime && !endTime) {
    return "";
  }
  // Create Date objects for both times on the same day
  const startDate = new Date(`1970-01-01T${startTime}:00`);
  const endDate = new Date(`1970-01-01T${endTime}:00`);

  // Calculate the difference in milliseconds
  const diff = endDate.getTime() - startDate.getTime();

  // Convert the difference from milliseconds to minutes
  const diffInMinutes = diff / 1000 / 60;

  return diffInMinutes.toString() + "-Minutes";
}

export function checkMatch(list: string[], item: string): boolean {
  // Iterate over each string in the list

  // console.log("list", list);
  // console.log("item", item);
  for (let prefix of list) {
    // Check if the item starts with the current prefix
    if (item.startsWith(prefix)) {
      return true;
    }
  }
  return false;
}

export function formatTime(timestamp: string): string {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Use toLocaleTimeString to format the time in the desired "11:24 AM" format
  // The options object specifies the format we want
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit', // Display hour in 2-digit format
    minute: '2-digit', // Display minute in 2-digit format
    hour12: true // Use 12-hour format
  };

  // Format the date according to the local time and specified options
  const formattedTime = date.toLocaleTimeString('en-US', options);

  return formattedTime;
}
