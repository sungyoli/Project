function handleCancelClick() {
    const result = confirm("취소 하시겠습니까?");
    if (result) {
      // [확인] 버튼을 클릭하면 true를 반환하고,
      window.location.href = "approval.html";
    } else {
      // [취소] 버튼을 클릭하면 false를 반환
    }
  }

  function handleRequestClick() {
    const result2 = confirm("결재요청 하시겠습니까?");
    if (result2) {
      // [확인] 버튼을 클릭하면 true를 반환하고,
      alert("요청 완료되었습니다.");
      window.location.href = "ReauestLeaveCompleted.html";
    } else {
      // [취소] 버튼을 클릭하면 false를 반환
      // alert("취소되었습니다");
    }
  }