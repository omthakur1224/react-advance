import React from 'react';
import { useFormValidation } from '../hooks/FormValidataion';

// Custom hook for form validation

const RegistrationForm = () => {
    // Initial form state
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };
    const {
        formData,
        formErrors,
        handleInputChange,
        validateForm,
        setFormData
    } = useFormValidation(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit the form data
            alert("form submitted successfully")
            setFormData(initialState)
            console.log('Form data:', formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
            />
            {formErrors.firstName && <p>{formErrors.firstName}</p>}
            <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
            />
            {formErrors.lastName && <p>{formErrors.lastName}</p>}
            <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            {formErrors.email && <p>{formErrors.email}</p>}
            <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
            />
            {formErrors.password && <p>{formErrors.password}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
