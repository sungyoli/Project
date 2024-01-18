//join.html(일반)

function join() {
    // 확인 메시지 표시
    var confirmJoin = confirm("회원가입 완료");

    // 확인이 되었다면
    if (confirmJoin) {
        // 일정 시간 후에 새 페이지로 이동
        setTimeout(function () {
            location.href = "../login/login.html";
        }, 1000); // 1000 밀리초(1초) 후에 이동하도록 설정
    }
}


//manageJoin.html(관리자)

function join() {
alert("회원가입 완료");
// 일정 시간 후에 새 페이지로 이동
setTimeout(function () {
    location.href = "../login/login.html";
}, 1000); // 1000 밀리초(1초) 후에 이동하도록 설정
}
