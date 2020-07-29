import puppeteer from 'puppeteer'
import cliProgress from 'cli-progress'
import * as sessions from './sessions/index.js'

// ssh -i "~/Documents/AWS/PuppeteerEC2.pem" ubuntu@ec2-34-212-229-248.us-west-2.compute.amazonaws.com
// NUM_TIMES=500 DELAY=1000 node --experimental-modules puppeteer.mjs
// Run the following command to get a chrome ws address to run locally
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')
const CHROME_WS = '';
const NUM_TIMES = process.env['NUM_TIMES'] || 1;
const CONCURRENT_SESSIONS = process.env['CONCURRENT_SESSIONS'] || 1;

(async () => {
  try {
    const browser = CHROME_WS ? await puppeteer.connect({ browserWSEndpoint: CHROME_WS }) : await puppeteer.launch();
    const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progress.start(NUM_TIMES * CONCURRENT_SESSIONS, 0);

    for (var i = 0; i < NUM_TIMES; i++) {
      let promises = [];
      for (var j = 0; j < CONCURRENT_SESSIONS; j++) {
        for (const name in sessions) {
          promises.push(sessions[name](browser))
        }
      }
      await Promise.all(promises);
      progress.update((i + 1) * CONCURRENT_SESSIONS);
    }

    await browser.close();
  } catch(e) {
    console.log("ERROR", e)
  }

  process.exit();
})()