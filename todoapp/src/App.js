// elementタグ関数をimport
import { element } from "./view/html-util.js";

export class App {
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");
    

    formElement.addEventListener("submit", (event) => {
      // submitの本来の動作を止める（URLに送信されリロードするformの動き）
      event.preventDefault();
      console.log(`入力欄の値： ${inputElement.value}`);
    });
  }
}