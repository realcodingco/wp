const schemes = {
    header: {
        kind: 'box',
        className: 'header fixed',
    },
    ciBox: {
        kind: 'a', 
        style: {
            textDecoration:'none'
        },
        children: [
            {
                kind: 'img',
                className: 'logoImage',
                // onLoad: 'checkHeight()',
                style: {
                    float: 'left',
                    width: 60,
                    height: 'auto', //106.15,
                    padding: 10,
                }
            },
            {
                kind: 'span',
                text: 'Business site builder',
                style: {
        
                }
            }
        ]
    },
    menuBox: {
        kind: 'ul',
        className: 'menuBox',
    },
    menu: {
        kind: 'li',
        className: 'menuTitle',
    },
    hambugerIcon:  {
        kind: 'box',
        className: 'menuTrigger',
        onClick: 'menuOpen',
        children: [
            {
                kind: 'span'
            },
            {
                kind: 'span'
            },
            {
                kind: 'span'
            }
        ]
    },
    spreadBox: {
        kind: 'box',
        style: {
            textAlign: 'center'
        },
        children: [
            {
                kind: 'box',
                className: 'spreadBox',
                onClick: e => {
                    const mom = $(e.target).parents('.spreadBox');
                    $(mom).find('.detailBox').slideToggle();
                    $(mom).find('span')[0].innerText = $(mom).find('span')[0].innerText == 'expand_less' ? 'expand_more' : 'expand_less';
                },
                children: [
                    // {
                    //     kind: 'img'
                    // },
                    {
                        kind: 'box',
                        children: [
                            {
                                kind: 'p'
                            },
                            {
                                kind : 'span',
                                className: 'material-symbols-outlined',
                                text: 'expand_more'
                            },
                        ]
                    },
                    { // 세부 내용
                        kind: 'box',
                        className: 'detailBox'
                    },
                    
                ]
            },
            
        ]
    },
    priceTitle : {
        kind: 'box',
        className: 'priceTitle',
        children: [
            {
                kind : 'p',
                text: 'BUSINESS SITE BUILDER PLUGIN'
            },
            {
                kind : 'p',
                text: 'Pick the Pro Plugin Plan That’s Right for You'
            }
        ]
    },
    priceTable : {
        kind: 'box',
        className: 'priceTable',
        children: [
            {
                kind: 'p'
            },
            {
                kind: 'p'
            },
            {
                kind: 'box',
                className: 'price',
                children: [
                    {
                        kind: 'span',
                        text: 'USD'
                    },
                    {
                        kind: 'box',
                    },
                    {
                        kind: 'box',
                        text: '/Year'
                    }
                ]
            },
            {
                kind: 'box',
                className: 'buy',
                text: 'Buy Now'
            }
        ]
    },
    themeTitle :  {
        kind: 'p',
        className: 'themeTitle',
    },
    themeBox : {
        kind: 'box',
        className: 'themebox',
        children : [
            {
                kind: 'p'
                
            },
            {
                kind: 'a',
                href: 'https://www.realcoding.co/fdn/7wQk6ZW7RI',
                download: '',
                className: 'dlBtn',
                text: 'Download now'
            },
            {
                kind: 'img'
            },
            {
                kind: 'box'
            }
        ]
    },
    feature :  {
        kind: 'box',
        className: 'feature',
        children: [
            {
                kind: 'h5'
            },
            {
                kind: 'box'
            }
        ]
    },
    footer : {
        kind: 'box',
        className: 'footer',
        children: [
            {
                kind : 'box',
                children: [
                    {
                        kind: 'img'
                    },
                    {
                        kind: 'box',
                        text: 'Business site builder'
                    },
                ]
            },
            {
                kind: 'span',
                text: '© Business site builder. All Rights Reserved'
            }
        ]
    },
    adminTool : {
        kind: 'box',
        className: 'adminTool',
        children: [
            {
                kind: 'h2',
                text: 'Easy customization editing' //'간편한 커스텀마이징 편집'
            }, 
            {
                kind: 'p',
                text: 'Use the admin tools provided by the plugin to make your own customizations' //'플러그인에서 제공하는 관리자 툴로 원하는 내용으로 수정해보세요'
            },
            {
                kind: 'img',
                src: './style/admin.png'
            }
        ]
    },
    lineBanner: {
        kind: 'box',
        className: 'linebanner',
        text: 'Theme templates will continue to be added'
    },
    topbutton:  {
        kind: 'box',
        className: 'topbtn',
        children : [
            {
                kind: 'a',
                href: '#mainapp',
                text: '⬆︎'
            }
        ]
    },
    checkout: {
        kind: 'box',
        className:'checkout',
        children: [
            {
                kind: 'box',
                text: 'Let\'s complete your subscription.'
            },
            {
                kind: 'box',
                text: 'X',
                onClick: e => {
                    $('.checkout').remove();
                    $('#mainapp:nth-child(1)').off('scroll touchmove mousewheel');
                }
            },
            {
                kind: 'box',
                className: 'billing',
                children: [
                    {
                        kind: 'box',
                        className: 'billSummary',
                    },
                    {
                        kind: 'box'
                    }
                ]
            }
        ]
    },
    rowBox: {
        kind: 'box',
        className: 'rowBox',
        children: [
            {
                kind: 'span'
            },
            {
                kind: 'span'
            }
        ]
    },
    discountBox: {
        kind: 'box',
        className:'discount',
        children : [
            {
                kind: 'box',
                text: 'Discount code'
            },
            {
                kind: 'box',
                children: [
                    {
                        kind: 'input',
                        placeholder:'Enter code',
                        focus: e => {
                            e.target.classList.remove('warn');
                            $('.discount').find('span').hide();
                        },
                        blur: e => {
                            if(e.target.value == '') {
                                $('.discountRate').hide();
                                const raw = $('.totalPrice')[0].getAttribute('data-price') * 1;
                                $('.totalPrice')[0].dataset.final = raw;
                                $('.totalPrice')[0].innerText = `${raw.toFixed(2)} USD`;
                            }   
                        }
                    },
                    {
                        kind: 'button',
                        text: 'Apply',
                        onClick: 'checkDiscount'
                    },
                    {
                        kind: 'span',
                        text: 'Please enter a coupon code.'
                    }, 
                    {
                        kind: 'box',
                        className: 'discountRate',
                        text: '10%'
                    }
                ]
            }
        ]
    },
    payBtn : {
        kind: 'button',
        className: 'payBtn',
        text: 'Pay now',
        onClick: 'onPay'
    }
}

