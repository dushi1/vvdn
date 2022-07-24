import React, { useEffect, useState } from "react";
import "./App.css";
import FormComponent from "./component/formInput";
import OptionComponent from "./component/optionComponent";

function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const numbers = /^[0-9]+$/;

  const resetForm = () => {
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setCity("");
    setState("");
    setZip("");
    setCarBrand("");
  };

  const handleChange = (field, obj) => {
    let err = null;
    switch (field) {
      case "name":
        setName(obj);
        err = /\d/.test(obj) ? "Numbers are not allowed" : null;
        setNameError(err);
        break;
      case "email":
        setEmail(obj);
        err = validEmailRegex.test(obj) ? null : "Email is not valid";
        setEmailError(err);
        break;
      case "phone":
        setPhone(obj);
        err = numbers.test(obj) ? null : "Only numbers are allowed.";
        setPhoneError(err);
        break;
      default:
        break;
    }
  };

  const sumbitForm = () => {
    if (name.length === 0) {
      setNameError("Name is required");
    }

    if (email.length === 0) {
      setEmailError("Email is required");
    }

    if (phone.length === 0) {
      setPhoneError("Phone is required");
    }

    if (
      !nameError &&
      name.length !== 0 &&
      !emailError &&
      email.length !== 0 &&
      !phoneError &&
      phone.length !== 0
    ) {
      fetch("/api/v1/submit/form-submit", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          address: address,
          city: city,
          state: state,
          zip: zip,
          carbrand: carBrand,
        }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((resp) => {
          if (resp.success === false) {
            alert("Form not submitted successfully.");
          } else {
            resetForm();
            alert("Form submitted successfully.");
          }
        })
        .catch((err) => {
          alert("Please recheck all the values.");
        });
    } else {
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/v1/data/get-data")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.data);
      })
      .catch((err) => {
        console.log("failed api");
        setData([]);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>VVDN PROJECT</p>
      </header>
      <p className="title">React Form</p>
      <FormComponent
        title="Name"
        value={name}
        type="text"
        onChange={(e) => handleChange("name", e.target.value)}
        error={nameError}
        mandatory={true}
      />
      <FormComponent
        title="Email"
        value={email}
        type="email"
        onChange={(e) => handleChange("email", e.target.value)}
        error={emailError}
        mandatory={true}
      />
      <FormComponent
        title="Phone"
        value={phone}
        type="text"
        maxLength={10}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={phoneError}
        mandatory={true}
      />
      <FormComponent
        title="Address"
        value={address}
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        multiline={true}
      />
      <FormComponent
        title="City"
        value={city}
        type="text"
        onChange={(e) => setCity(e.target.value)}
      />
      <FormComponent
        title="State"
        value={state}
        type="text"
        onChange={(e) => setState(e.target.value)}
      />
      <FormComponent
        title="Zip Code"
        value={zip}
        type="text"
        onChange={(e) => setZip(e.target.value)}
      />
      <OptionComponent
        title="Car Brand"
        data={data}
        onChange={(e) => setCarBrand(e.target.value)}
      />
      <button onClick={sumbitForm}>
        <h1>Submit</h1>
      </button>
    </div>
  );
}

export default App;
