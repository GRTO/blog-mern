import { DateTime } from "luxon";

/**
 * Convert a ISO format date into the current format the use wants to apply.
 * @param {String} date a date that represent the ISO format
 * @param {String} format the format that is going to be used. By default, the function uses the following format `y-LL-dd HH:mm:ss`.
 * Here there is a link with the available standalone tokens for adding your
 * custom formatting [Format tokens](https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens).
 * @returns the date with the expected formatter, if it is not a valid ISO format the function will return `Invalid Date Format`
 */
export const fromISOtoFormat = (date, format = "y-LL-dd HH:mm:ss") => {
  const dateISO = DateTime.fromISO(date);

  return dateISO.isValid ? dateISO.toFormat(format) : "Invalid Date Format";
};

/**
 * @param {Date} date value that is going to be transformed in a luxon instance
 */
export const fromJSDate = (date) => {
  const dateLuxon = DateTime.fromJSDate(date);
  return dateLuxon.isValid ? dateLuxon : "Invalid Date";
};

/**
 * @param {DateTime} date
 * @returns returns the DateTime Object to a ISO format string
 */
export const formatToISO = (date) => date.toISO();
