import React, { useState } from 'react';

function FormValid() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    contactNumber: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      valid = false;
      newErrors.name = 'Name is required';
    } else {
      newErrors.name = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Invalid email address provided';
      valid = false;
    } else if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.contactNumber.trim()) {
      valid = false;
      newErrors.contactNumber = 'Contact Number is required';
    } else {
      newErrors.contactNumber = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setErrors({
        name: '',
        email: '',
        contactNumber: '',
      });
      setSuccessMessage('Form Validated');
    } else {
      setSuccessMessage('');
      setErrorMessage('Form Not Validated');
    }
  }

  return (
    <div>
      <h1>Form with Validation</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label>Email: </label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label>Contact Number: </label>
        <input
          type="text"
          value={formData.contactNumber}
          onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
        />
        <button type="submit" disabled={!validateForm()}>
          Submit
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errors.name && <p>{errors.name}</p>}
      {errors.email && <p>{errors.email}</p>}
      {errors.contactNumber && <p>{errors.contactNumber}</p>}
    </div>
  );
}

export default FormValid;
