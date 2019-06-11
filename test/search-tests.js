const nock = require('nock');
const chai = require('chai');
const EbayRss = require('../index');

const should = chai.should();

describe('RSS Search Tests', () => {
  it('parses eBays RSS search', (done) => {
    nock('https://www.ebay.com')
      .get('/sch/i.html')
      .query(true)
      .replyWithFile(200, `${__dirname}/files/beatles.xml`);

    var eBayRss = new EbayRss();
    eBayRss.search('The Beatles').then((results) => {
      should.exist(results);
      done();
    });
  });
});
