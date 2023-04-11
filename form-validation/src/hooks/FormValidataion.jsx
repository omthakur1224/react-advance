import { useState } from "react";

export const useFormValidation = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };
    const validate = (formData) => {
        const errors = {};
        //validation rules
        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        return errors;
    };

    const validateForm = () => {
        const errors = validate(formData);
        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
        if (Object.keys(errors).length === 0) return (true)
    };
    return {
        formData,
        formErrors,
        isFormValid,
        handleInputChange,
        validateForm,
        setFormData
    };
};
