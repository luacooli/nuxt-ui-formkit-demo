describe('template spec', () => {
  it('should load the page', () => {
    cy.visit('http://localhost:3001/')

    cy.get('#registration-example').should('exist')
  })

  it('should not register the patient with empty form values', () => {
    cy.visit('http://localhost:3001/')

    cy.get('#register__button').click()
    
    cy.scrollTo('bottom')

    cy.contains('Sorry, not all fields are filled out correctly.').should(
      'be.visible'
    )
  })

  // it('should register patient with required fields only', () => {
  //   cy.visit('http://localhost:3001/')

  //   cy.get('#name').type('Marco Antônio da Silva')
  //   cy.get('#birthdate').type('9/13/99')
  //   cy.get('#phone').type('11999999999')
  //   cy.get('#cellphone').type('11999999999')
  //   cy.get('#doc-number').type('999999999')
  //   cy.get('#cpf').type('99999999999')
  //   cy.get('#email').type('marco.antonio@test.com')
  //   cy.get('#nationality').type('brasileiro')
  //   cy.get('#mother-name').type('Maria de Fátima da Silva')
  //   cy.get('#cep').type('99999999')

  //   cy.get('#register__button').click()

  //   cy.contains('Hello World!').should('be.visible')
  // })
})
