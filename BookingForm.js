// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form id="booking-form" onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <fieldset>
                <legend>Reservation Details</legend>
                <label htmlFor="res-date">Choose date</label>
                <input 
                    type="date" 
                    id="res-date" 
                    name="date" 
                    required 
                    value={formData.date} 
                    onChange={handleChange} 
                />
                <label htmlFor="res-time">Choose time</label>
                <select 
                    id="res-time" 
                    name="time" 
                    required 
                    value={formData.time} 
                    onChange={handleChange}
                >
                    <option value="">Select a time</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input 
                    type="number" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    name="guests" 
                    required 
                    value={formData.guests} 
                    onChange={handleChange} 
                />
                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion" 
                    name="occasion" 
                    value={formData.occasion} 
                    onChange={handleChange}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </fieldset>
            <input 
                type="submit" 
                value="Make Your reservation" 
            />
        </form>
    );
};

export default BookingForm;
