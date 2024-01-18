// API 키를 사용하여 데이터를 가져오는 함수
function fetchData(apiKey) {
    // API에서 데이터를 가져올 URL
    const apiUrl = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService';
  
    return fetch(`${apiUrl}?apiKey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        return xmlDoc;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  // fetchData() 함수를 사용하여 데이터를 가져온 후 처리
  const apiKey = 'okJvS/+oPsqNOO4RjSM8MXB/McA1gexgPDpRR9cvCJmrgoBD3j9J/+lRwrnHhH4qqR1dDEte/pV2KcDtHznVKw=='; // 본인의 API 키로 교체해야 합니다.
  
  fetchData(apiKey).then(xmlDoc => {
    const items = xmlDoc.querySelectorAll('item');
  
    items.forEach(item => {
      const locdate = item.querySelector('locdate').textContent;
  
      // locdate 값에 해당하는 날짜를 가진 달력 요소에 클래스를 추가합니다.
      const dayElement = document.querySelector(`[data-locdate="${locdate}"]`);
      if (dayElement) {
        dayElement.classList.add('holiday'); // 클래스를 추가합니다. 원하는 클래스명으로 변경 가능합니다.
      }
    });
  });
  