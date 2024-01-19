function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

fetch("../Approval/modal.html")
.then((response) => response.text())
.then((html) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const linkTags = tempDiv.querySelectorAll("link[href]");
  linkTags.forEach((linkTag) => {
    const href = linkTag.getAttribute("href");
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "../Approval/modal.html" + href); // 상대 경로로 수정
    document.head.appendChild(link);
  });

  const scriptTags = tempDiv.querySelectorAll("script[src]");
  scriptTags.forEach((scriptTag) => {
    const src = scriptTag.getAttribute("src");
    const script = document.createElement("script");
    script.setAttribute("src", "../Approval/modal.html" + src); // 상대 경로로 수정
    document.body.appendChild(script);
  });

  document.getElementById("modalBtn").innerHTML = html;
})
.catch((error) => {
  console.log("결제모달 로딩 오류", error);
});

