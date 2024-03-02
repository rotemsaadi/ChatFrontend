import { useEffect, useState } from "react";
import { ContactItem } from "./ContactItem/ContactItem";
import { Input } from "./Input/index";
import "./contact-list.css";

export const ContactsList = () => {
  const [contacts, setContacts] = useState([
    "rotem",
    "tal",
    "or",
    "lital",
    "avi",
    "toy",
  ]);

  //   useEffect(() => {
  //     fetch("http://localhost:3000/contacts/")
  //       .then((response) => response.json())
  //       .then((contacts) => setContacts(contacts));
  //   }, []);

  return (
    <div className="container">
      <p className="p">Messages (30)</p>
      <div>
        <Input />
      </div>
      <div className="contacts-names">
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact}></ContactItem>
        ))}
      </div>
    </div>
  );
};
