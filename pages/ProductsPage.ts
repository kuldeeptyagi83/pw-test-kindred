import { BasePage } from "./BasePage";

type ProductDetails = {
  name: string;
  price: string;
};

export class ProductsPage extends BasePage {
  async navigate() {
    await this.page.goto("/inventory.html");
  }

  getAddToCartButton(productName: string) {
    const formattedProductName = productName.replace(/ /g, "-");
    const productNameLocator = `add-to-cart-${formattedProductName}`.toLocaleLowerCase();
    return this.page.getByTestId(productNameLocator);
  }

  getRemoveCartButton(productName: string) {
    const formattedProductName = productName.replace(/ /g, "-");
    const productNameLocator = `remove-${formattedProductName}`.toLocaleLowerCase();
    return this.page.getByTestId(productNameLocator);
  }

  async addProductsToCart(productName: ProductDetails[]) {
    for (const product of productName) {
      await this.getAddToCartButton(product.name).click();
    }
  }
}
