function submitForm() {
    alert("등록되었습니다.");
    location.href = "boardList.html";
  }

  function save() {
    alert("임시저장되었습니다.");
  }

  function openOrgChartModal() {
    var modal = document.getElementById("addressBookModal");
    modal.style.display = "block";
  }

  function closeModal() {
    var modal = document.getElementById("addressBookModal");
    modal.style.display = "none";
  }