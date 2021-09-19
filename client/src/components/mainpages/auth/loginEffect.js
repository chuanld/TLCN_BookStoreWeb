//sdsđ
import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
function effect() {
  const signInButton = document.getElementById("signIn");
  const signUpButton = document.getElementById("signUp");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-activelg");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-activelg");
  });
  console.log(signUpButton);
}
