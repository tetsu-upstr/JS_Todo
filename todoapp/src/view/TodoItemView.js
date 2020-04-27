import { element } from "./html-util.js";

export class TodoItemView {
  /**
   * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
   * @param {TodoItemModel} todoItem 
   * @param {function({id:string, completed:boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:string})} onDeleteTodo 削除ボタンの更新イベントリスナー
   * @returns {Element}
   */
  createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
    // 完了済みならchecked属性をつけ、未完了ならchecked属性を外す
    // input要素にはckeckboxクラスをつける
    const todoItemElement = todoItem.completed
      ? element`<li><input type="checkbox" class="checkbox" checked><s>${todoItem.title}</s><button class="delete">x</button></input></li>`
      : element`<li><input type="checkbox" class="checkbox">${todoItem.title}<button class="delete">x</button></input></li>`;

    // チェックボックスがトグルしたときのイベントにリスナー関数を登録
    const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
    inputCheckboxElement.addEventListener("change", () => {
      // 指定したTodoアイテムの完了状態を反転させる（コールバック関数に変更）
      onUpdateTodo({
          id: todoItem.id,
          completed: !todoItem.completed
      });
    });
    // 削除ボタン(x)がクリックされたときにTodoListModeleからアイテムを削除する
    const deleteButtonElement = todoItemElement.querySelector(".delete");
    deleteButtonElement.addEventListener("click", () => {
      // コールバック関数に変更
      onDeleteTodo({
          id: todoItem.id
      });
    });
    // 作成したTodoアイテムのHTML要素を返す
    return todoItemElement;
  }
}