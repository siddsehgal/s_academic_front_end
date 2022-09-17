import React from "react";
import styles from "../dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ClassComponent({ data, setOpen, setClassId }) {
  const { _id, title, order } = data;
  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <div
      className={`${styles.class_div}`}
      onClick={(e) => {
        navigate(`/class/${_id}`);
      }}
    >
      <p>{title}</p>
      <button
        className={`${styles.edit_button}`}
        onClick={(e) => {
          e.stopPropagation();
          setClassId(data._id);
          setOpen((prev) => !prev);
        }}
      >
        {" "}
        Edit
      </button>
    </div>
  );
}
