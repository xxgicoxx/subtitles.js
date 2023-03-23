const api = {
  url: 'https://api.opensubtitles.com/api',
  auth: {
    login: '/v1/login',
    logout: '/v1/logout',
  },
  infos: {
    formats: '/v1/infos/formats',
    languages: '/v1/infos/languages',
    user: '/v1/infos/user',
  },
  discover: {
    latest: '/v1/discover/latest',
    most_downloaded: '/v1/discover/most_downloaded',
    popular: '/v1/discover/popular',
  },
  download: {
    download: '/v1/download',
  },
  subtitles: {
    subtitles: '/v1/subtitles',
  },
  features: {
    features: '/v1/features',
  },
  utilities: {
    guessit: '/v1/utilities/guessit',
  },
};

module.exports = api;
