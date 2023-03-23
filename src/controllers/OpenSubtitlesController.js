const {
  AuthService,
  DiscoverService,
  DownloadService,
  FeaturesService,
  InfosService,
  SubtitlesService,
  UtilitiesService,
} = require('../services');

class OpenSubtitlesController {
  /**
   * @param {config} config Configs
   * @param {string} config.apiKey API key
   */
  constructor(config) {
    this._config = config;

    this._authService = new AuthService(this._config);
    this._discoverService = new DiscoverService(this._config);
    this._downloadService = new DownloadService(this._config);
    this._featuresService = new FeaturesService(this._config);
    this._infosService = new InfosService(this._config);
    this._subtitlesService = new SubtitlesService(this._config);
    this._utilitiesService = new UtilitiesService(this._config);
  }

  /**
   * This is used when you require a OpenSubtitles user
   */
  auth() {
    return this._authService;
  }

  /**
   * This is used when you require a OpenSubtitles infos
   */
  infos() {
    return this._infosService;
  }

  /**
   * This is used when you require a OpenSubtitles discover
   */
  discover() {
    return this._discoverService;
  }

  /**
   * This is used when you require a OpenSubtitles download
   */
  download() {
    return this._downloadService;
  }

  /**
   * This is used when you require a OpenSubtitles subtitles
   */
  subtitles() {
    return this._subtitlesService;
  }

  /**
   * This is used when you require a OpenSubtitles features
   */
  features() {
    return this._featuresService;
  }

  /**
   * This is used when you require a OpenSubtitles utilities
   */
  utilities() {
    return this._utilitiesService;
  }
}

module.exports = OpenSubtitlesController;
