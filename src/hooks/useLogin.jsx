import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import querystring from "querystring";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const coreAPIURL = config.coreApiUrl + "login";
      const dietAPIURL = config.dietApiUrl + "signin";
      const gymAPIURL = config.gymApiUrl + "login";

      const dataForApiCore = querystring.stringify({
        // Menggunakan querystring untuk format application/x-www-form-urlencoded
        username: username,
        password: password,
      });

      // Membuat dua permintaan sign in secara bersamaan
      const [responseCore, responseDiet, responseGym] = await Promise.all([
        axios.post(coreAPIURL, dataForApiCore, {
          // Menggunakan dataForApi2 sebagai data
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Mengatur tipe konten
          },
        }),
        axios.post(dietAPIURL, {
          username: username,
          password: password,
        }),
        axios.post(gymAPIURL, {
          username: username,
          password: password,
        }),
      ]);
      console.log(responseCore, responseDiet, responseGym);
      // Handle respons dari kedua API sesuai kebutuhan aplikasi Anda
      if (
        responseCore.data.token ||
        responseDiet.data.access_token ||
        responseGym.data.access_token
      ) {
        // Pilih token dari respons yang berhasil (disesuaikan dengan respons API)
        const tokenCore = responseCore.data.access_token;
        const tokenDiet = responseDiet.data.token;
        const tokenGym = responseGym.data.access_token;
        const username = responseCore.data.username;

        // Simpan token dalam sessionStorage atau
        sessionStorage.setItem("tokenCore", tokenCore);
        sessionStorage.setItem("tokenDiet", tokenDiet);
        sessionStorage.setItem("tokenGym", tokenGym);
        sessionStorage.setItem("username", username);

        // update the authContext
        dispatch({ type: "LOGIN", payload: username });

        // Redirect ke halaman home
        navigate("/");
      } else {
        console.log(response1.data, response2.data);
        alert("Login gagal. Coba lagi.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError("Wrong username and password combination");
        } else {
          console.log(error);
          setError("Wrong username and password combination");
        }
      } else if (error.request) {
        setError("Your request has encountered an issue");
      } else {
        console.log(error);
        setError("There is an error, please try again");
      }
    }
  };

  return { login, isLoading, error };
};
