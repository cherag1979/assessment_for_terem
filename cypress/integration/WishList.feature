Feature: Verify the add items to wishlist


@wishlist-s1
Scenario: To test the items are correctly added to wishlist

Given I am logged in
And I open wishlist page
And I create a wishlist called test

When I open item with id 1
And I add the item with quantity 1 size S and color Orange to my wishlist
And I add the item with quantity 2 size S and color Orange to my wishlist
And I add the item with quantity 1 size M and color Orange to my wishlist
And I add the item with quantity 1 size S and color Blue to my wishlist
And I open wishlist page
And I open wishlist test
Then the total quantity in wishlist should be 5
And element containing text 'S, Orange' should be visible
And element containing text 'M, Orange' should be visible
And element containing text 'S, Blue' should be visible
