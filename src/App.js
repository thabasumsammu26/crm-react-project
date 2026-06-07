import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const addCustomer = () => {
    if (!name || !email) return;

    const newCustomer = {
      id: Date.now(),
      name,
      email,
      lead: "New Lead",
      reminder: "Follow Up",
      activity: "Customer Added",
    };

    setCustomers([...customers, newCustomer]);
    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1>CRM Dashboard</h1>

      <h2>Add Customer</h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={addCustomer} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <hr />

      <h2>Customer Database</h2>
{customers.map((c) => (
  <div className="card" key={c.id}>
    <p>
      <b>{c.name}</b> - {c.email}
    </p>
  </div>
))}

      <hr />

      <h2>Lead Tracking</h2>
      {customers.map((c) => (
        <p key={c.id}>{c.name} - {c.lead}</p>
      ))}

      <hr />

      <h2>Follow-Up Reminders</h2>
      {customers.map((c) => (
        <p key={c.id}>{c.name} - {c.reminder}</p>
      ))}

      <hr />

      <h2>Sales Pipeline</h2>
      {customers.map((c) => (
        <p key={c.id}>
          {c.name} → Prospect → Negotiation → Closed
        </p>
      ))}

      <hr />

      <h2>Activity History</h2>
      {customers.map((c) => (
        <p key={c.id}>{c.name} - {c.activity}</p>
      ))}
    </div>
  );
}

export default App;