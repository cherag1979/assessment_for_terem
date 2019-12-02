const quantity = '[name="qty"]';
const sizeDropdown = '[id="group_1"]';
const addToWishlist = '[id="wishlist_button"]';
const closePopup = '[title="Close"]';


export function addItemsToWishlist(qty, size, color) {
    cy.get(quantity).clear().type(qty)
    cy.get(sizeDropdown).select(size)
    cy.get("[name='" + color + "']").click()
    cy.get(addToWishlist).click()
    cy.get(closePopup).click()
  }

  export function openItem(id) {
    cy.visit(Cypress.env("baseURL") + "/index.php?id_product=" + id + "&controller=product")
  }