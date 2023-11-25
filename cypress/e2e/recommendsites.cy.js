describe('template spec', () => {
  it('Heading text', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains('Links')
  })

  it('Wikipedia link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Wikipedia").click()
  })

  it('Youtube link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Youtube").click()
  })

  it('GitHub link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("GitHub").click()
  })

  it('CSU link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Columbus State").click()
  })

  it('Bootstrap link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Bootstrap Docs").click()
  })

  it('g4g link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("GeeksforGeeks").click()
  })

  it('Reddit link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Reddit").click()
  })

  it('Twitter link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Twitter").click()
  })

  it('LinkedIn link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("LinkedIn").click()
  })

  it('OpenAI link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("OpenAI").click()
  })

  it('Discord link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Discord").click()
  })

  it('Amazon link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Amazon").click()
  })

  it('Netflix link', () => {
    cy.visit('localhost:3000')
    cy.get('.col').contains("Netflix").click()
  })
})
