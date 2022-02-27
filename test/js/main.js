

// // 삭제 아이콘 생성
// let taskList = document.getElementsByTagName("LI");
// let i;
// for (i = 0; i < taskList.length; i++) {
//   let span = document.createElement("SPAN"); //span 만들기
//   let iconClose = document.createTextNode("\u00D7"); //특수문자(텍스트) 추가
//   span.className = "close"; // span에 close라는 클래스명 붙이기
//   span.appendChild(iconClose); // span에 iconClose 넣기
//   taskList[i].appendChild(span); // taskList에 span 넣기
// }

init();

function init(){ //세팅
  document.querySelector('form').addEventListener('submit', addToDo); //form에서 submit되면 addToDo함수 실행
  document.getElementById('clear').addEventListener('click', clearTodoList); //clear클릭하면 clearTodoList 함수실행
  document.querySelector('ul').addEventListener('click', deleteOrCheck); //ul클릭하면 deleteOrCheck 함수 실행
}

function addToDo(e){ 
  e.preventDefault(); //form안의 submit버튼 눌러도 새로 실행하지 않게 해줌(출력값들이 남아있게)
  let toDoValue = document.querySelector('input');
  if(toDoValue.value !== '') //toDoValue(input)안의 값이 공백이 아니면=입력값이 있으면
  addTask(toDoValue.value); //값을 추가한다
  toDoValue.value = ''; // 입력창 비워준다
}

function addTask(value){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox"><label>${value}</label><span class="delet">x</span>`;
  ul.appendChild(li);
  document.querySelector('.todolist').style.dispaly = "block";
}

function deleteOrCheck(e){
  if(e.target.className == 'delet')
    deleteToDO(e);
    else {
      chechToDo(e);
    }
}

function deleteToDO(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

function clearTodoList(e){
  let ul = document.querySelector('ul').innerHTML = '';
}