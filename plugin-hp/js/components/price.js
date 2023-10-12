const compData = {
    bx : price,
    category: 'section'
};
BX.regist('Price', compData);

/**
 * 헤더 컴포넌트 
 * @param {object} scheme 
 * @returns 헤더 box
 */
function price(scheme) {
    const b = box();
    b[0].id = 'price';
    BX.component(schemes.priceTitle).appendTo(b);

    const table = box().appendTo(b);
    table[0].className = 'tableWrap';
    Object.keys(scheme).forEach(function(type) {
        const el = BX.component(schemes.priceTable).appendTo(table);
        el.children()[0].textContent = type.toUpperCase();
        if( scheme[type].site == 1 )
            el.children()[1].textContent = scheme[type].site + ' Pro Website';
        else
            el.children()[1].textContent = scheme[type].site + ' Pro Websites';
        
        el.find('.price').children()[1].textContent = scheme[type].price;
        
        $(el).find('.buy')[0].onclick = openCheckout;
        $(el).find('.buy')[0].dataset.type = type;
    });

    const appdx = `* The above prices exclude any applicable taxes based on your billing address.<br>
    See the checkout page for final pricing.`;
    box().appendTo(b).width('90%').html(appdx).fontSize(10).textColor('gray').textAlign('left').maxWidth(1100);

    return b;
}
/**
 * 
 */
function openCheckout(e) {
    // 화면 스크롤 일시제한
    $('#mainapp:nth-child(1)').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        return false;
    });
    
    const billSheet = BX.component(schemes.checkout).appendTo(topBox);
    const selectType = e.target.dataset.type;
    const option = homepage.price[selectType];

    const summary = $(billSheet).find('.billSummary')[0];

    const subscribeType = BX.component(schemes.rowBox).appendTo(summary);
    subscribeType.children()[0].innerText = `Business site builder Pro - ${selectType.charAt(0).toUpperCase() + selectType.slice(1)}`;
    subscribeType.children()[0].className = 'subscriptionType';
    subscribeType.children()[0].dataset.type = selectType;
    subscribeType.children()[1].innerText = `${option.price.toFixed(2)} USD / year`;

    var now = new Date();
    var oneYearLater = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    // console.log(now.getTime());

    const period = BX.component(schemes.rowBox).appendTo(summary);
    period.children()[0].innerText = 'Subscription period';
    period.children()[0].className = 'period';
    period.children()[0].dataset.start = now.getTime();
    period.children()[0].dataset.end = oneYearLater.getTime();
    period.children()[1].innerText = `${now.toLocaleDateString()} ~ ${oneYearLater.toLocaleDateString()}`;

    BX.component(schemes.discountBox).appendTo(summary);
    
    const total = BX.component(schemes.rowBox).appendTo(summary);
    total.children()[0].innerText = 'Total';
    total.children()[1].innerText = `${option.price.toFixed(2)} USD`;
    total.children()[1].dataset.price = option.price;
    total.children()[1].dataset.final = option.price;
    total.children()[1].className = 'totalPrice';

    BX.component(schemes.payBtn).appendTo(summary);

    const appdx = `* By purchasing, you acknowledge that your subscription will renew annually unless you switch to manual renewal.<br>
* 30-day money back guarantee`;
    
    box().appendTo(summary).width('90%').html(appdx).fontSize(10).marginTop(20).textColor('gray').textAlign('left').maxWidth(1100);

}

function checkDiscount(e) {
    const inputEl = $(e.target).prev()[0];
    const warnMsg = $(e.target).next()[0];
    if(!inputEl.value) {
        inputEl.classList.add('warn');
        $(warnMsg).show();
        return;
    }

    const valid = true;
    if(!valid) { // 유효하지 않으면
        $(warnMsg).text('invalid').show();
        return;
    }

    //코드 유효성 체크 : 유효하면 할인율 반환 - 유효하다는 조건으로 test
    const dcRate = 20;
    $(warnMsg).text('available').show();
    $('.discountRate').text(`${dcRate}%`).show();
    const rawprice = $('.totalPrice')[0].getAttribute('data-price') * 1;
    const finalPrice = rawprice - (rawprice * (dcRate / 100));
    $('.totalPrice')[0].dataset.final = finalPrice;
    $('.totalPrice')[0].innerHTML = `<font size=3 color=lightgray><del>${rawprice.toFixed(2)}</del></font><br>
    <font size=4 color=red>${finalPrice.toFixed(2)} USD</font>`;

    //구독 정보 api 저장
    
}

function onPay() {
    const price = $('.totalPrice')[0].getAttribute('data-final') * 1;
    const type = $('.subscriptionType')[0].getAttribute('data-type');
    const periodStart = $('.period')[0].getAttribute('data-start') * 1;
    const periodEnd = $('.period')[0].getAttribute('data-end') *1;
    alert(`결제 모듈이 준비중입니다..\n
    ${type} 타입을 선택하셨습니다. 
    가격은 ${price} 달러로 결제됩니다. 
    결제일은 ${new Date(periodStart).toLocaleDateString()}이며, 
    만료일은 ${new Date(periodEnd).toLocaleDateString()}까지 입니다.\n
계정 가입이 필요한지, 이메일 정보만으로 구독자를 관리할지 결정이 필요합니다.
결제는 달러 기준? 부가세는?`);
}