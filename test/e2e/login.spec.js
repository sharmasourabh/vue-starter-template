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
  const navBarBurger = Selector('#navBarBurger'); // div[class="navbar-burger burger"]
  const loginLogoutButton = Selector('a[class="button is-primary"] > span:last-child')
  if (await navBarBurger.exists && await navBarBurger.visible) {
    await t
      .click(navBarBurger)
      .click(loginLogoutButton)
      .expect(loginLogoutButton.innerText)
      .eql('Login');
  } else {
    await t
      .click(loginLogoutButton)
      .expect(loginLogoutButton.innerText)
      .eql('Login');
  }
});
