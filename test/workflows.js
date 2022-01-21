const HeaderPage = require('./pageobjects/header.page');
const CartPage = require('./pageobjects/cart.page');
const CheckoutInfoPage = require('./pageobjects/checkout/checkoutinfo.page');
const CheckoutOverviewPage = require('./pageobjects/checkout/checkoutoverview.page');
const CheckoutCompletePage = require('./pageobjects/checkout/checkoutcomplete.page');

class Workflows {
    async Checkout(user, items) {
        await HeaderPage.clickOnCart();

        for (const item of items) {
            await expect(await CartPage.cartItemExist(item)).toBe(true);
        }
        
        await CartPage.clickCheckoutButton();
        await CheckoutInfoPage.inputInfo(user, true)

        for (const item of items) {
            await expect(await CartPage.cartItemExist(item)).toBe(true);
        }

        await CheckoutOverviewPage.clickFinishButton();
        await expect(CheckoutCompletePage.completeHeader).toHaveTextContaining(CheckoutCompletePage.SuccessfulOrderHeader);
    }
}

module.exports = new Workflows();