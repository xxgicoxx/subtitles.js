const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

class OpenSubtitlesService {
  constructor(config) {
    this._baseUrl = config.baseUrl || 'https://api.opensubtitles.com/api';
    this._apiKey = config.apiKey;
    this._token = '';
    this._headers = {
      'Api-Key': this._apiKey,
      'Content-Type': 'application/json',
    };
  }

  async login(credentials) {
    try {
      const login = await fetch(`${this._baseUrl}/v1/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: this._headers,
      });

      const json = await login.json();
      this._token = json.token;

      return json;
    } catch (error) {
      return error;
    }
  }

  async logout() {
    try {
      const logout = await fetch(`${this._baseUrl}/v1/logout`, {
        method: 'DELETE',
        headers: { ...this._headers, Authorization: this._token },
      });

      return logout.json();
    } catch (error) {
      return error;
    }
  }

  async subtitleFormats() {
    try {
      const formats = await fetch(`${this._baseUrl}/v1/infos/formats`, {
        method: 'GET',
        headers: this._headers,
      });

      return formats.json();
    } catch (error) {
      return error;
    }
  }

  async languages() {
    try {
      const languages = await fetch(`${this._baseUrl}/v1/infos/languages`, {
        method: 'GET',
        headers: this._headers,
      });

      return languages.json();
    } catch (error) {
      return error;
    }
  }

  async userInformations() {
    try {
      const user = await fetch(`${this._baseUrl}/v1/infos/user`, {
        method: 'GET',
        headers: { ...this._headers, Authorization: this._token },
      });

      return user.json();
    } catch (error) {
      return error;
    }
  }

  async latestSubtitles(query) {
    try {
      const params = new URLSearchParams();
      Object.keys(query).forEach((key) => params.append(key, query[key]));

      const latest = await fetch(`${this._baseUrl}/v1/discover/latest?${params}`, {
        method: 'GET',
        headers: this._headers,
      });

      return latest.json();
    } catch (error) {
      return error;
    }
  }

  async mostDownloadedSubtitles(query) {
    try {
      const params = new URLSearchParams();
      Object.keys(query).forEach((key) => params.append(key, query[key]));

      const mostDownloaded = await fetch(`${this._baseUrl}/v1/discover/most_downloaded?${params}`, {
        method: 'GET',
        headers: this._headers,
      });

      return mostDownloaded.json();
    } catch (error) {
      return error;
    }
  }

  async popularFeatures(query) {
    try {
      const params = new URLSearchParams();
      Object.keys(query).forEach((key) => params.append(key, query[key]));

      const popular = await fetch(`${this._baseUrl}/v1/discover/popular?${params}`, {
        method: 'GET',
        headers: this._headers,
      });

      return popular.json();
    } catch (error) {
      return error;
    }
  }

  async download(body) {
    try {
      const download = await fetch(`${this._baseUrl}/v1/download`, {
        method: 'POST',
        headers: { ...this._headers, Authorization: this._token },
        body: JSON.stringify(body),
      });

      return download.json();
    } catch (error) {
      return error;
    }
  }

  async searchSubtitle(query) {
    try {
      const params = new URLSearchParams();
      Object.keys(query).forEach((key) => params.append(key, query[key]));

      const subtitles = await fetch(`${this._baseUrl}/v1/subtitles?${params}`, {
        method: 'GET',
        headers: this._headers,
      });

      return subtitles.json();
    } catch (error) {
      return error;
    }
  }

  async searchFeatures(query) {
    try {
      const params = new URLSearchParams();
      Object.keys(query).forEach((key) => params.append(key, query[key]));

      const features = await fetch(`${this._baseUrl}/v1/features?${params}`, {
        method: 'GET',
        headers: this._headers,
      });

      return features.json();
    } catch (error) {
      return error;
    }
  }
}

module.exports = OpenSubtitlesService;
