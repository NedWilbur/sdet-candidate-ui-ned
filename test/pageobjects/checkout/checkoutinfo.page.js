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
    async inputInfo(firstName, lastName, zipCode, clickContinue = false) {
        await this.FirstNameInput.setValue(firstName);
        await this.LastNameInput.setValue(lastName);
        await this.ZipCodeInput.setValue(zipCode);

        if (clickContinue) await this.clickContinueButton();
    }   

    async clickContinueButton() {
        await this.ContinueButton.click();
    }
}

module.exports = new CheckoutInfoPage();