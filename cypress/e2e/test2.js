/// <reference types ="Cypress"/>
describe('log in', () => {
    it('login standard_user', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        
    });
    it('add first 3 items to the cart', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

        let expectedItems =6
        for (let i=0;i< 3 ;i++){
            let myarray = cy.get('div#inventory_container').find('.btn').eq(i).click()

        }
        
    });
});