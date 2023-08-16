describe("todo page", () => {
  // update
  it("update todo list success", () =>{
    cy.login('sirinya@gmail.com','zaq1@wsX')
    cy.visit('http://localhost:3000/project', { timeout: 10000 })
    cy.get('#edit-button-Homework1').click();
    cy.get('#description-edit-Homework1').clear()
    cy.get('#description-edit-Homework1').type('i think before this afternoon is better') // update description
    cy.get('#title-edit-Homework1').clear()
    cy.get('#title-edit-Homework1').type('Clean room') // update title
    cy.get('#status-edit-Homework1').select('InProgress') // update status
    cy.get('#edit-submit-Homework1', { timeout: 10000 }).click()

  }),
  it("update todo list success", () =>{
    cy.login('sirinya@gmail.com','zaq1@wsX')
    cy.visit('http://localhost:3000/project', { timeout: 10000 })
    cy.get('#edit-button-Homework1').click();
    cy.get('#description-edit-Homework1').clear()
    cy.get('#description-edit-Homework1').type('dont wanna do it anymore') // update description
    cy.get('#edit-submit-Homework1', { timeout: 10000 }).click()

  }),
  // create && delete
  it("create,delete todo list success", () =>{
    cy.login('sirinya@gmail.com','zaq1@wsX')
    cy.visit('http://localhost:3000/project', { timeout: 20000 })
    cy.get('#create-list').click()
    cy.get('#title').type('workpromptlab')
    cy.get('#description').type('before tomorrow')
    cy.get('#status').select('InProgress')
    cy.get('#submit-create-list-btn', { timeout: 10000 }).click()
    cy.get('#delete-button-workpromptlab').click(); // delete after create
    cy.get('#confirm-delete-workpromptlab', { timeout: 10000 }).click();
  }),
   // create
  it("create todo list success", () =>{ // all attribute
    cy.login('sirinya@gmail.com','zaq1@wsX')
    cy.visit('http://localhost:3000/project', { timeout: 10000 })
    cy.get('#create-list').click()
    cy.get('#title').type('sleep before 11 pm')
    cy.get('#description').type('i should be good')
    cy.get('#status').select('InProgress')
    cy.get('#submit-create-list-btn', { timeout: 10000 }).click() // new create
  }),
  it("title can be null", () =>{ // title can be null
    cy.login('sirinya@gmail.com','zaq1@wsX')
    cy.visit('http://localhost:3000/project', { timeout: 10000 })
    cy.get('#create-list').click()
    cy.get('#description').type('i should be good')
    cy.get('#status').select('InProgress')
    cy.get('#submit-create-list-btn', { timeout: 10000 }).click() // new create
  }),
  it("description can be null", () =>{ // description can be null
    cy.login('sirinya@gmail.com','zaq1@wsX')
    cy.visit('http://localhost:3000/project', { timeout: 10000 })
    cy.get('#create-list').click()
    cy.get('#title').type('sleep-before-10-pm')
    cy.get('#status').select('InProgress')
    cy.get('#submit-create-list-btn', { timeout: 10000 }).click() // new create
  }),
  // delete
  it("delete todo list success", () =>{
    cy.login('sirinya@gmail.com','zaq1@wsX')
    cy.visit('http://localhost:3000/project', { timeout: 20000 })
    cy.get('#delete-button-sleep-before-10-pm').click(); // delete after create
    cy.get('#confirm-delete-sleep-before-10-pm', { timeout: 10000 }).click();
  })

});

