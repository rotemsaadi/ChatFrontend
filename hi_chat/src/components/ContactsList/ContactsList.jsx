import { useEffect, useState } from "react";
import { ContactItem } from "./ContactItem/index";
import "./contact-list.css";

export const ContactsList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/contacts/")
      .then((response) => response.json())
      .then((contacts) => setContacts(contacts));
  }, []);

  return (
    <div className="container">
      <div className="contacts-names">
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact}></ContactItem>
        ))}
      </div>
    </div>
  );
};
