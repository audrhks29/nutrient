import React, { memo } from 'react';
import { AiOutlineClose } from "react-icons/ai";
const BtnClose = memo((props) => {
  return (
    <div
      className="closeBox"
      style={{
        position: "absolute",
        top: props.top || 0,
        right: props.right || 0,
        cursor: "pointer"
      }}
      onClick={props.func}
    >
      <i><AiOutlineClose /></i>
    </div>
  );
});

export default BtnClose;