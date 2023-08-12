import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import ContactCard from "./components/ContactCard";


function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(
    () => {
      axios.get("https://randomuser.me/api?results=25").then(({ data }) => {
        setContacts(data.results);
      });
    },
    [
      /* Leave Empty to Execute Once */
    ]
  );

  return (
    <div className="App">
      <div>
        <ol>
          {contacts.map((contact, index) => {
            return (
              <ContactCard
                key={index}
                name={contact.name.first}
                picture={contact.picture.medium}
                email={contact.email}
                phone={contact.phone}
              />
            );
          })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
