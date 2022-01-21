class CheckoutInfoPage  {
    /* Locators */
    get FirstNameInput() {
        return $('#first-name');
    }

    get LastNameInput() {
        return $('#last-name');
    }

    get ZipCodeInput() {
        return $('#postal-code');
    }

    get ContinueButton() {
        return $('#continue');
    }

    /* Methods */  
    async inputInfo(user, clickContinue = false) {
        await this.FirstNameInput.setValue(user.firstName);
        await this.LastNameInput.setValue(user.lastName);
        await this.ZipCodeInput.setValue(user.zipCode);

        if (clickContinue) await this.clickContinueButton();
    }   

    async clickContinueButton() {
        await this.ContinueButton.click();
    }
}

module.exports = new CheckoutInfoPage();