import React from 'react'
import COLOR from "constants/color";
const ElementHomeMethod = (props,ref) => {
    return (
      <div
      ref={ref}
        style={{
          height: "100vh",
          background:
            "linear-gradient(180deg, rgba(143,166,225,1) 16%, rgba(218,237,249,1) 100%)",
        }}
      ></div>
    );
}
export default React.forwardRef(ElementHomeMethod);