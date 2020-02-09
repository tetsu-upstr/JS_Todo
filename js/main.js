// ボタンのIDを取得
  var btn = document.getElementById('btn');
  console.log(btn);

  // ボタンをクリックした時の処理
  btn.addEventListener('click', function() {

    // todoタスクを取得
    var task = document.getElementById('text-msg').value;
    console.log(task);

    // liリストを生成
    var taskList = document.createElement('li');
    taskList.innerHTML = task;
    
    // ulリスト内にタスクを表示
    var taskUl = document.getElementById('todo-list');
    taskUl.appendChild(taskList);

    

  });


