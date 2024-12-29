import  {test, expect} from '@playwright/test' 
import { LoginPage } from './login.page.ts' 
import { BankAccountPage } from './BankAccountPage.ts'


test.describe('Login tests', () => {

test('Valid Login', async ({page}) => {
    const login= new  LoginPage(page) 
    await login.NavigateToLoginPage('')
    await login.performLogin("orban","123456")
    await expect(page).toHaveURL('/dashboard')

    
    // await page.context().storageState({path:'./Auth.json'})
})

test('invalid Login', async ({page}) => {
    const login= new  LoginPage(page) 
    await login.NavigateToLoginPage('')
    await login.performLogin("orban","123456")
    await page.waitForTimeout(12*1000)

    
    // assertion is not failing
    await expect(login.passwordField, 'Invalid login data').toBeVisible
   // expect(login.errorMessage, 'Invalid login data').toBeVisible
} )

});

