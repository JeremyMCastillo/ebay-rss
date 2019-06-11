const Parser = require('rss-parser');

function EbayRss(options) {
  if (!(this instanceof EbayRss)) return new EbayRss(options);

  options = options || {};

  // Default pptions
  this.options = {
    baseSearchUrl: 'https://www.ebay.com/sch/i.html',
    defaultCategory: 176985
  };

  // Override options passed in
  Object.keys(options).forEach((prop) => {
    this.options[prop] = options[prop];
  });
}

EbayRss.prototype = {
  search(keywords, categoryId) {
    if (!keywords) {
      throw new Error('Keywords are missing.');
    }
    var categoryParameter = categoryId || this.options.defaultCategory;

    var searchUrl = this.options.baseSearchUrl;
    searchUrl += `?_nkw=${encodeURIComponent(keywords.toLowerCase())}`;
    searchUrl += `&_sacat=${categoryParameter.toString()}&_rss=1`;

    var parser = new Parser({
      customFields: {
        item: [
          ['rx:BuyItNowPrice', 'BuyItNowPrice'],
          ['rx:CurrentPrice', 'CurrentPrice'],
          ['rx:EndTime', 'EndTime'],
          ['rx:AuctionType', 'AuctionType']
        ]
      }
    });
    return parser.parseURL(searchUrl);
  }
};

module.exports = EbayRss;
