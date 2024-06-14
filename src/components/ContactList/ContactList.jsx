import PropTypes from "prop-types";

export const ContactList = ({ filterContact }) => {
  const filteredContacts = filterContact();

  return (
    <ul>
      {filteredContacts.map((filteredContact) => (
        <li key={filteredContact.id}>
          {filteredContact.name}: {filteredContact.number}
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
