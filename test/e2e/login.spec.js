import { Selector } from 'testcafe';

fixture `login page`
  .page `http://localhost:8080/#/login`;

test('Test login functionality', async (t) => {
  await t
    .typeText('input[name="params.email"]', 'a@a.com')
    .typeText('input[name="params.password"]', 'a')
    .click('button[class="button is-success"]')
    .expect(Selector('a[class="button is-primary"] > span:last-child').innerText)
    .eql('Logout');
});

test('Test Logout functionality', async (t) => {
  await t
    .click('a[class="button is-primary"] > span:last-child')
    .expect(Selector('a[class="button is-primary"] > span:last-child').innerText)
    .eql('Login');
});
