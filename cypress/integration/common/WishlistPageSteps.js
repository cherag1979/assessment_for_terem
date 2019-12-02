import * as wishlistPage from '../../support/pages/WishlistPage';

Given('I open wishlist page', () => {
    wishlistPage.openWishlistPage()
})

Given('I create a wishlist called {word}', (name) => {
    wishlistPage.createWishlist(name)
})

Given('I open wishlist {word}', (name) => {
    wishlistPage.openWishlist(name)
})

Given('I delete wishlist {word}', (name) => {
    wishlistPage.deleteWishlist(name)
})

Given('the total quantity in wishlist should be {word}', (expectedQty) => {
    wishlistPage.assertQty(expectedQty)
})