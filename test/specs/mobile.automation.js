describe('Open application', () => {
    it('Success open the apps', async () => {
        await expect(await $(`//android.widget.TextView[@content-desc="Accessibility"]`)).toHaveTextContaining("Accessibility");
        driver.closeApp();
    });

    it('Success open Hello World Activity', async () => {
        driver.activateApp("io.appium.android.apis");
        await $(`//android.widget.TextView[@content-desc='App']`).click();
        await $(`//android.widget.TextView[@content-desc='Activity']`).click();
        await $(`//android.widget.TextView[@content-desc='Hello World']`).click();
        await expect(await $(`//android.widget.TextView[@content-desc="Hello, World!"]`)).toHaveTextContaining("Hello, World!");
        driver.closeApp();
    });
  
    it('Success Open Accessibility Node Provider', async () => {
      driver.activateApp("io.appium.android.apis");
      await $(`//android.widget.TextView[@content-desc="Access'ibility"]`).click();
      await $(`//android.widget.TextView[@content-desc="Accessibility Node Provider"]`).click();
      await expect(await $(`//android.widget.TextView[@content-desc="Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares."]`)).toHaveTextContaining("Enable TalkBack and Explore");
      driver.closeApp();
    });
    
    it('Success View Normal Buttons', async () => {
      driver.activateApp("io.appium.android.apis");
      await $(`//android.widget.TextView[@content-desc="Views"]`).click();
      await $(`//android.widget.TextView[@content-desc="Buttons"]`).click();
      await expect(await $(`//android.widget.Button[@content-desc="Normal"]`)).toBeDisplayed();
      await expect(await $(`//android.widget.Button[@content-desc="Normal"]`)).toHaveTextContaining("NORMAL");
      driver.closeApp();
    });

    it('Success open Default Layout', async () => {
      driver.activateApp("io.appium.android.apis");
      await $(`//android.widget.TextView[@content-desc="Content"]`).click();
      await $(`//android.widget.TextView[@content-desc="Resources"]`).click();
      await $(`//android.widget.TextView[@content-desc="Layout Reference"]`).click();
      await expect(await $(`//android.widget.TextView[@content-desc="Default layout"]`)).toHaveTextContaining("Default layout");
      driver.closeApp();
    });
});