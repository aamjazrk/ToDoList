describe("login page", () => {
    // wrong password
    it("login page unsuccess", () => {
      cy.visit("http://localhost:3000", { timeout: 10000 });
      cy.get("#email").type("sirinya@gmail.com");
      cy.get("#password").type("111111");
      cy.get("#login-btn").click();
      cy.getCookie("next-auth.session-token", { timeout: 10000 }).should(
        "not.exist"
      );
    }),
    // wrong email
    it("login page unsuccess", () => {
      cy.visit("http://localhost:3000", { timeout: 10000 });
      cy.get("#email").type("siria@gmail.com");
      cy.get("#password").type("zaq1@wsX");
      cy.get("#login-btn").click();
      cy.getCookie("next-auth.session-token", { timeout: 10000 }).should(
        "not.exist"
      );
    }),
    it("login page success  && logout", () => {
      cy.visit("http://localhost:3000");
      cy.get("#email").type("sirinya@gmail.com");
      cy.get("#password").type("zaq1@wsX");
      cy.get("#login-btn").click();
      cy.url().should("include", "/dashboard", { timeout: 10000 });
      cy.getCookie("next-auth.session-token", { timeout: 10000 }).should(
        "exist"
      );
      cy.get("#logout-btn", { timeout: 10000 }).click();
      cy.intercept("http://localhost:3000");
      cy.wait(500);
      cy.getCookie("next-auth.session-token", { timeout: 10000 }).should(
        "not.exist"
      );
    }),
    it("register page success && login", () => {
      cy.visit("http://localhost:3000/register");
      cy.get("#name").type("aamjazrk");
      cy.get("#Email").type("a@gmail.com");
      cy.get("#Password").type("111111");
      cy.get("#submit-btn", { timeout: 10000 }).click();
      cy.intercept("http://localhost:3000");
      cy.get("#email").type("a@gmail.com");
      cy.get("#password").type("111111");
      cy.get("#login-btn", { timeout: 10000 }).click();
      cy.url().should("include", "/dashboard", { timeout: 15000 });
      cy.getCookie("next-auth.session-token", { timeout: 10000 }).should(
        "exist"
      );
    }),
    // email is aready used
    it("register page unsuccess", () => {
      cy.visit("http://localhost:3000/register");
      cy.intercept("POST", "http://localhost:3000/api/register").as("post");
      cy.get("#name").type("aamjazrk");
      cy.get("#Email").type("sirinya@gmail.com");
      cy.get("#Password").type("111111");
      cy.get("#submit-btn", { timeout: 10000 }).click();
      cy.wait("@post").then((interception) => {
        expect(interception.response.statusCode).not.to.equal(200);
      });
      cy.getCookie("next-auth.session-token", { timeout: 10000 }).should(
        "not.exist"
      );
    });
});
