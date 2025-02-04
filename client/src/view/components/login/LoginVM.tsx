// Import necessary dependencies
import { useState } from "react";

// Define the interface for form data
interface LoginFormData {
  username: string;
  password: string;
}

// Custom hook for managing login and registration logic
const useLoginViewModel = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return true; // Login successful
      }
      return false; // Login failed
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const handleRegister = async (): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return true; // Registration successful
      }
      return false; // Registration failed
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  };

  return {
    formData,
    handleInputChange,
    handleLogin,
    handleRegister,
  };
};

export default useLoginViewModel;
