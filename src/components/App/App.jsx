import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchFilter from '../SearchFilter/SearchFilter';
import {Container} from '../Container/Container';


const App = () => {
  
  return ( 

    <Container>

      <h2>Phonebook</h2>
      <ContactForm />

      <SearchFilter />

      <ContactList />

    </Container>
  )
}

export default App;