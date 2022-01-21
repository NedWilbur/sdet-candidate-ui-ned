const HeaderPage = require('./pageobjects/header.page');
const CartPage = require('./pageobjects/cart.page');
const CheckoutInfoPage = require('./pageobjects/checkout/checkoutinfo.page');
const CheckoutOverviewPage = require('./pageobjects/checkout/checkoutoverview.page');
const CheckoutCompletePage = require('./pageobjects/checkout/checkoutcomplete.page');

class Workflows {
    async Checkout(user) {
        await HeaderPage.clickOnCart();
        await CartPage.clickCheckoutButton();
        await CheckoutInfoPage.inputInfo(user, true)
        await CheckoutOverviewPage.clickFinishButton();
        await expect(CheckoutCompletePage.completeHeader).toHaveTextContaining(CheckoutCompletePage.SuccessfulOrderHeader);
    }
}

module.exports = new Workflows();