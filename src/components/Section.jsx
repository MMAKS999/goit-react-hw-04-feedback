import PropTypes from 'prop-types';

export const Section = ({ nameSection, children }) => (
  <div>
    <h2>{nameSection}</h2>
    {children}
  </div>
);

Section.propTypes = {
  nameSection: PropTypes.string.isRequired,
  children: PropTypes.node,
};
