import puppeteer from 'puppeteer'
import cliProgress from 'cli-progress'
import * as sessions from './sessions/index.js'

// Run the following command to get a chrome ws address to run locally
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')
const CHROME_WS = '';
const NUM_TIMES = process.env['NUM_TIMES'] || 3;

(async () => {
  try {
    const browser = CHROME_WS ? await puppeteer.connect({ browserWSEndpoint: CHROME_WS }) : await puppeteer.launch();
    const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    let totalSessions = NUM_TIMES * Object.keys(sessions).length;
    let sessionsToGo = totalSessions;

    progress.start(totalSessions, 0);

    for (var i = 0; i < NUM_TIMES; i++) {
      for (const name in sessions) {
        const page = await browser.newPage()
        await page.goto('http://contentsquare-presales-ecomm-web.s3-website-us-west-2.amazonaws.com/')
        await page.setViewport({ width: 1440, height: 766 })

        await sessions[name](page);

        await page.close();

        sessionsToGo--;
        progress.update(totalSessions - sessionsToGo);
      }
    }

    if (!CHROME_WS) await browser.close();
  } catch(e) {
    console.log("ERROR", e)
  }

  process.exit();
})()