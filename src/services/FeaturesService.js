const { request } = require('../utils');

const { apiConfig } = require('../configs');

class FeaturesService {
  constructor(config, ratelimiter) {
    this.config = config;
    this.ratelimiter = ratelimiter;
    this.headers = {
      'Api-Key': this.config.apiKey,
      'Content-Type': 'application/json',
    };
  }

  /**
   * /api/v1/features
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json/paths/~1api~1v1~1features/get
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async search(options) {
    const features = await request(this.ratelimiter, {
      url: `${apiConfig.url}${apiConfig.features.features}`,
      qs: options,
      headers: this.headers,
    });

    return features;
  }
}

module.exports = FeaturesService;
