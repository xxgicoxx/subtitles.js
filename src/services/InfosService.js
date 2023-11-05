const { request } = require('../utils');

const { apiConfig } = require('../configs');

class InfosService {
  constructor(config, ratelimiter) {
    this.config = config;
    this.ratelimiter = ratelimiter;
    this.headers = {
      'Api-Key': this.config.apiKey,
      'Content-Type': 'application/json',
      'User-Agent': `${config.appName} v${config.appVersion}`
    };
  }

  /**
   * /api/v1/infos/formats
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json/paths/~1api~1v1~1infos~1formats/get
   *
   * @returns {Promise} Promise
   */
  async formats() {
    const formats = await request(this.ratelimiter, {
      url: `${apiConfig.url}${apiConfig.infos.formats}`,
      headers: this.headers,
    });

    return formats;
  }

  /**
   * /api/v1/infos/languages
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json/paths/~1api~1v1~1infos~1languages/get
   *
   * @returns {Promise} Promise
   */
  async languages() {
    const languages = await request(this.ratelimiter, {
      url: `${apiConfig.url}${apiConfig.infos.languages}`,
      headers: this.headers,
    });

    return languages;
  }

  /**
   * /api/v1/infos/user
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json/paths/~1api~1v1~1infos~1user/get
   * @param {string} token Token
   *
   * @returns {Promise} Promise
   */
  async user(token) {
    const user = await request(this.ratelimiter, {
      url: `${apiConfig.url}${apiConfig.infos.user}`,
      headers: { ...this.headers, Authorization: `Bearer ${token}` },
    });

    return user;
  }
}

module.exports = InfosService;
