// import React from 'react';

import { ContactsForm } from './contactsForm/ContactsForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { Wrapper, Title, Heading } from './App.styled';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // });

  return (
    <>
      <Wrapper>
        <Heading>Phonebook</Heading>
        <ContactsForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Wrapper>
    </>
  );
};
