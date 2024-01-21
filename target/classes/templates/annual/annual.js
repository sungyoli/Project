/**
 * 
 */
 
function displayCurrentDate() {
	
	const now = new Date();
	const year = now.getFullYear();//현재연도
	const month = now.getMonth() + 1;//현재월 (int값은 0부터 시작하기 때문에 +1 해줘야함)
	const day = now.getDate();//현재 일

	const currentDate = `${year}년
						 ${month < 10 ? "0" : ""}${month}월
						 ${day < 10 ? "0" : ""}${day}일`;
		
	const dateDisplay = document.getElementById("dateDisplay");// 설정된 div를 지정
	dateDisplay.textContent = currentDate;// 해당 div에 text형식으로 출력
	}

function displayTime() {

	setInterval(()=>{//갱신
	
		const now = new Date();
		const hour = now.getHours();//현재 시간
		const minute = now.getMinutes();//현재 분
		const second = now.getSeconds();//현재 초
	
		const currentTime = `${hour < 10 ? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}:${second < 10 ? "0" : ""}${second}`;
							
		const timeDisplay = document.getElementById("timeDisplay");// 설정된 div를 지정
		timeDisplay.textContent = currentTime;// 해당 div에 text형식으로 출력
		
	},1000);// 갱신시간 1초
 }

displayCurrentDate();//선택된 화면에 출력
displayTime();//선택된 화면에 출력

window.onload = function () {
	
    const startButtonTime = localStorage.getItem("startTime");
    const endButtonTime = localStorage.getItem("endTime");

    if (startButtonTime) {
	
        document.getElementById("startTime").innerText = startButtonTime;
    }

    if (endButtonTime) {
	
        document.getElementById("endTime").innerText = endButtonTime;
    }
};