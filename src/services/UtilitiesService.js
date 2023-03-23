const { request } = require('../utils');

const { apiConfig } = require('../configs');

class UtilitiesService {
  constructor(config) {
    this.config = config;
    this.headers = {
      'Api-Key': this.config.apiKey,
      'Content-Type': 'application/json',
    };
  }

  /**
   * /api/v1/utilities/guessit
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/7783e082edcf7-guessit
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async guessit(options) {
    const features = await request({
      url: `${apiConfig.url}${apiConfig.utilities.guessit}`,
      qs: options,
      headers: this.headers,
    });

    return features;
  }
}

module.exports = UtilitiesService;
