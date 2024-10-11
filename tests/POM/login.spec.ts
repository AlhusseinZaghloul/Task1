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
    await login.performLogin("orban","12345777")
    expect(login.errorMessage, 'Invalid login data').toBeVisible
} )

});

