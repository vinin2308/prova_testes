describe('teste swag labs', () => {
    //1QUESTÃO
    it('teste de sanidadade erro de login',() =>{
        cy.visit('/')
        cy.sanidade('locked_out_user','secret_sauce')
        cy.get('h3').contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    })
    it('teste de sanidadade login bem sucesido',() =>{
        cy.visit('/')
        cy.sanidade('standard_user','secret_sauce')
    cy.get('.header_secondary_container').contains('Products').should('be.visible')
})
    it('teste de sanidadade login efetuado, porém usuário apresenta problemas',() =>{
        cy.visit('/')
        cy.sanidade('problem_user','secret_sauce')
        cy.get('img[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('be.visible')
})
    //2QUESTÃO
    it('adicionando produto ao carrinho',() =>{
        cy.visit('/')
    cy.sanidade('standard_user','secret_sauce')
    cy.get('#add-to-cart-sauce-labs-backpack').click()
})
})


