'use strict';

// 삭제 아이콘 생성
let taskList = document.getElementsByTagName("LI");
let i;
for (i = 0; i < taskList.length; i++) {
  let span = document.createElement("SPAN"); //span 만들기
  let iconClose = document.createTextNode("\u00D7"); //특수문자(텍스트) 추가
  span.className = "close"; // span에 close라는 클래스명 붙이기
  span.appendChild(iconClose); // span에 iconClose 넣기
  taskList[i].appendChild(span); // taskList에 span 넣기
}



