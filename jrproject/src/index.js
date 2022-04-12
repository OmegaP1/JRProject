import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div class="justify-self-center">
      <div class="mb-10 md:flex my-8 max-w-[44%] mx-auto"><img class="content-center" src="images/Seta.svg"></img></div>
      <div class="grid grid-cols-3 gap-10 ml-52 mr-52 mb-32">
        <div class="h-full"><img src="images/Lisboa.svg"></img></div>
        <div class="h-full"><img src="images/Londres.svg"></img></div>
        <div class="h-full"><img src="images/SaoFrancisco.svg"></img></div>
      </div>

      <div class="bg-[#4d637ee8] cursor-pointer max-w-[6%] mx-auto hover:bg-[#506886] text-white text-center py-2 px-4 rounded-full"><a><button>ENTRAR</button></a></div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
