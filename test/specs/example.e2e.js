const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutInfoPage = require('../pageobjects/checkout/checkoutinfo.page');
const CheckoutOverviewPage = require('../pageobjects/checkout/checkoutoverview.page');
const CheckoutCompletePage = require('../pageobjects/checkout/checkoutcomplete.page');


describe('Sauce Demo', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Sandbox', async () => {
        let itemIndex = 1;
        await InventoryPage.addItemToCart(itemIndex);
        await InventoryPage.clickItemTitle(itemIndex);
        await HeaderPage.clickOnCart();
        await CartPage.clickCheckoutButton();
        await CheckoutInfoPage.inputInfo("Swag", "Labs", "12345", true)
        await CheckoutOverviewPage.clickFinishButton();
        await expect(CheckoutCompletePage.completeHeader).toHaveTextContaining(CheckoutCompletePage.SuccessfulOrderHeader);
    });
});