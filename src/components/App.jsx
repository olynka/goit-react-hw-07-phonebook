import ContactList from './ContactList/ContactList';

import ContactForm from './Form/Form';
import Filter from './filter/filter';
import { Block, Totle } from './AppStyled';


export const App = () => {
  return (
  <>
      <Block>
        <Totle>Phonebook</Totle>
        <ContactForm  />
        <Filter />
    
      <ContactList/>
      
</Block>
     </>
  )
};





