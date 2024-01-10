/**
 *
 */

function displayCurrentDate() {
  const now = new Date();
  const year = now.getFullYear(); //현재연도
  const month = now.getMonth() + 1; //현재월 (int값은 0부터 시작하기 때문에 +1 해줘야함)
  const day = now.getDate(); //현재 일

  const currentDate = `${year}년
						 ${month < 10 ? "0" : ""}${month}월
						 ${day < 10 ? "0" : ""}${day}일`;

  const dateDisplay = document.getElementById("dateDisplay"); // 설정된 div를 지정
  dateDisplay.textContent = currentDate; // 해당 div에 text형식으로 출력
}

function displayTime() {
  setInterval(() => {
    //갱신

    const now = new Date();
    const hour = now.getHours(); //현재 시간
    const minute = now.getMinutes(); //현재 분
    const second = now.getSeconds(); //현재 초

    const currentTime = `${hour < 10 ? "0" : ""}${hour}:${
      minute < 10 ? "0" : ""
    }${minute}:${second < 10 ? "0" : ""}${second}`;

    const timeDisplay = document.getElementById("timeDisplay"); // 설정된 div를 지정
    timeDisplay.textContent = currentTime; // 해당 div에 text형식으로 출력
  }, 1000); // 갱신시간 1초
}

displayCurrentDate(); //선택된 화면에 출력
displayTime(); //선택된 화면에 출력

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function displayCurrentTime() {
  let confirmation = confirm("출근도장을 찍을까요?");
  if (confirmation) {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // 시, 분, 초가 한 자리 숫자인 경우 앞에 0을 추가하여 두 자리로 만듦
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    let formattedTime = hours + ":" + minutes + ":" + seconds;

    // currentTime이라는 ID를 가진 div에 현재 시간을 표시
    document.getElementById("currentTime").innerText = formattedTime;
    let startBtn = document.getElementById("startBtn");
	startBtn.disabled = true;
	startBtn.classList.add("disabled")
	alert("출근했습니다.")
  }
}
function displayEndtime() {
  let confirmation = confirm("퇴근도장을 찍을까요?");
  if (confirmation) {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // 시, 분, 초가 한 자리 숫자인 경우 앞에 0을 추가하여 두 자리로 만듦
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    let formattedTime = hours + ":" + minutes + ":" + seconds;

    // currentTime이라는 ID를 가진 div에 현재 시간을 표시
    document.getElementById("endTime").innerText = formattedTime;
    let endBtn = document.getElementById("endBtn");
	endBtn.disabled = true;
	endBtn.classList.add("disabled");
	alert("퇴근입니다.")
  }
}
