const DELAY = process.env['DELAY'] || 500;

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export async function addToCartError(browser) {
	const page = await browser.newPage()
	await page.goto('http://contentsquare-presales-ecomm-web.s3-website-us-west-2.amazonaws.com/')
	await page.setViewport({ width: 1440, height: 766 })

  await page.waitForSelector('div > .about-us > .row > .text-sm-right > h1')
  await page.click('div > .about-us > .row > .text-sm-right > h1')
  await delay(DELAY);

  await page.waitForSelector('#app > .container-flex > .navbar > .navbar-item > .px-5')
  await page.click('#app > .container-flex > .navbar > .navbar-item > .px-5')
  await delay(DELAY);

  await page.waitForSelector('div > .row > .col-6:nth-child(1) > .card > .overlay')
  await page.click('div > .row > .col-6:nth-child(1) > .card > .overlay')
  await delay(DELAY);

  await page.waitForSelector('.row > .col-6:nth-child(1) > .card > .overlay > .btn')
  await page.click('.row > .col-6:nth-child(1) > .card > .overlay > .btn')
  await delay(DELAY);

  await page.waitForSelector('.col-6:nth-child(1) > .card > .overlay > a > .btn')
  await page.click('.col-6:nth-child(1) > .card > .overlay > a > .btn')
  await delay(DELAY);

  await page.waitForSelector('div > .row > .col6 > .info > .add-to-cart-button')
  await page.click('div > .row > .col6 > .info > .add-to-cart-button')
  await delay(DELAY);

  await page.close();
}

