import React from "react";
import Button from "./Button.js";
import Textbox from "./Textbox.js";

function Canva(props) {
  return (
    <div class='bg-[#FFFFFF]  rounded m-4 p-4'>
      <Textbox Title='Nome' />
      <Textbox Title='Password' />
      <Button Title='Entrar' />
    </div>
  );
}
export default Canva;
