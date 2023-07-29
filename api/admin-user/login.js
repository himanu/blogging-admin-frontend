import axios from "axios";
import apiBaseUrl from "../../utils/apiBaseUrl";

export default async function doLogin(email, password) {
  try {
    const { data } = await axios.put(
      `${apiBaseUrl}/users/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    console.log("data ", data);
    return data;
  } catch (err) {
    console.log("Error ", err);
    return {
      success: false,
    };
  }
}
