const { constants, request } = require('../utils');

const { apiConfig } = require('../configs');

class AuthService {
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
   * /api/v1/login
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json/paths/~1api~1v1~1login/post
   * @param {Object} credentials Request body
   *
   * @returns {Promise} Promise
   */
  async login(credentials) {
    const login = await request(this.ratelimiter, {
      url: `${apiConfig.url}${apiConfig.auth.login}`,
      method: constants.POST,
      body: credentials,
      headers: this.headers,
    });

    return login;
  }

  /**
   * /api/v1/logout
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json/paths/~1api~1v1~1logout/delete
   * @param {string} token Token
   *
   * @returns {Promise} Promise
   */
  async logout(token) {
    const logout = await request(this.ratelimiter, {
      url: `${apiConfig.url}${apiConfig.auth.logout}`,
      method: constants.DELETE,
      headers: { ...this.headers, Authorization: `Bearer ${token}` },
    });

    return logout;
  }
}

module.exports = AuthService;
