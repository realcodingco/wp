
const wrap = box().appendTo(topBox).size('100%', '100%').maxWidth(1470).left('50%').css('transform', 'translate(-50%, 0)');
BX.components.Header.bx(homepage.header).appendTo(topBox);
BX.components.Theme.bx(homepage.themes).appendTo(wrap);
BX.components.Price.bx(homepage.price).appendTo(wrap);
BX.components.Faq.bx(homepage.faqItems).appendTo(wrap);
BX.components.Footer.bx().appendTo(wrap);
BX.components.TopBtn.bx().appendTo(topBox);