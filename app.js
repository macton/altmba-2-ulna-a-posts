const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const Records = require('spike-records')
const locals = {}

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({ locals }),
  postcss: cssStandards(),
  babel: jsStandards(),
  plugins: [new Records({
    addDataTo: locals,
    libby: { url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Faltmba11.altmba.com%2Fauthor%2Flibbyschanzmeyer%2Ffeed%2F' },
    cheryl: { url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Faltmba11.altmba.com%2Fauthor%2Fcheryljohnson%2Ffeed%2F' },
    sam: { url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Faltmba11.altmba.com%2Fauthor%2Fsamlynd%2Ffeed%2F' },
    jim: { url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Faltmba11.altmba.com%2Fauthor%2Fjameshoward%2Ffeed%2F' },
    covington: { url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Faltmba11.altmba.com%2Fauthor%2Fcovingtondoan%2Ffeed%2F' },
  })]
}
