
fetch("../board/boardBar.html")
.then((response) => response.text())
.then((html) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const linkTags = tempDiv.querySelectorAll("link[href]");
  linkTags.forEach((linkTag) => {
    const href = linkTag.getAttribute("href");
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "../board/" + href); // 상대 경로로 수정
    document.head.appendChild(link);
  });

  const scriptTags = tempDiv.querySelectorAll("script[src]");
  scriptTags.forEach((scriptTag) => {
    const src = scriptTag.getAttribute("src");
    const script = document.createElement("script");
    script.setAttribute("src", "../board/" + src); // 상대 경로로 수정
    document.body.appendChild(script);
  });

  document.getElementById("leftMenu").innerHTML = html;
})
.catch((error) => {
  console.log("왼쪽메뉴 로딩 오류", error);
});

