import * as itemsPage from '../../support/pages/ItemPage';


Given('I open item with id {int}', (id) => {
    itemsPage.openItem(id)
})

 1
Given('I add the item with quantity {int} size {word} and color {word} to my wishlist', (qty, size, color) => {
    itemsPage.addItemsToWishlist(qty, size, color)
})
