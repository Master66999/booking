// Main.js or wherever your main logic is
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { submitAPI } from './api'; // Add this import if submitAPI is defined elsewhere
// If not, define a placeholder below:
// const submitAPI = async (formData) => true; // Uncomment if needed

const Main = () => {
    const navigate = useNavigate();

    const submitForm = async (formData) => {
        const response = await submitAPI(formData); // Assuming submitAPI is defined
        if (response) {
            navigate('/confirmed');
        }
    };

    return (
        <div>
            <BookingForm onSubmit={submitForm} />
        </div>
    );
};

export default Main;
