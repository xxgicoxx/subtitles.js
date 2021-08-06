# Subtitles.js
OpenSubtitles API wrapper for Node.js.

<p align="center">
  <img src="https://i.imgur.com/LFHvRpi.png ">
</p>

# Docs
Official OpenSubtitles [Documentation](https://opensubtitles.stoplight.io/docs/opensubtitles-api/open_api.json).

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install subtitles.js
````

# Credentials
### 1. OpenSubtitles
````
# Account
Create an OpenSubtitles (https://www.opensubtitles.com/) account.

# API Key
You can obtain an api key in the API consumers (https://www.opensubtitles.com/consumers) section of your profile. Create a consumer object that will contain the required api key.
````

# Example
```javascript
const OpenSubtitles = require('subtitles.js');

const openSubtitles = new OpenSubtitles({
  apiKey: 'OPEN_SUBTITLES_API_KEY',
});

async function example() {
  try {
    await openSubtitles.login({
      username: 'OPEN_SUBTITLES_USERNAME',
      password: 'OPEN_SUBTITLES_PASSWORD',
    });

    const formats = await openSubtitles.subtitleFormats();
    console.log(formats);

    const languages = await openSubtitles.languages();
    console.log(languages);

    const user = await openSubtitles.userInformations();
    console.log(user);

    const latest = await openSubtitles.latestSubtitles();
    console.log(latest);

    const most = await openSubtitles.mostDownloadedSubtitles();
    console.log(most);

    const popular = await openSubtitles.popularFeatures();
    console.log(popular);

    const file = await openSubtitles.download({ file_id: 2864502 });
    console.log(file);

    const subtitles = await openSubtitles.searchSubtitle({ query: 'Breaking Bad S01E02' });
    console.log(subtitles);

    const features = await openSubtitles.searchFeatures({ query: 'Breaking' });
    console.log(features);

    const logout = await openSubtitles.logout();
    console.log(logout);
  } catch (error) {
    console.error(error);
  }
}
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [OpenSubtitles](https://www.opensubtitles.com/)