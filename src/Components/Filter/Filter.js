import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles["filter"]}>
      <label className={styles["filter-lable"]}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
          className={styles["filter-input"]}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
