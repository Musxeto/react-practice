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
  
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const validateForm = () => {
      let valid = true;
      const newErrors = { ...errors };
  
      if (!formData.name.trim()) {
        valid = false;
        newErrors.name = 'Name is required';
      } else {
        newErrors.name = '';
      }
  
      if (!formData.email.trim()) {
        valid = false;
        newErrors.email = 'Email is required';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
          newErrors.email = 'Invalid email address provided';
          valid = false;
        } else {
          newErrors.email = '';
        }
      }
  
      if (!formData.contactNumber.trim()) {
        valid = false;
        newErrors.contactNumber = 'Contact Number is required';
      } else {
        newErrors.contactNumber = '';
      }
  
      return { valid, newErrors };
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { valid, newErrors } = validateForm();
  
      if (valid) {
        setErrors({
          name: '',
          email: '',
          contactNumber: '',
        });
        setSuccessMessage('Form Validated');
  
        // Clear success message after 3 seconds (3000 milliseconds)
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setSuccessMessage('');
        setErrorMessage('Please fill out all required fields');
        setErrors(newErrors);
      }
    };
  
    return (
      <div>
        <h1>Form with Validation</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Contact Number: </label>
          <input
            type="text"
            value={formData.contactNumber}
            onChange={(e) =>
              setFormData({ ...formData, contactNumber: e.target.value })
            }
          />
          {errors.contactNumber && <p>{errors.contactNumber}</p>}
        </div>

        <button type="submit" disabled={!validateForm()}>
          Submit
        </button>
      </form>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}

      {formData.name && <p>{formData.name}</p>}
      {formData.contactNumber && <p>{formData.contactNumber}</p>}
      {formData.email && <p>{formData.email}</p>}
    </div>
  );
}

export default FormValid;
