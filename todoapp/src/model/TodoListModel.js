import { EventEmitter } from "../EventEmitter.js";
import { TodoItemModel } from "./TodoItemModel.js";

export class TodoListModel extends EventEmitter {
  
  /**
   * @param {TodoItemModel[]} [items] 初期アイテム一覧（デフォルトは空の配列） 
   */
  constructor(items = []) {
    super();
    this.items = items;
  }

  /**
   * TodoItemの合計個数を返す
   * @returns {number}
   */
  getTotalCount() {
    return this.items.length;
  }

   /**
   * 表示できるTodoItemの配列を返す
   * @returns {TodoItemModel[]}
   */
  getTodoItems() {
    return this.items;
  }

  /**
   * Todolistの状態が更新された時に呼び出されるリスナー関数を登録する
   * @param {Function} listener 
   */
  onChange(listener) {
    this.addEventlistener("change", listener);
  }

  emitChange() {
    this.
  }

}