import axios from "axios";
import { handleResponse, handleError } from "./response";

/**
 * @param {string} resource resource that is going to be consumed
 * @param {Object} params object that have any param for your query
 * @returns a Promise response
 */
const getAll = (resource, params) =>
  axios.get(resource, { params }).then(handleResponse).catch(handleError);

/**
 * @param {string} resource resource that is going to be consumed
 * @param {string} id the specific single element that is going to be consumed
 * @returns a Promise response
 */
const getSingle = (resource, id) =>
  axios.get(`${resource}/${id}`).then(handleResponse).catch(handleError);

/**
 * @param {string} resource resource that is going to be created
 * @param {string} model the data that is going to be stored in our database
 * @returns a Promise response
 */
const post = (resource, model) =>
  axios.post(resource, model).then(handleResponse).catch(handleError);

/**
 * @param {string} resource resource that is going to be consumed
 * @param {string} id the specific single element that is going to be updated
 * @param {string} model the data that is going to be updated in our database
 * @returns a Promise response
 */
const put = (resource, model, id) =>
  axios.put(`${resource}/${id}`, model).then(handleResponse).catch(handleError);

/**
 * @param {string} resource resource that is going to be consumed
 * @param {string} id the specific single element that is going to be deleted
 */
const remove = (resource, id) =>
  axios.delete(`${resource}/${id}`).then(handleResponse).catch(handleError);

export const apiProvider = { getAll, getSingle, post, put, remove };
