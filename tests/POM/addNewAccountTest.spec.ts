import  {test, expect} from '@playwright/test' 
import { LoginPage } from './login.page.ts' 
import { AddNewBankAccount } from './addNewBankAccountPage.ts'
import { faker } from '@faker-js/faker';

test.describe('Add new', () => {
    const randomIban = faker.finance.iban();
    test('Add new Bank Account', async ({page}) => {
        const login= new  LoginPage(page) 
        await login.NavigateToLoginPage('')
        await login.performLogin("orban","123456")
        await expect(page).toHaveURL('/dashboard')
        const addNewAccount= new AddNewBankAccount(page)
        await addNewAccount.navigateToAddNewBankAccountPage("http://ahq-systest-01:8090/finance/cash-and-bank/setup/bank-accounts/new-bank-account")
        await addNewAccount.fillNewBankAccountdata("CIB","Smouha","Current Account",randomIban)
        await addNewAccount.clickOnSave()
        await expect(page).toHaveURL('finance/cash-and-bank/setup/bank-accounts')

    }); 
 }); 
 