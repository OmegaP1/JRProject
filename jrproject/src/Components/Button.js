import React from "react";

function Button(props) {
  return (
    <div class='align-middle flex justify-center m-6 opacity-100'>
      <a>
        <button class='bg-[#324152] hover:bg-button_hover text-white font-bold py-4 px-20 rounded-xl '>{props.Title} </button>
      </a>
    </div>
  );
}
export default Button;
