let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

function generateCalendar(year, month) {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];

  for (let i = 0; i < days.length; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = days[i];
    calendar.appendChild(dayElement);
  }

  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDayElement = document.createElement("div");
    calendar.appendChild(emptyDayElement);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day-number");
    dayElement.textContent = day;
    dayElement.setAttribute("data-day", day);
    dayElement.setAttribute("data-week", getWeek(year, month, day));
    dayElement.setAttribute("data-month", month);

    dayElement.addEventListener("mouseenter", () => showButton(dayElement));
    dayElement.addEventListener("mouseleave", () => hideButton(dayElement));

    calendar.appendChild(dayElement);
  }
}

function getWeek(year, month, day) {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const offset = (firstDayOfMonth + day - 1) % 7;
  return Math.floor((firstDayOfMonth + day - 1 - offset) / 7) + 1;
}

function displayMonthYear() {
  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const currentMonthYear = document.getElementById("currentMonthYear");
  currentMonthYear.textContent = `${currentYear}년 ${monthNames[currentMonth]}`;
}

function updateCalendar() {
  generateCalendar(currentYear, currentMonth);
  displayMonthYear();
}

function prevMonth() {
  currentMonth -= 1;
  if (currentMonth < 0) {
    currentYear -= 1;
    currentMonth = 11;
  }
  updateCalendar();
}

function nextMonth() {
  currentMonth += 1;
  if (currentMonth > 11) {
    currentYear += 1;
    currentMonth = 0;
  }
  updateCalendar();
}

// 모달부분 수정

function showButton(dayElement) {
  let addButton = dayElement.querySelector(".add-event-btn");
  if (!addButton) {
    addButton = document.createElement("button");
    addButton.classList.add("add-event-btn");
    addButton.textContent = "+";

    addButton.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(dayElement);
    });

    dayElement.appendChild(addButton);
  }
}

function hideButton(dayElement) {
  const addButton = dayElement.querySelector(".add-event-btn");
  if (addButton) {
    addButton.remove();
  }
}

function openModal(dayElement) {
  const addButton = dayElement.querySelector(".add-event-btn");
  if (addButton) {
    addButton.remove();
  }

  const modal = document.getElementById("modal");
  modal.style.display = "block";

  const eventStartDate = document.getElementById("eventStartDate");
  const eventEndDate = document.getElementById("eventEndDate");
  const eventCreator = document.getElementById("eventCreator");
  const eventContent = document.getElementById("eventContent");

  eventStartDate.value = "";
  eventEndDate.value = "";
  eventCreator.value = "";
  eventContent.value = "";

  // 사용자가 선택한 날짜 가져오기
  const selectedYear = currentYear;
  const selectedMonth = currentMonth;
  const selectedDay = parseInt(dayElement.getAttribute("data-day"), 10);

  // 선택한 날짜로 기본값 설정 (YYYY-MM-DDT00:00)
  const formattedDate = `${selectedYear}-${(selectedMonth + 1)
    .toString()
    .padStart(2, "0")}-${selectedDay.toString().padStart(2, "0")}T00:00`;
  eventStartDate.value = formattedDate;
  eventEndDate.value = formattedDate;
}
// 선택된 색상을 input 요소에 자동 입력하는 함수
function updateSelectedColor(color) {
  const eventColorInput = document.getElementById("selectedColor");
  if (eventColorInput) {
    eventColorInput.value = color;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const colorPreviews = document.querySelectorAll(".color-preview");
  colorPreviews.forEach((color) => {
    // 각 색상 미리보기 요소에 클릭 이벤트를 추가합니다.
    color.addEventListener("click", () => {
      // 선택된 색상을 가져옵니다.
      const selcetedColor = color.style.backgroundColor;
      const previousSelectedColor = document.querySelector(".selected-color");
      if (previousSelectedColor) {
        previousSelectedColor.classList.remove("selected-color");
      }
      color.classList.add("selected-color");
      // 가져온 선택된 색상을 input 요소에 자동으로 입력하는 함수를 호출합니다.
      updateSelectedColor(selcetedColor);
    });
  });

  const editColorPreviews = document.querySelectorAll(
    "#edit-modal .color-preview"
  );
  editColorPreviews.forEach((color) => {
    color.addEventListener("click", () => {
      const selectedColor = color.style.backgroundColor;
      const previousSelectedColor = document.querySelector(
        "#edit-modal .selected-color"
      );
      if (previousSelectedColor) {
        previousSelectedColor.classList.remove("selected-color");
      }
      color.classList.add("selected-color");
      updateSelectedColor(selectedColor);
    });
  });
});

