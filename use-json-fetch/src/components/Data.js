import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";
import PropTypes from "prop-types";

export default function Data({ endpoint, title }) {
  const [data, error, loading] = useJsonFetch(
    `http://localhost:7070/${endpoint}`
  );

  return (
    <div>
      <span>
        {title}:{" "}
        {(loading && "Загрузка...") ||
          (data && data.status) ||
          (error && "Ошибка!")}
      </span>
    </div>
  );
}

Data.propTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
