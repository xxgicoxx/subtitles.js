const { constants, request } = require('../utils');

const { apiConfig } = require('../configs');

class DownloadService {
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
   * /api/v1/download
   *
   * @see https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json/paths/~1api~1v1~1download/post
   * @param {number} fileId File ID
   * @param {string} token Token
   * @param {Object} options Request body
   *
   * @returns {Promise} Promise
   */
  async download(fileId, token, options) {
    const download = await request(this.ratelimiter, {
      url: `${apiConfig.url}${apiConfig.download.download}`,
      method: constants.POST,
      headers: { ...this.headers, Authorization: `Bearer ${token}` },
      body: { file_id: fileId, ...options },
    });

    return download;
  }
}

module.exports = DownloadService;
