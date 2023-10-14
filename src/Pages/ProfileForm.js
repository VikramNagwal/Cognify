import React, { useState } from 'react';
// import './ProfileForm.css'; 

// const ProfileForm = ({ preFilledValues, userType }) => {
const ProfileForm = () => {
//   const [firstName, setFirstName] = useState(preFilledValues.firstName || '');
//   const [lastName, setLastName] = useState(preFilledValues.lastName || '');
//   const [email, setEmail] = useState(preFilledValues.email || '');
//   const [dob, setDob] = useState(preFilledValues.dob || '');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [description, setDescription] = useState('');
//   const [workPhone, setWorkPhone] = useState('');
//   const [url, setUrl] = useState('');
//   const [domains, setDomains] = useState('');
//   const [education, setEducation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add code to send the form data to a server
    // For demonstration purposes, we'll just log the data to the console
    // console.log({
    //   firstName,
    //   lastName,
    //   email,
    //   dob,
    //   phone,
    //   address,
    //   photo,
    //   description,
    //   workPhone,
    //   url,
    //   domains,
    //   education,
    // });

    alert('Profile updated successfully!');
  };

  return (
    <div className="container">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
       
        <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        // value={firstName}
        // onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your first name"
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        // value={lastName}
        // onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your last name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        // value={email}
        placeholder="Enter your email"
        disabled
      />

      <label htmlFor="dob">Date of Birth</label>
      <input
        type="date"
        id="dob"
        // value={dob}
        // onChange={(e) => setDob(e.target.value)}
        required
      />

        {/* Additional fields based on user type */}
        {/* {userType === 1 && (
          <>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              // value={phone}
              // onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about yourself"
            />
          </>
        )}

        {userType === 2 && (
          <>
            <label htmlFor="workPhone">Work Phone</label>
            <input
              type="text"
              id="workPhone"
              // value={workPhone}
              // onChange={(e) => setWorkPhone(e.target.value)}
              placeholder="Enter your work phone number"
            />

            <label htmlFor="url">URL</label>
            <input
              type="text"
              id="url"
              // value={url}
              // onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL"
            />

            <label htmlFor="domains">Domains</label>
            <input
              type="text"
              id="domains"
              // value={domains}
              // onChange={(e) => setDomains(e.target.value)}
              placeholder="Enter your domains"
            />

            <label htmlFor="education">Education</label>
            <input
              type="text"
              id="education"
              // value={education}
              // onChange={(e) => setEducation(e.target.value)}
              placeholder="Enter your education details"
            />
          </>
        )}

        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          // onChange={(e) => setPhoto(e.target.files[0])}
        /> */}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileForm;
