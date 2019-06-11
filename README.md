# eBay RSS Parser

Parses eBay listings from their RSS search feed.

This is a thin wrapper for reading data from eBay's RSS feeds into a JSON object. Note that the RSS feeds are public and do not require any API access.

## Installation

```shell
npm install ebay-rss
```

## Usage:

```javascript
const EbayRss = require('ebay-rss');

let ebayRss = new EbayRss();
ebayRss.search('The Beatles').then(results => {
  /* Iterate results.items */
});
```

## Examples

### Search By Category

Requires eBay's category ID, which can be found here:
https://www.isoldwhat.com/getcats/

```javascript
// Searches for 'The Beatles' in Vinyl Records
ebayRss.search('The Beatles', 176985).then(results => {
  /* Iterate through results.items */
});
```

## Test

All test files are present inside the test folder. You can run using

```shell
npm run test
```

## Issues

If you are facing any issues, you can create the issues [here](https://github.com/JeremyMCastillo/ebay-rss/issues).

## Contribution

Willing to share your idea or ready to contribute, check [here](https://github.com/JeremyMCastillo/ebay-rss/blob/master/CONTRIBUTING.md)

## License

[MIT](https://github.com/JeremyMCastillo/ebay-rss/blob/master/LICENSE)
