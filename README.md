# youtube-finder

Connect to Youtube API at ease.

## Install
```sh
$ npm install youtube-fetch-video
```

## Usage
``` js
import YTFetch from 'youtube-fetch-video';
YTFetch({
  key: YOUTUBE_API_KEY, term: this.state.term,
}, (data) => {
  this.setState({ youtube_videos: data  });
});
```

## Search
``` js
var options = {
  key: 'YouTubeAPIKey',
  term: 'Coldplay'
}
YTFetch(options, function (err, data) {
  // your custom code
});
```

### Mandatory parameters
``` json
key
    Unique Youtube API Key
term
    Video search term

```
## filters and additional parameters

``` json
* maxResults
    Acceptable values are {0/} a 50, both inclusive. The default is 5.

* order
    The parameter order specifies the sort type. Default is 'relevance'.

* type
    The acceptable values are:
        * channel
        * playlist
        * video
    default value is: video

* videoDuration
    Acceptable values are:
        * any: do not filter search results videos by duration. This is the default value.
        * long: Include only videos more than 20 minutes.
        * medium: Include only videos between 4 and 20 minutes (inclusive) in length.
        * short: Include only videos of less than 4 minutes.

more info at website official: https://developers.google.com/youtube/v3/docs/search/list#parmetros
```

## License MIT

Copyright (c) 2017 - Kailaash Balachandran
