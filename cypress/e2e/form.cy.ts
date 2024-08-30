describe('template spec', () => {
  it('should load the page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#registration-example').should('exist')
  })

  it('should show errors message because of empty required values', () => {
    cy.visit('http://localhost:3000/')

    cy.scrollTo('bottom')

    cy.contains(
      'Desculpe, alguns campos não foram preenchidos corretamente.'
    ).should('not.exist')

    cy.get('#name').type('Marco Antônio da Silva')

    cy.contains('Registrar dados').click()
    cy.scrollTo('bottom')

    cy.contains(
      'Desculpe, alguns campos não foram preenchidos corretamente.'
    ).should('be.visible')
  })

  it('should change languege to english', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#name').type('Marco Antônio da Silva')

    cy.contains('Registrar dados').click()
    cy.scrollTo('bottom')

    cy.contains(
      'Desculpe, alguns campos não foram preenchidos corretamente.'
    ).should('be.visible')

    cy.scrollTo('top')
    cy.scrollTo('top')
    cy.get('#language_label').click()

    cy.contains('is required.').should('be.visible')
  })

  // masked fields
  it('fields should be masked', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#name').type('Marco Antônio da Silva')
    cy.get('#birthdate').type('13/09/2000')
    cy.get('#phone').type('11999999999')
    cy.get('#cellphone').type('11999999999')
    cy.get('#whatsapp').type('11999999999')
    cy.get('#weight').type('999')
    cy.get('#height').type('999')
    cy.get('#cpf').type('99999999999')
    cy.get('#cep').type('99999999')

    cy.scrollTo('top')

    cy.get('#phone').should('have.value', '(11) 9999-9999')
    cy.get('#cellphone').should('have.value', '(11) 99999-9999')
    cy.get('#whatsapp').should('have.value', '(11) 99999-9999')
    cy.get('#weight').should('have.value', '99,9kg')
    cy.get('#height').should('have.value', '9,99m')
    cy.get('#cpf').should('have.value', '999.999.999-99')
    cy.get('#cep').should('have.value', '99.999-999')
  })

  it('should not register because has an invalid email', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#name').type('Marco Antônio da Silva')
    cy.get('#birthdate').type('13/09/2000')
    cy.get('#phone').type('11999999999')
    cy.get('#cellphone').type('11999999999')
    cy.get('#doc-number').type('999999999')
    cy.get('#cpf').type('99999999999')
    cy.get('#email').type('marco.antonio@test.edu')
    cy.get('#nationality').type('brasileiro')
    cy.get('#mother-name').type('Maria de Fátima da Silva')
    cy.get('#cep').type('99999999')

    cy.contains('button', 'Registrar dados').click()

    cy.contains('Insira um email que terminei com .com').should('be.visible')
  })

  it('field email should be disabled', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#name').type('Marco Antônio da Silva')
    cy.get('#birthdate').type('13/09/2000')
    cy.get('#phone').type('11999999999')
    cy.get('#cellphone').type('11999999999')
    cy.get('#doc-number').type('999999999')
    cy.get('#cpf').type('99999999999')
    cy.contains('Não possui email?').click()

    cy.get('#email').should('be.disabled')
  })

  it('should register patient with required fields only', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#name').type('Marco Antônio da Silva')
    cy.get('#birthdate').type('13/09/2000')
    cy.get('#phone').type('11999999999')
    cy.get('#cellphone').type('11999999999')
    cy.get('#doc-number').type('999999999')
    cy.get('#cpf').type('99999999999')
    cy.get('#email').type('marco.antonio@test.com')
    cy.get('#nationality').type('brasileiro')
    cy.get('#mother-name').type('Maria de Fátima da Silva')
    cy.get('#cep').type('99999999')

    cy.contains('button', 'Registrar dados').click()
  })

  // it('should register patient with full form data', () => {
  //   cy.visit('http://localhost:3000/')

  //   cy.get('#name').type('Marco Antônio da Silva')
  //   cy.get('#medical-record').type('1234')
  //   cy.get('#birthdate').type('13/09/2000')
  //   cy.get('#age').type('24')
  //   cy.get('#sex').select('Feminino')
  //   cy.get('#phone').type('11999999999')
  //   cy.get('#cellphone').type('11999999999')
  //   cy.get('#whatsapp').type('11999999999')
  //   cy.get('#contact').type('Rosangela')
  //   cy.get('#weight').type('555')
  //   cy.get('#height').type('111')
  //   cy.get('#document-type').select('RG')
  //   cy.get('#doc-number').select('999999999')
  //   cy.get('#issuing-body').type('SSP')
  //   cy.get('#shipment-date').type('10/10/2010')
  //   cy.get('#cns').type('9999999')
  //   cy.get('#cpf').type('99999999999')
  //   cy.get('#marital-status').select('Solteiro')
  //   cy.get('#skin-color').select('Preto')
  //   cy.get('#profession').select('Desenvolvedor')
  //   cy.get('#email').type('marco.antonio@test.com')
  //   cy.get('#nationality').type('Brasileiro')
  //   cy.get('#mother-name').type('Maria de Fátima da Silva')
  //   cy.get('#father-name').type('José de Alencar')
  //   cy.get('#health-plan').select('SulAmerica')
  //   cy.get('#health-plan-owner').type('José de Alencar')
  //   cy.get('#cep').type('99999999')

  //   cy.contains('button', 'Registrar dados').click()

  //   cy.contains(
  //     'Desculpe, alguns campos não foram preenchidos corretamente.'
  //   ).should('not.exist')
  // })
})
