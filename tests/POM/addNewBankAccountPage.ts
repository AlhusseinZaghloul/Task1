import { Locator, Page } from "@playwright/test"

export class AddNewBankAccount{
    readonly page: Page
    readonly bankNameDDL:Locator
    readonly branchNameDDL:Locator
    readonly bankAccountTypeDDL:Locator
    readonly iBANfield: Locator
    readonly saveButton: Locator
    

    constructor(page:Page){
        this.page = page
        this.bankNameDDL=page.locator('input[placeholder="Bank Name"]')
        this.branchNameDDL=page.locator('//input[@placeholder="Bank Branch"]')
        this.bankAccountTypeDDL=page.locator('input[placeholder="Account Type"]')
        this.iBANfield=page.locator('input[placeholder="Bank Account Number / IBAN"]')
        this.saveButton=page.locator('button.k-button.saveBtn')

    }
    async navigateToAddNewBankAccountPage(url:string){
        await this.page.goto(url)
}

    async fillNewBankAccountdata(bankName:string,branchName:string,type:string,iban:string){
        await this.bankNameDDL.fill(bankName)
        await this.branchNameDDL.fill(branchName)
        await this.bankAccountTypeDDL.fill(type)
        await this.iBANfield.fill(iban)
    }
    async clickOnSave(){
        await this.saveButton.click()
    }

}