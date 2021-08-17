# Subtitles.js
OpenSubtitles API wrapper for Node.js.

<p align="center">
  <img src="https://i.imgur.com/LFHvRpi.png ">
</p>

# Docs
[Documentation](https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json)

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install subtitles.js
````

# Credentials
### 1. OpenSubtitles
````
# Create an OpenSubtitles account
Create an OpenSubtitles account on https://opensubtitles.com/.

# API Key
Create an API key on https://www.opensubtitles.com/consumers.
````

# Example
```javascript
const OpenSubtitles = require('subtitles.js');

const openSubtitles = new OpenSubtitles({
  apiKey: 'OPENSUBTITLES_API_KEY',
});

(async () => {
  try {
    const login = await openSubtitles.login({
      username: 'OPENSUBTITLES_USERNAME',
      password: 'OPENSUBTITLES_PASSWORD',
    });

    const { token } = login;

    const formats = await openSubtitles.infos().formats();
    console.log(formats);

    const languages = await openSubtitles.infos().languages();
    console.log(languages);

    const user = await openSubtitles.infos().user(token);
    console.log(user);

    const latest = await openSubtitles.discover().latestSubtitles();
    console.log(latest);

    const most = await openSubtitles.discover().mostDownloadedSubtitles();
    console.log(most);

    const popular = await openSubtitles.discover().popularFeatures();
    console.log(popular);

    const file = await openSubtitles.download().download(2864502, token);
    console.log(file);

    const subtitles = await openSubtitles.subtitles().search({ query: 'Breaking Bad S01E02' });
    console.log(subtitles);

    const features = await openSubtitles.features().search({ query: 'Breaking' });
    console.log(features);

    const logout = await openSubtitles.auth().logout(token);
    console.log(logout);
  } catch (error) {
    console.error(error);
  }
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [OpenSubtitles](https://www.opensubtitles.com/)