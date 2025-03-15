import { test, expect } from "../fixtures/fixtures";

test("Validate complete checkout process with multiple items", async ({
  productsPage,
  yourCartPage,
  checkoutInformationPage,
  checkoutOverviewPage,
  checkoutCompletePage,
}) => {
  const products = [
    { name: "Sauce Labs Bike Light", price: "$9.99" },
    { name: "Sauce Labs Bolt T-Shirt", price: "$15.99" },
  ];

  await test.step("Given the user is logged in and navigates to the inventory page to add products to the cart and verify their count", async () => {
    // await productsPage.navigate();
    await productsPage.addProductsToCart(products);
    expect(await productsPage.getCartItemsCount()).toBe(products.length);
  });

  await test.step("When the user goes to the cart", async () => {
    await productsPage.goToCart();
  });

  await test.step("Then the products in the cart should match the added products", async () => {
    await productsPage.goToCart();
    const yourCartProducts = await yourCartPage.getCartItems();
    expect(yourCartProducts).toEqual(products);
  });

  await test.step("When the user proceeds to checkout and fills in the information", async () => {
    await yourCartPage.getCheckoutButton().click();
    await checkoutInformationPage.fillCheckoutInformation("Fname", "Lname", "12345");
  });

  await test.step("Then the user should see the correct products with price in the checkout overview", async () => {
    await checkoutInformationPage.getContinueButton().click();
    const checkoutOverviewProducts = await checkoutOverviewPage.getCartItems();
    expect(checkoutOverviewProducts).toEqual(products);
    expect(await checkoutOverviewPage.getItemsTotal()).toBe("$25.98");
    expect(await checkoutOverviewPage.getTotal()).toBe("$28.06");
  });

  await test.step("When the user completes the checkout", async () => {
    await checkoutOverviewPage.getFinishButton().click();
  });

  await test.step("Then the order should be completed successfully and cart is empty", async () => {
    await expect(checkoutCompletePage.getCompleteHeader()).toBeVisible();
    await expect(checkoutCompletePage.getCompleteHeaderText()).toBeVisible();
    expect(await checkoutCompletePage.getCartItemsCount()).toBe(0);
  });
});
