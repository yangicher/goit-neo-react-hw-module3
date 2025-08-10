import ContactForm from './components/ContactForm/ContactForm';
import './App.css';

function App() {
  const onAddContact = data => {
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={onAddContact} />
    </>
  );
}

export default App;