function addEvent() {
  const creator = document.getElementById("eventCreator").value;
  const selectedColor = document.getElementById("selectedColor").value;
  const startDate = new Date(document.getElementById("eventStartDate").value);
  const endDate = new Date(document.getElementById("eventEndDate").value);
  const content = document.getElementById("eventContent").value;

  const eventInfo = {
    creator,
    selectedColor,
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
    content,
  }; // 이벤트 정보 저장

  // 달력에 이벤트 추가하기
  const calendar = document.getElementById("calendar");
  const dayElements = calendar.querySelectorAll(".day-number");

  dayElements.forEach((dayElement) => {
    const date = new Date(
      currentYear,
      currentMonth,
      parseInt(dayElement.getAttribute("data-day"), 10)
    );

    if (date >= startDate && date <= endDate) {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("event-info");
      eventDiv.style.backgroundColor = selectedColor; // 선택된 색상을 eventDiv의 배경색으로 설정
      eventDiv.style.width = "100%"; // 원하는 크기로 설정
      eventDiv.style.height = "20%"; // 원하는 크기로 설정

      const eventText = document.createElement("p");

      eventText.textContent = creator; // 사용자가 입력한 작성자 출력
      eventDiv.appendChild(eventText);
      // 원하는 스타일 및 추가 설정 (필요한 경우 추가)
      eventDiv.addEventListener("mouseenter", () => {
        displayEventInfo(eventDiv, eventInfo);
      });
      eventDiv.addEventListener("mouseleave", () => {
        hideEventInfo(eventDiv);
      });
      eventDiv.addEventListener("click", () => {
        openEventChange(eventDiv, eventInfo);
      });
      dayElement.appendChild(eventDiv);
    }
  });

  closeModal();
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = `${(date.getMonth() + 1).toString().padStart(2, "0")}`;
  const day = `${date.getDate().toString().padStart(2, "0")}`;
  const hours = `${date.getHours().toString().padStart(2, "0")}`;
  const minutes = `${date.getMinutes().toString().padStart(2, "0")}`;

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function displayEventInfo(eventDiv, eventInfo) {
  const eventModal = document.createElement("div");
  eventModal.classList.add("event-modal");

  const eventContent = `
    <div class="event-content">
    <p><strong>작성자:</strong> ${eventInfo.creator}</p>
    <p><strong>설명:</strong> ${eventInfo.content}</p>
    <p><strong>일정:</strong> ${eventInfo.startDate.toLocaleString()} ~ ${eventInfo.endDate.toLocaleString()}</p>
    </div>
  `;

  eventModal.innerHTML = eventContent;

  eventDiv.appendChild(eventModal);
  eventDiv.addEventListener("mouseenter", () => {
    eventModal.style.display = "block";
  });
  eventDiv.addEventListener("mouseleave", () => {
    eventModal.style.display = "none";
  });
}

function hideEventInfo(eventDiv) {
  const eventModal = eventDiv.querySelector(".event-modal");
  if (eventModal) {
    eventModal.remove();
  }
}

function openEventChange(eventDiv, eventInfo) {
  const modal = document.getElementById("edit-modal");
  modal.style.display = "block";

  const inputCreator = document.getElementById("editCreator");
  inputCreator.value = eventInfo.creator;

  const inputContent = document.getElementById("editContent");
  inputContent.value = eventInfo.content;

  const inputStartDate = document.getElementById("editStartDate");
  inputStartDate.value = eventInfo.startDate;

  const inputEndDate = document.getElementById("editEndDate");
  inputEndDate.value = eventInfo.endDate;

  // 선택된 색상 설정
  const colorPreviews = document.querySelectorAll("#edit-modal .color-preview");
  colorPreviews.forEach((color) => {
    if (color.style.backgroundColor === eventInfo.selectedColor) {
      const previousSelectedColor = document.querySelector(
        "#edit-modal .selected-color"
      );
      if (previousSelectedColor) {
        previousSelectedColor.classList.remove("selected-color");
      }
      color.classList.add("selected-color");
    }
  });

  const updateButtons = () => {
    const saveButton = document.getElementById("saveButton");
    if (!saveButton) {
      const saveButton = document.createElement("button");
      saveButton.textContent = "저장";
      saveButton.setAttribute("id", "saveButton");
      saveButton.addEventListener("click", saveChanges);
      modal.appendChild(saveButton);
    }

    const deleteButton = document.getElementById("deleteButton");
    if (!deleteButton) {
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "삭제";
      deleteButton.setAttribute("id", "deleteButton");
      deleteButton.addEventListener("click", deleteEvent);
      modal.appendChild(deleteButton);
    }
  };

  const saveChanges = () => {
    eventInfo.creator = inputCreator.value;
    eventInfo.content = inputContent.value;
    eventInfo.startDate = new Date(inputStartDate.value);
    eventInfo.endDate = new Date(inputEndDate.value);
    eventInfo.selectedColor = getSelectedColor(); // 수정된 색상 가져오기
    updateEventInfo(eventDiv, eventInfo);
    modal.style.display = "none";
  };

  const deleteEvent = () => {
    eventDiv.remove();
    modal.style.display = "none";
  };
  modal.style.display = "block";
  updateButtons();
}
function updateSelectedColor(color) {
  const editColorInput = document.getElementById("editColor");
  if (editColorInput) {
    editColorInput.value = color;
    applyColorToEvents(color);
  }
}

function applyColorToEvents(color) {
  const selectedDayEvents = document.querySelectorAll(
    `[data-month="${currentMonth}"] .event-info`
  );
  selectedDayEvents.forEach((event) => {
    event.style.backgroundColor = color;
  });
}

function getSelectedColor() {
  const selectedColorElement = document.querySelector(".selected-color");
  return selectedColorElement ? selectedColorElement.style.backgroundColor : "";
}
function updateEventInfo(eventDiv, eventInfo) {
  const eventText = eventDiv.querySelector("p");
  eventText.textContent = eventInfo.creator;
  eventDiv.style.backgroundColor = eventInfo.selectedColor;
}
updateCalendar();
