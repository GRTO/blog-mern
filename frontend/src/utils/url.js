import { ADMIN_URL } from "../constants/contants";

/**
 * @param {String} item the string to be parsed
 * @param {String} separator the string that is going to be use as separator. By default, it is `-`
 * @returns a string in a correct format
 */
export const urlRouteParser = (item, separator = "-") =>
  item.trim().split(" ").join(separator);

/**
 * @param {{title: String, description: String, categories: String, creationTime: string}} post
 * @param {String[]} keys an array of keys that is going to be used inside the url parser. The order matters
 * @param {String} separator the string that is going to be use as separator. By default, it is `-`
 * @returns an url string in a correct format
 */
export const postUrlParser = (post, keys, separator = "-") =>
  keys.reduce((prev, key) => {
    if (post[key]) {
      return prev + urlRouteParser(post[key], separator) + "/";
    }
    return prev;
  }, "");

/**
 * @param {String} pathname the current pathname
 * @returns a boolean if the admin is present in the pathname
 */
export const isAdminURL = (pathname) => {
  const splittedPathname = pathname.split("/").filter((name) => name);
  const [admin] = splittedPathname;

  return admin === ADMIN_URL;
};

const undecodeParam = (item) => (item ? item.split("-").join(" ") : undefined);

/**
 * A function that returns the category and title of a single post
 * @param {String} pathname the current pathname
 * @returns returns the category and title of a single post
 */
export const undecodeURL = (pathname) => {
  const splittedPathname = pathname.split("/").filter((name) => name);

  const [admin, category, title] = splittedPathname;

  if (admin === ADMIN_URL) {
    return { category: undecodeParam(category), title: undecodeParam(title) };
  }

  return { category: undecodeParam(admin), title: undecodeParam(category) };
};
