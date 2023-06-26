const Homepage = require('../pageobjects/homePage.page');
const testData = require('../../test-data/testdata.json');

describe('QaWolf.com  ', () => {

	describe('launching url', () => {
		it('should be able to launch url', async () => {
			await Homepage.launchUrl();
			await expect(browser).toHaveUrl('https://www.qawolf.com/');
		});
	});
	describe('Selecting Industries and sub items', () => {
		it('user should be able to select  industries and click on startups', async () => {
			await Homepage.startUps(testData.industries, testData.Startups);
			expect(await Homepage.$pageHeader(testData.Startups).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/startups');
		});
		it('user should be able to select  industries and click on startups', async () => {
			await Homepage.startUps(testData.industries, testData.Enterprise);
			expect(await Homepage.$pageHeader(testData.Enterprise).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/enterprise');
		});
		it('user should be able to select  industries and click on Fintech', async () => {
			await Homepage.finTech(testData.industries, testData.Fintech);
			expect(await Homepage.$pageHeader(testData.Fintech).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/fintech');
		});
		it('user should be able to select  industries and click on Healthcare', async () => {
			await Homepage.healthcare(testData.industries, testData.Healthcare);
			expect(await Homepage.$pageHeader(testData.Healthcare).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/healthcare');
		});
		it('user should be able to select  industries and click on eCommerce & Retail', async () => {
			await Homepage.eCommerceRetail(testData.industries, testData.eCommerceRetail);
			expect(await Homepage.$pageHeader(testData.eCommerceRetail).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/ecommerce-retail');
		});
		it('user should be able to select  industries and click on Blockchain & Web3', async () => {
			await Homepage.BlockchainWeb3(testData.industries, testData.blockChain);
			expect(await Homepage.$pageHeader(testData.blockChain).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/blockchain-web3');
		});
		it('user should be able to select  industries and click on HR & Recruiting', async () => {
			await Homepage.hrRecruiting(testData.industries, testData.hrRecruiting);
			expect(await Homepage.$pageHeader(testData.hrRecruiting).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/hr-recruiting');
		});
		it('user should be able to select  industries and click on Property Management', async () => {
			await Homepage.PropertyManagement(testData.industries, testData.PropertyManagement);
			expect(await Homepage.$pageHeader(testData.PropertyManagement).isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/industries/property-management');
		});
	});

	describe('Selecting test anythng and sub items', () => {
		it('user should be able to select  test anything and click on email', async () => {
			await Homepage.email(testData.testAnything);
			expect(await Homepage.$pageHeader(testData.Emails).isDisplayed()).toBe(true, 'Expect email page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/capabilities/emails');
		});
		it('user should be able to select  test anything and click on IntegrationsAndApi', async () => {
			await Homepage.IntegrationsAndApi(testData.testAnything);
			expect(await Homepage.$pageHeader(testData.internalApi).isDisplayed()).toBe(true, 'Expect IntegrationsAndApi page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/capabilities/apis');
		});
		it('user should be able to select  test anything and click on Multi-user flows', async () => {
			await Homepage.MultiUserFlows(testData.testAnything);
			expect(await Homepage.$pageHeader(testData.multyFlow).isDisplayed()).toBe(true, 'Expect Multi-user flows page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/capabilities/multi-user-flows');
		});
		it('user should be able to select  test anything and click on SMS and phone calls', async () => {
			await Homepage.SmsAndPhoneCalls(testData.testAnything);
			expect(await Homepage.$pageHeader(testData.smsAndPhone).isDisplayed()).toBe(true, 'Expect SMS and phone calls page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/capabilities/sms-and-phone-calls');
		});
		it('user should be able to select  test anything and click on iFrames', async () => {
			await Homepage.iFrames(testData.testAnything);
			expect(await Homepage.$pageHeader(testData.iFrames).isDisplayed()).toBe(true, 'Expect iFrames page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/capabilities/iframes');
		});
		it('user should be able to select  test anything and Chrome extensions', async () => {
			await Homepage.ChromeExtensions(testData.testAnything);
			expect(await Homepage.$pageHeader(testData.chromeExtension).isDisplayed()).toBe(true, 'Expect Chrome extensions page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/capabilities/chrome-extensions');
		});
	});

	describe('Selecting Content and sub items', () => {
		it('user should be able to  select content and caseStudy', async () => {
			await Homepage.content(testData.content);
			expect(await Homepage.$pageHeader(testData.endToEnd).isDisplayed()).toBe(true, 'Expect caseStudy page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/case-studies');
		});
		it('user should be able to  select content and Blog', async () => {
			await Homepage.Blog(testData.content);
			expect(await Homepage.$pageHeader(testData.wolfs).isDisplayed()).toBe(true, 'Expect Blog page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/blog');
		});
		it('user should be able to  select content and Buying guide', async () => {
			await Homepage.buyingGuide(testData.content);
			expect(await Homepage.$pageHeader(testData.BUYING).isDisplayed()).toBe(true, 'Expect SMS and phone calls page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/content/buying-guide');
		});
	});

	describe('Getting started', () => {
		it('user should be able to  select Get started', async () => {
			await Homepage.getStarted(testData.getStarted);
			expect(await Homepage.$pageHeader(testData.started).isDisplayed()).toBe(true, 'Expect Get started page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/get-started');
		});
		it('user should be able to enter email and click on schedule demo button', async () => {
			await Homepage.scheduleDemo(testData.email);
			expect(await Homepage.$pageHeaders(testData.qaWolf).isDisplayed()).toBe(true, 'Expect schedule page header to be displayed');
			await expect(browser).toHaveUrl('https://www.qawolf.com/schedule-a-demo');
		});
	});

});
