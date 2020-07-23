const chromium = require('chrome-aws-lambda');
const cliProgress = require('cli-progress')
const sessions = require('./sessions/index.js')

module.exports.runSessions = async ({ num_times }, context) => {
  const NUM_TIMES = num_times || 1;
  try {
    const browser =  await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });
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

    await browser.close();
  } catch(e) {
    console.log("ERROR", e)
    return {
      statusCode: 500,
      body: JSON.stringify({num_times: num_times, error: e})
    }
  }

  return {
    statusCode: 200,
    body: 'DONE!',
  }
}
