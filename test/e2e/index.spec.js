
import VueSelector from 'testcafe-vue-selectors';
import { Selector } from 'testcafe';

fixture('Index page')
  // Load the URL your development server runs on.
  .page('http://localhost:8080');

// Create a new test(description, function(testController): <Promise>)
test('"Login attempts should be 0 on first time load."', async (testController) => {
  // Must use promises (async / await  here) for communication with the browser.
  const paragraphSelector = await new Selector('#app > div > div > p > strong');
  await testController.expect(paragraphSelector.innerText).eql('Login attempts: 0.');
});
