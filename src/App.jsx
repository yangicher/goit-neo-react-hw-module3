import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import { useState } from 'react';

function App() {
  const onAddContact = data => {
  };
  const onChangeSearchValue = evt => {
    setSearchValue(evt.target.value);
  };
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={onAddContact} />
      <SearchBox value={searchValue} handleChange={onChangeSearchValue} />
    </>
  );
}

export default App;
