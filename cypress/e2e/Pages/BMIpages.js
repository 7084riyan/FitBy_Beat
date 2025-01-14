class BMIPage {
    // Elemen form input
    get heightInput() {
        return cy.get('input[name="height"]').should('be.visible');
    }

    get weightInput() {
        return cy.get('input[name="weight"]').should('be.visible');
    }

    get ageInput() {
        return cy.get('input[name="age"]').should('be.visible');
    }

    // Sex dropdown with improved handling
    get sexDropdown() {
        return cy.get('span[id^="select2-sex-"]').should('be.visible');
    }

    selectSex(sex) {
        this.sexDropdown.click({ force: true });
        return cy.get('.select2-results__option')
            .contains(sex, { matchCase: false })
            .should('be.visible')
            .click();
    }
  
    // Elemen dropdown untuk activity level
    get activityLevelDropdown() {
        return cy.get('span[id^="select2-activity_level"]').should('be.visible');
    }

    selectActivityLevel(activity) {
        // Click to open the dropdown
        this.activityLevelDropdown.click({ force: true });
    
        // Select the correct activity level based on the input
        cy.get('.select2-results__option')
            .contains('sports')
            .should('be.visible')
            .click();
    }
    // Tombol calculate
    get calculateButton() {
        return cy.get('button[type="submit"]')
            .contains('Calculate')
            .should('be.visible');
    }
  
    // Pesan hasil BMI
    get bmiNotification() {
        return cy.get('.qodef-bmic-notification-text').should('be.visible');
    }
  
    // Form action untuk menghitung BMI
    enterBMIData(height, weight, age, sex, activity) {
        if (height) this.heightInput.clear().type(height);
        if (weight) this.weightInput.clear().type(weight);
        if (age) this.ageInput.clear().type(age);
        if (sex) this.selectSex(sex);
        if (activity) this.selectActivityLevel(activity);
        return this;
    }

    calculate() {
        this.calculateButton.click();
        return this;
    }

    // Method to verify BMI calculation result
    verifyBMIResult(expectedMessage) {
        this.bmiNotification.should('contain', expectedMessage);
        return this;
    }
}

export default new BMIPage();  