export async function session2(browser) {
	const page = await browser.newPage()
	await page.goto('http://contentsquare-presales-ecomm-web.s3-website-us-west-2.amazonaws.com/')
	await page.setViewport({ width: 1440, height: 766 })

	await page.waitForSelector('div > .carousel > #heroControls > .carousel-indicators > li:nth-child(2)')
	await page.click('div > .carousel > #heroControls > .carousel-indicators > li:nth-child(2)')
	await delay(DELAY);

	await page.waitForSelector('div > .carousel > #heroControls > .carousel-indicators > li:nth-child(3)')
	await page.click('div > .carousel > #heroControls > .carousel-indicators > li:nth-child(3)')
	await delay(DELAY);

	await page.waitForSelector('.col-3:nth-child(2) > .footer-widget > .list-unstyled > a:nth-child(2) > li')
	await page.click('.col-3:nth-child(2) > .footer-widget > .list-unstyled > a:nth-child(2) > li')
	await delay(DELAY);

	await page.waitForSelector('.col > .card-selector > .card-body > .search-title > h6:nth-child(5)')
	await page.click('.col > .card-selector > .card-body > .search-title > h6:nth-child(5)')
	await delay(DELAY);

	await page.waitForSelector('.col > .card-selector > .card-body > .search-title > h6:nth-child(6)')
	await page.click('.col > .card-selector > .card-body > .search-title > h6:nth-child(6)')
	await delay(DELAY);

	await page.waitForSelector('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await delay(DELAY);

	await page.waitForSelector('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await delay(DELAY);

	await page.waitForSelector('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await delay(DELAY);

	await page.waitForSelector('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await delay(DELAY);

	await page.waitForSelector('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await delay(DELAY);

	await page.waitForSelector('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await delay(DELAY);

	await page.waitForSelector('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await delay(DELAY);

	await page.waitForSelector('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await page.click('.row > .col-6:nth-child(2) > .card > .overlay > .btn')
	await delay(DELAY);

	await page.waitForSelector('.col-6:nth-child(2) > .card > .overlay > a > .btn')
	await page.click('.col-6:nth-child(2) > .card > .overlay > a > .btn')
	await delay(DELAY);

	await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
	await page.click('.row > .col6 > .info > .control > .increment-button')
	await delay(DELAY);

	await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
	await page.click('.row > .col6 > .info > .control > .increment-button')
	await delay(DELAY);

	await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
	await page.click('.row > .col6 > .info > .control > .increment-button')
	await delay(DELAY);

	await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
	await page.click('.row > .col6 > .info > .control > .increment-button')
	await delay(DELAY);

	await page.waitForSelector('.container > div > .more > .col4:nth-child(2) > h6')
	await page.click('.container > div > .more > .col4:nth-child(2) > h6')
	await delay(DELAY);

	await page.waitForSelector('.container > div > .more > .col4:nth-child(3) > h6')
	await page.click('.container > div > .more > .col4:nth-child(3) > h6')
	await delay(DELAY);

	await page.waitForSelector('.col-6:nth-child(3) > .card > .overlay > .router-link-exact-active > .btn')
	await page.click('.col-6:nth-child(3) > .card > .overlay > .router-link-exact-active > .btn')
	await delay(DELAY);

	await page.waitForSelector('.col-3:nth-child(3) > .footer-widget > .list-unstyled > a:nth-child(3) > li')
	await page.click('.col-3:nth-child(3) > .footer-widget > .list-unstyled > a:nth-child(3) > li')
	await delay(DELAY);

	await page.waitForSelector('.card-selector > .card-body > .search-title > .co > .circle:nth-child(3)')
	await page.click('.card-selector > .card-body > .search-title > .co > .circle:nth-child(3)')
	await delay(DELAY);

	await page.waitForSelector('.card-selector > .card-body > .search-title > .co > .circle:nth-child(4)')
	await page.click('.card-selector > .card-body > .search-title > .co > .circle:nth-child(4)')
	await delay(DELAY);

	await page.waitForSelector('.card-selector > .card-body > .search-title > .co > .circle:nth-child(5)')
	await page.click('.card-selector > .card-body > .search-title > .co > .circle:nth-child(5)')
	await delay(DELAY);

	await page.waitForSelector('.card-selector > .card-body > .search-title > div > .vue-slider-component')
	await page.click('.card-selector > .card-body > .search-title > div > .vue-slider-component')
	await delay(DELAY);

	await page.waitForSelector('.row > .row > .row > .col-12 > .btn')
	await page.click('.row > .row > .row > .col-12 > .btn')
	await delay(DELAY);

	await page.waitForSelector('#app > .container-flex > .navbar > .user > h5')
	await page.click('#app > .container-flex > .navbar > .user > h5')
	await delay(DELAY);

	await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > .close > span')
	await page.click('.modal-dialog > .modal-content > .modal-body > .close > span')
	await delay(DELAY);

	await page.close();
}

export async function contactUs(browser) {
	const page = await browser.newPage()
	await page.goto('http://contentsquare-presales-ecomm-web.s3-website-us-west-2.amazonaws.com/')
	await page.setViewport({ width: 1440, height: 766 })

  await page.waitForSelector('#app > .container-flex > .navbar > .navbar-item > a:nth-child(3)')
  await page.click('#app > .container-flex > .navbar > .navbar-item > a:nth-child(3)')
  await delay(DELAY);

  await page.waitForSelector('.row > .col-12 > form > .form-group:nth-child(1) > .form-control')
  await page.click('.row > .col-12 > form > .form-group:nth-child(1) > .form-control')
  await page.click('.row > .col-12 > form > .form-group:nth-child(1) > .form-control')
  await page.click('.row > .col-12 > form > .form-group:nth-child(1) > .form-control')
  await page.click('.row > .col-12 > form > .form-group:nth-child(1) > .form-control')
  await page.click('.row > .col-12 > form > .form-group:nth-child(1) > .form-control')
  await page.click('.row > .col-12 > form > .form-group:nth-child(1) > .form-control')
  await page.click('.row > .col-12 > form > .form-group:nth-child(1) > .form-control')
  await delay(DELAY);

  await page.type('.row > .col-12 > form > .form-group:nth-child(1) > .form-control', 'Reade')
  await delay(DELAY);

  await page.waitForSelector('#app > .container-flex > .navbar > .user > h5')
  await page.click('#app > .container-flex > .navbar > .user > h5')
  await delay(DELAY);

  await page.waitForSelector('#userModal > .modal-dialog > .modal-content > .modal-footer > .dropdown-item:nth-child(1)')
  await page.click('#userModal > .modal-dialog > .modal-content > .modal-footer > .dropdown-item:nth-child(1)')
  await delay(DELAY);

  await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > .close > span')
  await page.click('.modal-dialog > .modal-content > .modal-body > .close > span')
  await delay(DELAY);

  await page.waitForSelector('.col-3:nth-child(2) > .footer-widget > .list-unstyled > a:nth-child(3) > li')
  await page.click('.col-3:nth-child(2) > .footer-widget > .list-unstyled > a:nth-child(3) > li')
  await delay(DELAY);

  await page.waitForSelector('.col-6:nth-child(1) > .card > .overlay > a > .btn')
  await page.click('.col-6:nth-child(1) > .card > .overlay > a > .btn')
  await delay(DELAY);

  await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
  await page.click('.row > .col6 > .info > .control > .increment-button')
  await delay(DELAY);

  await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
  await page.click('.row > .col6 > .info > .control > .increment-button')
  await delay(DELAY);

  await page.waitForSelector('div > .row > .col6 > .info > .add-to-cart-button')
  await page.click('div > .row > .col6 > .info > .add-to-cart-button')
  await delay(DELAY);

  await page.waitForSelector('#app > .container-flex > .navbar > .bag > .pb-1')
  await page.click('#app > .container-flex > .navbar > .bag > .pb-1')
  await delay(DELAY);

  await page.close();
}

export async function resetPassword(browser) {
	const page = await browser.newPage()
	await page.goto('http://contentsquare-presales-ecomm-web.s3-website-us-west-2.amazonaws.com/')

	await page.setViewport({ width: 1440, height: 766 })

	await page.waitForSelector('#app > .container-flex > .navbar > .user > h5')
	await page.click('#app > .container-flex > .navbar > .user > h5')
	await delay(DELAY);

	await page.waitForSelector('.modal-content > .modal-body > .px-3 > .form-group:nth-child(1) > .form-control')
	await page.click('.modal-content > .modal-body > .px-3 > .form-group:nth-child(1) > .form-control')
	await delay(DELAY);

	await page.waitForSelector('.modal-content > .modal-body > .px-3 > .form-group:nth-child(2) > .form-control')
	await page.click('.modal-content > .modal-body > .px-3 > .form-group:nth-child(2) > .form-control')
	await delay(DELAY);

	await page.waitForSelector('.modal-content > .modal-body > .px-3 > .form-group:nth-child(2) > .form-control')
	await page.click('.modal-content > .modal-body > .px-3 > .form-group:nth-child(2) > .form-control')
	await delay(DELAY);

	await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > .px-3 > .form-check')
	await page.click('.modal-dialog > .modal-content > .modal-body > .px-3 > .form-check')
	await delay(DELAY);

	await page.waitForSelector('#userModal > .modal-dialog > .modal-content > .modal-footer > .dropdown-item:nth-child(1)')
	await page.click('#userModal > .modal-dialog > .modal-content > .modal-footer > .dropdown-item:nth-child(1)')
	await delay(DELAY);

	await page.waitForSelector('#userModal > .modal-dialog > .modal-content > .modal-footer > .dropdown-item:nth-child(1)')
	await page.click('#userModal > .modal-dialog > .modal-content > .modal-footer > .dropdown-item:nth-child(1)')
	await delay(DELAY);

	await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > .close > span')
	await page.click('.modal-dialog > .modal-content > .modal-body > .close > span')
	await delay(DELAY);

	await page.close();
}

export async function mobile1(browser) {
	const page = await browser.newPage()

	await page.goto('http://contentsquare-presales-ecomm-web.s3-website-us-west-2.amazonaws.com/')

	await page.setViewport({ width: 404, height: 875 })

	await page.waitForSelector('div > .carousel > #heroControls > .carousel-indicators > .active')
	await page.click('div > .carousel > #heroControls > .carousel-indicators > .active')
	await delay(DELAY);

	await page.waitForSelector('#app > div > .carousel > #heroControls > .carousel-indicators')
	await page.click('#app > div > .carousel > #heroControls > .carousel-indicators')
	await delay(DELAY);

	await page.waitForSelector('#app > .container-flex > .navbar > .user > h5')
	await page.click('#app > .container-flex > .navbar > .user > h5')
	await delay(DELAY);

	await page.waitForSelector('#userModal > .modal-dialog > .modal-content > .modal-footer > .dropdown-item:nth-child(1)')
	await page.click('#userModal > .modal-dialog > .modal-content > .modal-footer > .dropdown-item:nth-child(1)')
	await delay(DELAY);

	await page.waitForSelector('.modal-open > #app #userModal')
	await page.click('.modal-open > #app #userModal')
	await delay(DELAY);

	await page.waitForSelector('.col-3:nth-child(2) > .footer-widget > .list-unstyled > a:nth-child(3) > li')
	await page.click('.col-3:nth-child(2) > .footer-widget > .list-unstyled > a:nth-child(3) > li')
	await delay(DELAY);

	await page.waitForSelector('div > .row > .col-6:nth-child(2) > .card > .card-body')
	await page.click('div > .row > .col-6:nth-child(2) > .card > .card-body')
	await delay(DELAY);

	await page.waitForSelector('.col-6:nth-child(2) > .card > .overlay > a > .btn')
	await page.click('.col-6:nth-child(2) > .card > .overlay > a > .btn')
	await delay(DELAY);

	await page.waitForSelector('div > .row > .breadcrumb > .breadcrumb-item:nth-child(2) > a')
	await page.click('div > .row > .breadcrumb > .breadcrumb-item:nth-child(2) > a')
	await delay(DELAY);

	await page.waitForSelector('.row #MenuLink')
	await page.click('.row #MenuLink')
	await delay(DELAY);

	await page.waitForSelector('.row > .view-button > .dropdown > .dropdown-menu > .dropdown-item:nth-child(3)')
	await page.click('.row > .view-button > .dropdown > .dropdown-menu > .dropdown-item:nth-child(3)')
	await delay(DELAY);

	await page.waitForSelector('div > .row > .col-6:nth-child(2) > .card > .card-body')
	await page.click('div > .row > .col-6:nth-child(2) > .card > .card-body')
	await delay(DELAY);

	await page.waitForSelector('.col-6:nth-child(2) > .card > .overlay > a > .btn')
	await page.click('.col-6:nth-child(2) > .card > .overlay > a > .btn')
	await delay(DELAY);

	await page.waitForSelector('div > .row > .col6 > .info > .add-to-cart-button')
	await page.click('div > .row > .col6 > .info > .add-to-cart-button')
	await delay(DELAY);

	await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
	await page.click('.row > .col6 > .info > .control > .increment-button')
	await delay(DELAY);

	await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
	await page.click('.row > .col6 > .info > .control > .increment-button')
	await delay(DELAY);

	await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
	await page.click('.row > .col6 > .info > .control > .increment-button')
	await delay(DELAY);

	await page.waitForSelector('.row > .col6 > .info > .control > .increment-button')
	await page.click('.row > .col6 > .info > .control > .increment-button')
	await delay(DELAY);

	await page.waitForSelector('div > .row > .col6 > .info > .add-to-cart-button')
	await page.click('div > .row > .col6 > .info > .add-to-cart-button')
	await delay(DELAY);

	await page.waitForSelector('.container > div > .more > .col4:nth-child(2) > h6')
	await page.click('.container > div > .more > .col4:nth-child(2) > h6')
	await delay(DELAY);

	await page.waitForSelector('.container > div > .more > .col4:nth-child(3) > h6')
	await page.click('.container > div > .more > .col4:nth-child(3) > h6')
	await delay(DELAY);

	await page.close();
}