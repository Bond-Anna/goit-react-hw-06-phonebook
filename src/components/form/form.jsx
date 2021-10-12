import { Component } from "react";
import css from "./form.module.css";

export class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  onChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className={css.form}>
        <label className={css.labelField}>
          <span className={css.label}>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onChange}
            className={css.input}
          />
        </label>
        <label className={css.labelField}>
          <span className={css.label}>Number</span>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
