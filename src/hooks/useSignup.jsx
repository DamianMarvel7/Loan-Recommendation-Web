import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import axios from "axios";

export const useSignup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const authen = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const coreAPIURL = config.coreApiUrl + "register";
      const dietAPIURL = config.dietApiUrl + "register";
      const gymAPIURL = config.gymApiUrl + "signup";
      // Membuat dua permintaan registrasi secara bersamaan
      const [responseCore, responseDiet, responseGym] = await Promise.all([
        axios.post(coreAPIURL, {
          username: username,
          password: password,
        }),
        axios.post(dietAPIURL, {
          username: username,
          password: password,
        }),
        axios.post(gymAPIURL, {
          username: username,
          password: password,
          role: "user",
        }),
      ]);

      // Handle respons dari kedua API sesuai kebutuhan aplikasi Anda
      if (
        responseCore.data.message &&
        responseDiet.data.username &&
        responseGym.data.username
      ) {
        alert("Registrasi berhasil!!!");
        navigate("/login");
      } else {
        console.log(responseCore.data, responseGym.data, responseDiet.data);
        alert("Registrasi gagal. Coba lagi.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          setError("Username sudah digunakan. Silakan pilih username lain.");
        } else if (error.response.status === 400) {
          setError("Username sudah digunakan. Silakan pilih username lain.");
        } else {
          console.log(error);
          setError("Terjadi kesalahan. Silakan coba lagi.");
        }
      } else if (error.request) {
        console.log(error);
        setError("Terjadi kesalahan dalam mengirim permintaan.");
      } else {
        console.log(error);
        setError("Terjadi kesalahan. Silakan coba lagi.");
      }
    }
  };

  return { authen, isLoading, error };
};
