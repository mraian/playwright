import{test, expect} from '@playwright/test';
import{homePage} from '../pages/homePage';

test('homePageTest', async({page})=>{

    const h1 = new homePage(page);

    await h1.go();
    await h1.checkHomeButton();
    await h1.test();

})