import axios from "axios";
let baseUrl = "http://192.168.1.204:8000/";

const response = (data, error) => ({ data, error });

async function post(endpointURL, data, config) {
  try {
    const serverResponse = await axios.post(
      `${baseUrl}${endpointURL}`,
      data,
      config
    );
    return response(serverResponse, "");
  } catch (error) {
    return response("", error.response.data);
  }
}

async function get(endpointURL, config) {
  try {
    const serverResponse = await axios.get(`${baseUrl}${endpointURL}`, config);
    return response(serverResponse, "");
  } catch (error) {
    return response("", error.message);
  }
}
async function patch(endpointURL, data, config) {
  try {
    const serverResponse = await axios.patch(
      `${baseUrl}${endpointURL}`,
      data,
      config
    );
    return response(serverResponse, "");
  } catch (error) {
    return response("", error.message);
  }
}
async function put(endpointURL, data, config) {
  try {
    const serverResponse = await axios.put(
      `${baseUrl}${endpointURL}`,
      data,
      config
    );
    return response(serverResponse, "");
  } catch (error) {
    return response("", error.message);
  }
}
async function deleteItem(endpointURL, config) {
  try {
    const serverResponse = await axios.delete(
      `${baseUrl}${endpointURL}`,
      config
    );
    return response(serverResponse, "");
  } catch (error) {
    return response("", error.message);
  }
}
export default { post, get, patch, put, deleteItem };
