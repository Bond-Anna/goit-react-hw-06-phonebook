import css from "./contacts.module.css";
export const ContactList = ({ contacts, onDeleteBtn }) => {
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
            onClick={() => onDeleteBtn(id)}
            className={css.contactBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
