// data 받아오기
// Fetch the items from the JSON file
function loadItems() {
    return fetch('data.json') // fetch를 이용해 data를 받아오고
    .then(response => response.json()) // 받아 온 data가 성공적이면 json으로 변환하고
    .then(json => json.items); // json 안에 있는 요소를 return하게 된다
}

// Update the list with the given items
function displayItems(items) { // 받아 온 data를 displayItems 함수로 호출
    const container = document.querySelector('.items'); // data에 있는 items들 HTML로 다 델꼬와
    container.innerHTML = items.map(item => createHTMLString(item)).join(''); 
                          // items(배열)-> <li>태그 배열로 변환 (map) & 병합 뽝 (join)
}

// Create HTML list item from the given data item
function createHTMLString(item) { // <li>태그 문자열 만들기 (HTML에서 형식 가져옴 ㄷㄷ)
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail"/>
        <span class="item__description">${item.color}, ${item.gender}, ${item.size}</span>
    </li> 
    `;
}

         // 버튼이 클릭되어졌을 때 일어나는 이벤트 정의한 함수 on~
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);
}





// 이벤트 위임 (한 곳에서만 handling할 수 있도록 만듦)- 효율성 up
function setEventListener(items) {
    const logo = document.querySelector('.logo'); // logo는 class
    const buttons = document.querySelector('.buttons'); // button들 들어있는 section을 넣어줬더니 동작이 잘 됩니다 ㅠㅜㅜㅜ
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
    
}

// main
loadItems() // json에 있는 data를 읽어와서 전달해준다 // promise 함수
.then(items => { // then성공하면 item을 받아올거구요
   displayItems(items); // 받아온 item들 HTML에 보여주기
   setEventListener(items); // 버튼을 클릭 이벤트
}) 
.catch(console.log) // catch성공하지 못하면 이걸 보여줄거에요.