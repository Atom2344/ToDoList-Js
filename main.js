let table = document.getElementById('table');
let addList = document.getElementById('addList');
let reset = document.getElementById('reset');
const headContents = ['やること', '時間(x分後)', '完了'];

//見出し＋初め3行
function init() {
  let tr = document.createElement('tr');
  for (let h = 0; h < headContents.length; h++) {
    let th = document.createElement('th');
    th.textContent = headContents[h];
    tr.appendChild(th);
  }
  table.appendChild(tr);
  for (let p = 0; p < 3; p++) {
    todo();
  }
}
init();

//行を生成
function todo() {
  let timerId = null;
  let tr = document.createElement('tr');
  for (let d = 0; d < headContents.length; d++) {
    let td = document.createElement('td');
    if (d === 0) {
      let userTodo = document.createElement('input');
      userTodo.type = 'text';
      td.appendChild(userTodo);
    } else if (d === 1) {
      let userTime = document.createElement('input');
      userTime.type = 'number';
      let buttonStart = document.createElement('button');
      buttonStart.textContent = '開始';
      buttonStart.addEventListener('click', () => {
        buttonStart.disabled = true;
        let time = userTime.value;
        timerId = setTimeout(
          () => {
            alert('時間です');
          },
          time * 60 * 1000,
        );
      });

      td.appendChild(userTime);
      td.appendChild(buttonStart);
    } else {
      let userCheck = document.createElement('input');
      userCheck.type = 'checkbox';
      userCheck.addEventListener('change', () => {
        if (timerId !== null) {
          clearTimeout(timerId);
          timerId = null;
          alert('タイマー停止');
          userCheck.disabled = true;
        }
      });
      td.appendChild(userCheck);
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

addList.addEventListener('click', () => {
  todo();
});

reset.addEventListener('click', () => {
  table.innerHTML = '';
  init();
});
