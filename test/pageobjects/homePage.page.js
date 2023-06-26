const Common = require('./common');

class Homepage extends Common {
    constructor() {
        super();
        this.$topNavigationBar = (menu) => $(`//div[contains(text(),'${menu}')]`)
        this.$startups = (name) => $(`//div[contains(text(),'${name}')]`);
        this.$pageHeader = (header) => $(`//h1[contains(text(),'${header}')]`);
        this.$testAnything = (testAnything) => $(`//div[contains(text(),'${testAnything}')]`)
        this.$email = () => $(`(//a[text()="Emails"])[2]`);
        this.$integrationsAndApi = () => $(`(//a[contains(text(),'Integrations and APIs')])[2]`);
        this.$multiUserFlow = () => $(`(//a[contains(text(),'Multi-user flows')])[2]`);
        this.$smsAndPhoneCalls = () => $(`(//a[contains(text(),'SMS and phone calls')])[2]`);
        this.$iFrames = () => $(`(//a[contains(text(),'iFrames')])[2]`);
        this.$ChromeExtensions = () => $(`(//a[contains(text(),'Chrome extensions')])[2]`);
        this.$caseStudy = () => $(`//div[contains(text(),'Case studies')]`);
        this.$Blog = () => $(`//div[contains(text(),'Blog')]`);
        this.$buyingGuide = () => $(`//div[contains(text(),'Buying guide')]`);
        this.$fineTech = (name) => $(`(//a[text()="${name}"])[2]`);
        this.$healthcare = (name) => $(`(//a[text()="${name}"])[2]`);
        this.$eCommerceRetail = (name) => $(`(//a[text()="${name}"])[2]`);
        this.$BlockchainWeb3 = (name) => $(`(//a[text()="${name}"])[2]`);
        this.$hrRecruiting = (name) => $(`(//a[text()="${name}"])[2]`);
        this.$PropertyManagement = (name) => $(`(//a[text()="${name}"])[2]`);
        this.$getStarted = (menu) => $(`//a[contains(text(),'${menu}')]`);
        this.$email2 = () => $(`#Email`);
        this.$scheduleButton = () => $(`//input[@class="button-primary w-button"]`);
        this.$scheduledate = () => $(`(//td[@role="gridcell"])[27]`);
        this.$pageHeaders = (headers) => $(`(//div[text()="${headers}"])[3]`)
    }

    async startUps(menu, name) {
        await this.$topNavigationBar(menu).moveTo(47, 39);
        await browser.pause(1000);
        await this.$startups(name).click();
    }
    async finTech(menu, name) {
        await this.$topNavigationBar(menu).moveTo(47, 39);
        await browser.pause(1000);
        await this.$fineTech(name).click();
    }
    async healthcare(menu, name) {
        await this.$topNavigationBar(menu).moveTo(47, 39);
        await browser.pause(1000);
        await this.$healthcare(name).click();
    }
    async eCommerceRetail(menu, name) {
        await this.$topNavigationBar(menu).moveTo(47, 39);
        await browser.pause(2000);
        await this.$eCommerceRetail(name).click();
    }
    async BlockchainWeb3(menu, name) {
        await this.$topNavigationBar(menu).moveTo(47, 39);
        await browser.pause(1000);
        await this.$BlockchainWeb3(name).click();
    }
    async hrRecruiting(menu, name) {
        await this.$topNavigationBar(menu).moveTo(47, 39);
        await browser.pause(1000);
        await this.$hrRecruiting(name).click();
    }
    async PropertyManagement(menu, name) {

        await this.$topNavigationBar(menu).moveTo(47, 39);
        await browser.pause(1000);
        await this.$PropertyManagement(name).click();
    }
    async email(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(1000);
        await this.$email().click();
    }
    async IntegrationsAndApi(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(1000);
        await this.$integrationsAndApi().click();

    }
    async MultiUserFlows(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(2000);
        await this.$multiUserFlow().click();
    }
    async SmsAndPhoneCalls(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(1000);
        await this.$smsAndPhoneCalls().click();
    }
    async iFrames(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(1000);
        await this.$iFrames().click();
    }
    async ChromeExtensions(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(2000);
        await this.$ChromeExtensions().click();
    }
    async content(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(1000);
        await this.$caseStudy().click();
    }
    async Blog(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(1000);
        await this.$Blog().click();
    }
    async buyingGuide(menu) {
        await this.$testAnything(menu).moveTo(48, 14);
        await browser.pause(1000);
        await this.$buyingGuide().click();
    }
    async getStarted(menu) {
        await this.$getStarted(menu).click();

    }
    async scheduleDemo(email) {
        await this.$email2().setValue(email);
        await this.$scheduleButton().click();
    }
 


}

module.exports = new Homepage();
