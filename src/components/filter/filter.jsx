import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import css from "./filter.module.css";

const Filter = ({ onChange }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="name"
        // value={value}
        onChange={onChange}
        className={css.filterInput}
      />
    </label>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(contactsActions.contactsFilter(event.currentTarget.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
