describe('Login', () => {
    it('Press button login', async () => {
      await expect(element(by.id('email'))).toBeVisible();
      await element(by.id('email')).replaceText('hello@email.com');
    })
  })