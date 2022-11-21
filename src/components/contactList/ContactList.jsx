// import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';
import { ContactBook, ContactItem, ButtonDels } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContact,
  getFilter,
  deleteContact,
} from '../../Redux/contactsSlice';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  return (
    <ContactBook>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <p>
                {name}: {number}
              </p>
              <ButtonDels
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <AiOutlineDelete />
              </ButtonDels>
            </ContactItem>
          );
        })}
    </ContactBook>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   filter: PropTypes.string,
//   deleteContact: PropTypes.func,
// };
