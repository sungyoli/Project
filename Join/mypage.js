//mypage1.html(마이페이지 일반)

//파일 이미지

document.addEventListener("DOMContentLoaded", function () {
document
    .getElementById("inputImage")
    .addEventListener("change", function () {
    var selectedFile = this.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("previewImage").src = e.target.result;
        document.getElementById("previewImage").style.display = "block";
    };

    reader.readAsDataURL(selectedFile);
    });

});


// 우편번호 찾기

function execDaumPostcode() {
    new daum.Postcode({
      oncomplete: function (data) {
        document.getElementById('zip-code').value = data.zonecode;
        document.getElementById('address-1').value = data.address;
        document.getElementById('address-1-1').value = data.jibunAddress;
        document.getElementById('address-2').focus();
      }
    }).open();
  }

    function execDaumPostcodeReset() {
    document.getElementById('zip-code').value = null;
    document.getElementById('address-1').value = null;
    document.getElementById('address-1-1').value = null;
    document.getElementById('address-2').value = null;
    }

 
    //저장 버튼 누른후
    function come() {
        alert("저장되었습니다.");
      }

    //mypage3_com.html(마이페이지 관리자)

    //파일 이미지
    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("inputImage").addEventListener("change", function () {
        var selectedFile = this.files[0];
        var reader = new FileReader();

        reader.onload = function (e) {
        document.getElementById("previewImage").src = e.target.result;
        document.getElementById("previewImage").style.display = "block";
        };

        reader.readAsDataURL(selectedFile);
        });
    });

    // 우편번호 찾기

    function execDaumPostcode() {
        new daum.Postcode( {
          oncomplete: function( data ) {
            document.getElementById( 'zip-code' ).value = data.zonecode;
            document.getElementById( 'address-1' ).value = data.address;
            document.getElementById( 'address-1-1' ).value = data.jibunAddress;
            document.getElementById( 'address-2' ).focus();
          }
        } ).open();
      }
      function execDaumPostcodeReset() {
        document.getElementById( 'zip-code' ).value = null;
        document.getElementById( 'address-1' ).value = null;
        document.getElementById( 'address-1-1' ).value = null;
        document.getElementById( 'address-2' ).value = null;
      }

    //저장 버튼 누른후
    
    function come() {
      alert("저장되었습니다.");
    }
 

    // 벨 아이콘 눌렀을때
    function navigateToNotificationPage() {
    // 새로운 페이지 URL로 이동
    window.location.href = "mypage4.html";
    }

    //mypage2.html(알림창)

    //아코디언 효과
      function toggleAccordion(accordionId) {
        var accordionBody = document.getElementById(accordionId);
        accordionBody.style.display =
            accordionBody.style.display === "none" ? "block" : "none";
        }


    // 벨 아이콘 눌렀을때
        function navigateToNotificationPage() {
        // 새로운 페이지 URL로 이동
            window.location.href = "mypage4.html";
        }

        //저장 버튼 누르고 모달 창
    document.addEventListener("DOMContentLoaded", function () {
        // 모달 열기 함수
        function openModal(btnText) {
            var modal = document.getElementById("myModal");
            var modalText = document.getElementById("modalText");
    
        // 모달에 버튼 텍스트 추가
        modalText.textContent = "" + btnText;
    
        // 모달 표시
        modal.style.display = "block";
        }
    
        // 모달 닫기 함수
        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
    
        // 모달 외부를 클릭하면 모달이 닫히도록
        window.onclick = function (event) {
            var modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    });

 

        
   

    



