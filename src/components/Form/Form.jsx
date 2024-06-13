import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./Form.module.scss";
import PropTypes from "prop-types";

export class Form extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  };
  state = {
    name: "",
  };

  handleNameChange = (ev) => {
    this.setState({
      name: ev.target.value,
    });
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { contacts } = this.props;
    this.setState((prev) => {
      const list = [...prev.contacts];
      list.push({ id: nanoid(), name: this.state.name });
    });
  };
  render() {
    const nameId = nanoid();
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={nameId} className={styles.label}>
          Name
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}></input>
        </label>
        <button type="submit" className={styles.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}
