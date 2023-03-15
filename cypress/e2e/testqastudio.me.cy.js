describe('Интернет магазин test', function () {
    
    it('Флоу покупки', function () {
        cy.visit('https://testqastudio.me/');

        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
     
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();

        cy.wait(6000); // Ждем загрузки виджета корзины

        cy.get('.woocommerce-mini-cart__buttons > [href="https://sh3910517.c.had.su/cart/"]').click();
        cy.get('.home > span').click();

        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();

        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();

        cy.wait(6000); // Ждем загрузки виджета корзины

        cy.get('.checkout').click();

        cy.contains('Оформение заказа').should('be.visible');

        cy.get('#billing_first_name').type('Александр');
        cy.get('#billing_last_name').type('Македонский');
        cy.get('#billing_address_1').type('72, Островского');
        cy.get('#billing_city').type('Тула');
        cy.get('#billing_state').type('Тульская область');
        cy.get('#billing_postcode').type('300016');
        cy.get('#billing_phone').type('8-987-654-32-21');
        cy.get('#billing_email').type('aleks_makedonskii999@yandex.ru');

        cy.get('#place_order').click();

        cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
    })
})