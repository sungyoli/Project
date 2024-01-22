<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../../templates/header/header.css" />
    <script
      src="https://kit.fontawesome.com/67a1f076db.js"
      crossorigin="anonymous"
    ></script>
    <title>header</title>
  </head>
  <body>
    <div class="sidebar">
      <ul>
        <li class="logo" onclick="menuInfo()">
          <a href="#">
            <span class="icon"><ion-icon name="menu-outline"></ion-icon></span>
            <span class="text"></span>
          </a>
        </li>
        <li>
          <a href="../main/index.html">
            <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
            <span class="text">홈</span>
          </a>
        </li>
        <li>
          <a href="../mail/sendMailBox.html">
            <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
            <span class="text">메일</span>
          </a>
        </li>
        <li>
          <a href="../board/boardList.html">
            <span class="icon"><ion-icon name="list-outline"></ion-icon></span>
            <span class="text">게시판</span>
          </a>
        </li>
        <li>
          <a href="../calender/calendar.html">
            <span class="icon"
              ><ion-icon name="calendar-clear-outline"></ion-icon
            ></span>
            <span class="text">캘린더</span>
          </a>
        </li>
        <li>
          <a href="../Approval/approval.html">
            <span class="icon"
              ><ion-icon name="document-text-outline"></ion-icon
            ></span>
            <span class="text">전자결재</span>
          </a>
        </li>
        <li>
          <a href="../status/status.html">
            <span class="icon"
              ><ion-icon name="bag-remove-outline"></ion-icon
            ></span>
            <span class="text">근태관리</span>
          </a>
        </li>
        <li>
          <a href="../annual/annual.html">
            <span class="icon"><ion-icon name="leaf-outline"></ion-icon></span>
            <span class="text">연차관리</span>
          </a>
        </li>
        <li class="bottom">
          <a href="#">
            <span class="icon"
              ><ion-icon name="people-outline"></ion-icon
            ></span>
            <span class="text">조직도</span>
          </a>
        </li>
      </ul>
    </div>
    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>
    <script src="../../templates/header/header.js"></script>
    <!-- <script type="module" src="../importJS/OCIpt.js"></script> -->
  </body>
</html>
