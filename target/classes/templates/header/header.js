const menu = document.querySelector(".sidebar");
const infoItems = document.querySelectorAll(".sidebar li a");

document.addEventListener('DOMContentLoaded',function(){

  menu.addEventListener('mouseenter', function(event) {
      const target = event.target;
    
      if (target.matches('.sidebar li') && !target.classList.contains('logo')) {
        menu.classList.add('barInfo');
      }
    });
    
    menu.addEventListener('mouseleave', function(event) {
      const target = event.target;
    
      if (target.matches('.sidebar li') && !target.classList.contains('logo')) {
        menu.classList.remove('barInfo');
      }
    });
})
function menuInfo() {
  menu.classList.toggle("barInfo"); // 단일 요소를 선택하기 위해 querySelector 사용
}



