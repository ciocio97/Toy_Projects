const toggleBtn = documnet.querrySelector('.navbar__togglebutton');
const menu = document.querrySelector('.navbar__menu');
const icons = document.querrySelector('.navbar__icons');

// addEventListener API를 이용해서, click이 될 때마다
// 지금 우리가 지정해준 함수를 호출해줘 !
toggleBtn.addEventListener('click', () => {
    // 토글 아이콘을 클릭했을 때,
    // 메뉴와 아이콘의 클래스가 active되어있다면 unactive하게 해주고
    // unactive되어있다면 active하게 해주는 아이 !!
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    // 다시 CSS로 넘어가서 active일때의 UI를 지정해줘야 한다
});

// 왜 아무리해도 토클 컨텐츠가 안내려오지 ;;;