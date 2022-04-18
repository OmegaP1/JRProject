import React from "react";
import Button from "./Button.js";
import Textbox from "./Textbox.js";
import Title from "./Title.js";

function Canva(props) {
  return (
    <div class='bg-[#FFFFFF]/50  rounded m-4 p-4'>
      <Title Tile='Titulo' />
      <Textbox Title='Nome' />
      <Textbox Title='Password' />
      <Button Title='Entrar' />
    </div>
  );
}
export default Canva;
