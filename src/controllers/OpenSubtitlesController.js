const { OpenSubtitlesService } = require('../services');

class OpenSubtitlesController {
  constructor(config = { baseUrl: null, apiKey: null }) {
    this._service = new OpenSubtitlesService(config);
  }

  login(credentials = { username: null, password: null }) {
    return this._service.login(credentials);
  }

  logout() {
    return this._service.logout();
  }

  subtitleFormats() {
    return this._service.subtitleFormats();
  }

  languages() {
    return this._service.languages();
  }

  userInformations() {
    return this._service.userInformations();
  }

  latestSubtitles(query = { languages: null, type: null }) {
    return this._service.latestSubtitles(query);
  }

  mostDownloadedSubtitles(query = { languages: null, type: null }) {
    return this._service.mostDownloadedSubtitles(query);
  }

  popularFeatures(query = { languages: null, type: null }) {
    return this._service.popularFeatures(query);
  }

  download(body = {
    file_id: null,
    sub_format: null,
    file_name: null,
    strip_html: null,
    cleanup_links: null,
    remove_adds: null,
    in_fps: null,
    out_fps: null,
    timeshift: null,
  }) {
    return this._service.download(body);
  }

  searchSubtitle(query = {
    id: null,
    imdb_id: null,
    tmdb_id: null,
    type: null,
    query: null,
    languages: null,
    moviehash: null,
    user_id: null,
    hearing_impaired: null,
    foreign_parts_only: null,
    trusted_sources: null,
    machine_translated: null,
    ai_translated: null,
    order_by: null,
    order_direction: null,
    parent_feature_id: null,
    parent_imdb_id: null,
    parent_tmdb_id: null,
    season_number: null,
    episode_number: null,
    year: null,
    moviehash_match: null,
  }) {
    return this._service.searchSubtitle(query);
  }

  searchFeatures(query = {
    query: null,
    type: null,
    feature_id: null,
    imdb_id: null,
    tmdb_id: null,
    year: null,
  }) {
    return this._service.searchFeatures(query);
  }
}

module.exports = OpenSubtitlesController;
