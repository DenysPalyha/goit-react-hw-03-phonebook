import React, { Component } from "react";
import styles from "./ContactForm.module.scss";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChage = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  hendleSubmit = (e) => {
    e.preventDefault();
    this.props.onContactsAdd({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.hendleSubmit} className={styles["contact-form"]}>
        <lable className={styles["form-lable"]}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChage}
            className={styles["form-input"]}
          />
        </lable>
        <lable className={styles["form-lable"]}>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChage}
            className={styles["form-input"]}
          />
        </lable>
        <button className={styles["form-button"]} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
