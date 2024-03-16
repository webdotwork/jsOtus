jest-html-reporters
TypeScript icon, indicating that this package has built-in type declarations
3.1.7 • Public • Published 3 months ago
Jest reporter
npm NPM downloads license

English | 简体中文

Jest test results processor for generating a summary in HTML

Example page https://hazyzh.github.io/report.html

example picture

Installation
  # yarn
  yarn add jest-html-reporters --dev
  # npm
  npm install jest-html-reporters --save-dev
Usage
Configure Jest to process the test results by adding the following entry to the Jest config (jest.config.json):

"jest": {
  ...,
  "reporters": [
    "default",
    "jest-html-reporters"
  ],
  ...
}
As you run Jest from within the terminal, a file called jest_html_reporters.html will be created within your root folder containing information about your tests.

Available Options
The options below are specific to the reporter.

Option Name	Type	Default	Description	env variables name
publicPath	string	''	specify the base path	JEST_HTML_REPORTERS_PUBLIC_PATH
filename	string	jest_html_reporters.html	Filename of saved report
Applies to the generated html	JEST_HTML_REPORTERS_FILE_NAME
includeConsoleLog	boolean	false	set true to display console logs for each test suite. NOTE: the precondition is to run Jest with --verbose=false in order to catch all logs during the tests.	JEST_HTML_REPORTERS_INCLUDE_CONSOLE_LOG
darkTheme	boolean	false	set true to generate dark theme report page	JEST_HTML_REPORTERS_DARK_THEME
failureMessageOnly	number	0	0 : always create report.
1 : show failure test suites messages only in Report.
2 : only create report when some test suites failed.	JEST_HTML_REPORTERS_FAILURE_MESSAGE_ONLY
inlineSource	boolean	false	Option to save report in a single combined HTML file #184	JEST_HTML_REPORTERS_INLINE_SOURCE
pageTitle	string	Report	specify header and page title	JEST_HTML_REPORTERS_PAGE_TITLE
logoImgPath	string	undefined	specify path of the image that will be displayed to the right of page title	JEST_HTML_REPORTERS_LOGO_IMG_PATH
hideIcon	boolean	false	hide default icon	JEST_HTML_REPORTERS_HIDE_ICON
expand	boolean	false	specify whether default expand all data	JEST_HTML_REPORTERS_EXPAND
testCommand	string	""	copy command content to quickly run test file	JEST_HTML_REPORTERS_TEST_COMMAND
openReport	boolean	in dev=true, rest=false	options for npm package open	JEST_HTML_REPORTERS_OPEN_REPORT
urlForTestFiles	string	''	url for test files. If user set this value, Details table shows an icon link to each rows. The link is constructed by joining urlForTestFiles and relativePath (like /src/utils/index.test.js) for each tests. See the detail in #221	JEST_HTML_REPORTERS_URL_FOR_TEST_FILES
customInfos	array	undefined	show some custom data info in the report, example value [ {title: 'test1', value: 'test1'}, {title: 'test2', value: 'test2'}], you can also set value to a environment variable JEST_HTML_REPORTERS_CUSTOM_INFOS, see detail in #32	JEST_HTML_REPORTERS_CUSTOM_INFOS
enableMergeData	boolean	false	for default enable merge test data feature	JEST_HTML_REPORTERS_ENABLE_MERGE_DATA
dataMergeLevel	number	1	default merge test data level	JEST_HTML_REPORTERS_DATA_MERGE_LEVEL
env only	string	system default temporary directory	path to a temporary folder with attachments	JEST_HTML_REPORTERS_TEMP_DIR_PATH
stripSkippedTest	boolean	false	skip the pending tests and suites in the final report	JEST_HTML_REPORTERS_STRIP_SKIPPED_TEST
example add config options
...,
"reporters": [
  "default",
  ["jest-html-reporters", {
    "publicPath": "./html-report",
    "filename": "report.html",
    "openReport": true
  }]
]
some features.
Collapsable Test Groups
This feature regrading to #37, if a test file has many test cases, here will show a Merge Data checkbox on the expanded table. You can check it to merge data and set the merge level to control how to combine those data.

For Example merge data example

Attach screenshot to report
This feature regrading to #36, this package will a new method named addAttach.

interface IAddAttachParams {
    attach: string | Buffer;
    description: string | object;
    context: any;
    bufferFormat: string;
}
There are three params of this method, description is easy to understand. The param attach referring to the image, you can pass a buffer or string, if it was a buffer the package will help you create a dir named jest-html-reporters-attach and save that buffer as a jpg image in it under the publicPath. if you have already saved the image, just pass the image's path as the attach param. context is an optional parameter. Here can be specified context (default is this.global).

Here is an Example with puppeteer.

// Example attach with **buffer**
const { addAttach } = require("jest-html-reporters/helper");
const puppeteer = require("puppeteer");

describe("just examples", () => {
  test("test buffer", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    const data = await page.screenshot();
    await browser.close();
    await addAttach({
      attach: data,
      description: 'img 1',
    });
    await addAttach({
      attach: await fs.readFileSync('./test.mp4'),
      description: 'img 1',
      bufferFormat: 'mp4',
    });
    expect(1).toBe(1);
  });
});
// Example attach with **string**
const { addAttach } = require("jest-html-reporters/helper");
const puppeteer = require("puppeteer");
const path = require("path");

describe("just examples", () => {
  test("case string", async () => {
    const filePath = path.resolve(__dirname, "./test.jpg");
    await browser.close();
    await addAttach({
      attach: filePath,
      description: 'test google 2',
    });

    await addAttach({
      attach: 'www.example.com/test.mp4',
      description: 'test video 2',
    });
    expect(1).toBe(2);
  });
});
it will show like this example

Attach a message to the report
This feature is in regards to #63 & #64. It allows you to add a message or log something to the html report with addMsg()

/**
 * @param {object} options - options object
 * @param {string | object} options.message - message string
 * @param {any} [options.context] - custom context (optional)
 */
const addMsg = async ({ message, context }) => { ... }
Only one parameter is required. If you pass an serializable object like, it will auth using JSON.stringify(object, null, 2) to save the object and then prettified it in report. context is an optional parameter. Here can be specified context (default is this.global).

Here is an Example with Nightmare.

const { addAttach, addMsg } = require("jest-html-reporters/helper");
const Nightmare = require("nightmare");

describe("Yet another example", () => {
  test("Both addAttach & addMsg with failure", async () => {
    const nightmare = Nightmare({ show: true });
    await addMsg({ message: { won: 1, too: 2 } });
    await nightmare.goto("https://duckduckgo.com");
    const s1 = await nightmare.screenshot();
    await addAttach(s1, "test duckduckgo 1");
    await nightmare.end();
    await addMsg({ message: JSON.stringify(process, null, 2) });
    expect(2).toEqual(1);
  }, 20000);
  test("addMsg with success", async () => {
    await addMsg({ message: JSON.stringify({ free: 3, for: 4 }, null, 2) });
    expect(2).toEqual(2);
  });
});
example

Message still displays without screenshots and with a successful test example

Show a link for each test file
If user set some value to urlForTestFiles, Details table shows an icon link to each rows. The link is constructed by joining urlForTestFiles (ex: https://github.com/Hazyzh/jest-html-reporters/blob/master) and relativePath (ex: /src/utils/index.test.js) for each tests.

Details Table shows an icon link to each rows.

Readme
