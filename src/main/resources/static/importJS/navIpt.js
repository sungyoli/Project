fetch("../nav/nav.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch nav.html");
    }
    return response.text();
  })
  .then((html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // 상대 경로 수정
    const linkTags = tempDiv.querySelectorAll("link[href]");
    linkTags.forEach((linkTag) => {
      const href = linkTag.getAttribute("href");
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `../nav/${href}`;
      document.head.appendChild(link);
    });

    // 상대 경로 수정
    const scriptTags = tempDiv.querySelectorAll("script[src]");
    scriptTags.forEach((scriptTag) => {
      const src = scriptTag.getAttribute("src");
      const script = document.createElement("script");
      script.src = `../nav/${src}`;
      document.head.appendChild(script, scriptTag);
    });

    // 요소가 이미 존재하는지 확인
    const navElement = document.getElementById("nav");
    if (navElement) {
      navElement.innerHTML = html;
    } else {
      console.error("Element with id 'nav' not found");
    }
  })
  .catch((error) => {
    console.error("Error loading nav:", error);
  });
