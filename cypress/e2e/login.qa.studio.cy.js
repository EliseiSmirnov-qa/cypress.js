describe('Форма логина и пароля', function () {

    it('Правильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
 
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
 
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
    
        cy.get('#forgotEmailButton').click();
    
        cy.get('#mailForgot').type('99random9999@yandex.ru');
        cy.get('#restoreEmailButton').click();

        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    
    it('Правильный логин, неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio555');
        cy.get('#loginButton').click();
        
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Неправильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
            
        cy.get('#mail').type('andrei@buzinov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
            
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
        
    it('Валидация E-mail', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        })
    
    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
})