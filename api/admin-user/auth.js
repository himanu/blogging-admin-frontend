import axios from "axios";

import apiBaseUrl from "../../utils/apiBaseUrl.js";

export default async function (req) {
  try {
    const response = await axios.get(`${apiBaseUrl}/users/authenticate`, {
      withCredentials: true,
    });
    console.log("data ", response.data);
    return response.data;
  } catch (error) {
    return { success: false };
  }
}
