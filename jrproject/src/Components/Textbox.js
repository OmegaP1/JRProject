import React from "react";

function Button(props) {
  return (
    <div class='flex justify-center m-6 opacity-100'>
      <form class='bg-button text-white font-bold py-10 px-48 rounded-xl '>
        <input class='bg-transparent shadow rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder={props.Title} />
      </form>
    </div>
  );
}
export default Button;
