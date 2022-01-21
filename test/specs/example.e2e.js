const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const Workflows = require('../workflows');
const User = require('../objects/user');

const user = new User("Swag", "User", "12345");

describe('Sauce Demo', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it.skip('Sandbox', async () => {
        let itemIndex = 1;
        let items  = []

        await InventoryPage.addItemToCart(1);
        await InventoryPage.addItemToCart(2);
        await InventoryPage.addItemToCart(3);

        items.push(await InventoryPage.getItemDetails(1));
        items.push(await InventoryPage.getItemDetails(2));
        items.push(await InventoryPage.getItemDetails(3));


        await InventoryPage.clickItemTitle(itemIndex);
        // await HeaderPage.clickOnCart();
        // await expect(await CartPage.cartItemExist(item)).toBe(true);
        // await CartPage.clickCheckoutButton();
        // await CheckoutInfoPage.inputInfo("Swag", "Labs", "12345", true)
        // await CheckoutOverviewPage.clickFinishButton();
        // await expect(CheckoutCompletePage.completeHeader).toHaveTextContaining(CheckoutCompletePage.SuccessfulOrderHeader);
        await Workflows.Checkout(user, items);
    });

    it('should purchase single item added from inventory page', async () => {
        let item = await InventoryPage.addItemToCart();
        await Workflows.Checkout(user, item);
    });

    it.skip('should purchase single item added from item page', async () => {

    });

    it.skip('should purchase multiple items added from inventory page', async () => {
    
    });

    it.skip('should purchase multiple items added from inventory page', async () => {
    
    });

    it.skip('should purchase multiple items added from inventory and item page', async () => {
    
    });
});