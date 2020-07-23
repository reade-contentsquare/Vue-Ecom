import puppeteer from 'puppeteer'
import cliProgress from 'cli-progress'
import * as sessions from './sessions/index.js'

// Run the following command to get a chrome ws address to run locally
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')
const CHROME_WS = 'ws://[::1]:9222/devtools/browser/6aafedf8-b75d-40e2-9eb3-22f2e12bcc9e';
const NUM_TIMES = process.env['NUM_TIMES'] || 3;

(async () => {
  try {
    const browser = CHROME_WS ? await puppeteer.connect({ browserWSEndpoint: CHROME_WS }) : await puppeteer.launch();
    const progress = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progress.start(NUM_TIMES, 0);

    for (var i = 0; i < NUM_TIMES; i++) {
      let promises = [];
      for (const name in sessions) {
        promises.push(sessions[name](browser))
      }
      await Promise.all(promises);
      progress.update(i + 1);
    }

    if (!CHROME_WS) await browser.close();
  } catch(e) {
    console.log("ERROR", e)
  }

  process.exit();
})()