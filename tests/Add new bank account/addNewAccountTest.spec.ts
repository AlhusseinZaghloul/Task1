import  {test, expect} from '@playwright/test' 
import { LoginPage } from '../Login/login.page.ts' 
import { AddNewBankAccount } from './addNewBankAccountPage.ts'
import { faker } from '@faker-js/faker';

test.describe('Add new', () => {

    test.beforeEach(async ({ page }) => {
        const login= new  LoginPage(page) 
        await login.NavigateToLoginPage('')
        await login.performLogin("orban","123456")
        await expect(page).toHaveURL('/dashboard')
      });
    const randomIban = faker.finance.iban();
    test('Add new Bank Account', async ({page}) => {
        const addNewAccount= new AddNewBankAccount(page)
        await addNewAccount.navigateToAddNewBankAccountPage("http://backoffice-systemtest.andalusiagroup.net:8090/finance/cash-and-bank/setup/bank-accounts/new-bank-account")
        await addNewAccount.fillNewBankAccountData("CIB","Smouha","Current Account",randomIban)
        await addNewAccount.clickOnSave()
        await addNewAccount.searchForCreatedBankAccount(randomIban)
        //await expect(page).toHaveURL('finance/cash-and-bank/setup/bank-accounts')
        const actual = await addNewAccount.getActualIBAN(randomIban);
        //Assert the returned value in not false
        await expect(actual).toBeTruthy();

        /* Assert on the value of the returned value
        await expect(actual?.trim()).toBe(randomIban); */

        }); }
); 
 