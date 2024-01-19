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

// 이메일
function selectEmail(ele){
    var $ele = $(ele);
    var $email2 = $('input[name=email2]');

    // '1'인 경우 직접입력
    if($ele.val() == "1"){
        $email2.attr('readonly', false);
        $email2.val('');
    } else {
        $email2.attr('readonly', true);
        $email2.val($ele.val());
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

//핸드폰 입력칸
$(".phone-input").keyup(function () {
    if (this.value.length == this.maxLength) {
    $(this).next(".phone-input").focus();
    }
});
 


