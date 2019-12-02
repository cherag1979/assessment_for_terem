const newWishlistInput = '[id="name"]';
const saveWishlist = '[id="submitWishlist"]';


  export function openWishlistPage() {
    cy.visit(Cypress.env("baseURL") + "/index.php?fc=module&module=blockwishlist&controller=mywishlist")
  }

  export function openWishlist(name) {
    cy.contains(name).click()
  }

  
  export function createWishlist(name) {
    cy.get(".icon-remove",{timeout:10000}).click()
    cy.log("Wishlist was successfully deleted")
    cy.get(newWishlistInput).type(name)
    cy.get(saveWishlist).click()
    cy.contains(name).should("exist")
  }

  
  export function deleteWishlist(name) {
    cy.get(newWishlistInput).type(name)
    cy.get(saveWishlist).click()
  }

  
  export function assertQty(expectedQty) {
    cy.get('[id="block-history"]').contains(expectedQty)
  }


