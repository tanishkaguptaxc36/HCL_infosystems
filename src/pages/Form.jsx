import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    phone: '',
    country: '',
    jobTitle: '',
    message: '',
    file: null,
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const validate = () => {
    let temp = {};
    if (!formData.fullName) temp.fullName = 'Full Name is required.';
    if (!formData.email) temp.email = 'Email is required.';
    if (!formData.country) temp.country = 'Country is required.';
    if (!formData.jobTitle) temp.jobTitle = 'Job Title is required.';
    if (!formData.message) temp.message = 'Message is required.';
    if (!formData.agree) temp.agree = 'You must agree to the terms.';
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log(formData);
    // Add actual form submission logic here
  };

  return (
    <form className="max-w-2xl mx-auto bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">To request more information about our products and services, please complete the form below.</h2>

      <div className="grid grid-cols-1 gap-4">
        <input name="fullName" placeholder="Full Name *" className="p-3 bg-gray-100 rounded" value={formData.fullName} onChange={handleChange} />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

        <input name="email" placeholder="Business Email Address *" className="p-3 bg-gray-100 rounded" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input name="organization" placeholder="Organization/ Institution" className="p-3 bg-gray-100 rounded" value={formData.organization} onChange={handleChange} />

        <input name="phone" placeholder="Phone/ Mobile" className="p-3 bg-gray-100 rounded" value={formData.phone} onChange={handleChange} />

        <select name="country" className="p-3 bg-gray-100 rounded" value={formData.country} onChange={handleChange}>
          <option value="">Country *</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          {/* Add more countries as needed */}
        </select>
        {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

        <select name="jobTitle" className="p-3 bg-gray-100 rounded" value={formData.jobTitle} onChange={handleChange}>
          <option value="">Job Title *</option>
          <option value="Student">Student</option>
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
          {/* Add more job titles as needed */}
        </select>
        {errors.jobTitle && <p className="text-red-500 text-sm">Job Title field is required.</p>}

        <textarea
          name="message"
          placeholder="How can we help you? *"
          className="p-3 bg-gray-100 rounded resize-none"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <div>
          <label className="block mb-1">Upload your file</label>
          <input type="file" name="file" onChange={handleChange} className="block w-full" />
        </div>

        <label className="flex items-center">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="mr-2" />
          I have read HCLTech’s <a href="#" className="text-blue-600 underline ml-1">Privacy Statement</a> and agree to the <a href="#" className="text-blue-600 underline">terms of use</a>.*
        </label>
        {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

        <button type="submit" className="bg-purple-700 text-white py-2 rounded hover:bg-purple-800">Submit</button>
        <p className="text-sm text-gray-500 mt-2">We will treat any information you submit with us as confidential.</p>
      </div>
    </form>
  );
};

export default Form;
