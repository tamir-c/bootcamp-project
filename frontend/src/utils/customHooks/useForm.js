import { useState } from "react";

const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    formData,
    handleInputChange,
  };
};

export default useForm;
