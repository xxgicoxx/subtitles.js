const { request } = require('../utils');

const { apiConfig } = require('../configs');

class SubtitlesService {
  constructor(config) {
    this.config = config;
    this.headers = {
      'Api-Key': this.config.apiKey,
      'Content-Type': 'application/json',
    };
  }

  /**
   * /api/v1/subtitles
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json/paths/~1api~1v1~1subtitles/get
   * @param {Object} options Query parameters
   *
   * @returns {Promise} Promise
   */
  async search(options) {
    const subtitles = await request({
      url: `${apiConfig.url}${apiConfig.subtitles.subtitles}`,
      qs: options,
      headers: this.headers,
    });

    return subtitles;
  }
}

module.exports = SubtitlesService;
