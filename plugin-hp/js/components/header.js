const compData = {
    bx : header,
    category: 'header'
};
BX.regist('Header', compData);

/**
 * 헤더 컴포넌트 
 * @param {object} scheme 
 * @returns 헤더 box
 */
function header(scheme) {
    const b = BX.component(schemes.header);
    const ci = BX.component(schemes.ciBox).appendTo(b);
    $(ci[0]).find('img')[0].src = './style/ic2.svg';

    ci[0].href = '';
    const menuBox = BX.component(schemes.menuBox).appendTo(b);
    BX.component(schemes.hambugerIcon).appendTo(b);

    scheme.menuData.forEach(function(o) {
        if(o.state == 'close') return;
        
        const menu = BX.component(schemes.menu);
        menu[0].innerHTML = '<a onClick="closeMenu()" href="'+ o.link +'">'+ o.title + '</a>';
        menuBox[0].appendChild(menu[0]);
    });

    return b;
}

/**
 * 
 */
function closeMenu() {
    if($('.menuTrigger').hasClass('active') == true)
        $('.menuTrigger').click();
}
/**
 * 모바일에서 햄버거 메뉴 아이콘 클릭 이벤트 : 메뉴 상자 열림
 */
function menuOpen() {
    if($('.menuTrigger')[0].className == 'box menuTrigger') {
        $('.menuTrigger').addClass('active');
    } else {
        $('.menuTrigger').removeClass('active');
    }
    openMenu();
}

/**
 * 모바일에서 메뉴 아이콘 클릭 이벤트 : 메뉴 상자 열림
 */
function openMenu() {
    if($('.menuBox')[0].className == 'menuBox') {
        $('.menuBox').addClass('clicked');
    } else {
        $('.menuBox').removeClass('clicked');
    }
}