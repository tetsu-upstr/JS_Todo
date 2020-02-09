// HTML読み込み後にイベントリスナーを発火させる
window.onload = function () {
  
  // ボタンのIDを取得
  var btn = document.getElementById('btn');

  // ボタンをクリックした時の処理
  btn.addEventListener('click', function() {

  // todoタスクを取得
  var task = document.getElementById('text-msg').value;

  // liリストを生成
  var taskList = document.createElement('li');

    taskList.innerHTML =
     '<input class="check-btn" type="checkbox" name="taskCheck">' + task;
     document.getElementById('text-msg').value = '';
     document.getElementById('text-msg').focus();
  
  
  // ulリスト内にタスクを表示
  var taskUl = document.getElementById('todo-list');
  taskUl.appendChild(taskList);

  });


  // チェックボックスをチェックしたら完了にする
  var check = document.querySelector('.check-btn');

  check.addEventListener('change', (event) => {
    var value = event.target.checked;
    console.log(value);
  });
};



  



  

 



