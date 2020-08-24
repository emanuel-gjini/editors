import React from 'react';
import PropTypes from 'prop-types';
import styles from './Welcome.module.css';

const Welcome = () => (
  <div className={styles.Welcome} data-testid="Welcome">
    <h1>
      Hi I'm draftjs editor
    </h1>
  </div>
);

Welcome.propTypes = {};

Welcome.defaultProps = {};

export default Welcome;
