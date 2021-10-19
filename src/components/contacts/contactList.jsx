// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { connect, useSelector } from "react-redux";
import { filtredContacts } from "../../redux/contacts/contacts-selectors";
import contactsActions from "../../redux/contacts/contacts-actions";
import css from "./contacts.module.css";

export default function ContactList() {
  const contacts = useSelector(filtredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <div className={css.contact}>
            <span className={css.marker}></span>
            <span className={css.contactName}>{name}:</span>
            <span className={css.contactNumber}>{number}</span>
          </div>

          <button
            type="button"
            onClick={() => dispatch(contactsActions.deleteContact(id))}
            className={css.contactBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteBtn: PropTypes.func.isRequired,
// };

// const filtredContacts = (allContacts, filter) => {
//   const lowFilter = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(lowFilter)
//   );
// };

// const mapStateToProps = state => {
//   const { items, filter } = state.contacts;

//   return { contacts: filtredContacts(items, filter) };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteBtn: id => dispatch(contactsActions.deleteContact(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
