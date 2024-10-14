import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
    role,
  }) => {
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      role,
    });
    if (!success) {
      return;
    }
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
          role,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //local storage
      localStorage.setItem("chat-user", JSON.stringify(data));

      //context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};
export default useSignup;

function handleInputError({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
  role,
}) {
  if (
    !fullName ||
    !username ||
    !password ||
    !confirmPassword ||
    !gender ||
    !role
  ) {
    toast.error("Please fill all fields!");
    return false;
  }

  if (password != confirmPassword) {
    toast.error("passwords do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("password must be at least 6 characters!");
    return false;
  }
  return true;
}
