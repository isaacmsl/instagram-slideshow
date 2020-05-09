# instagram-slideshow
Simple API returns hastag's publications to make a slideshow.
[Try it now!](https://instagram-slideshow.herokuapp.com/boletimsantacruz)

[Privacy](#privacy)

[How to install](#how-to-install)

[How to use](#how-to-use)

[Getting Data](#getting-data)
- [hastag](#get-hastag)


### Privacy

  **1. I am  not responsible for any wrong uses!**
  
  **2. This API can not modify or share your informations**

### How to install

In the main directory execute this command:
```
npm install
```

### How to use

Execute this command: 
```
npm start
```
If you want to set HTTP Server Port, please run this command:
```
PORT=<SET HERE> node src/server.js
```

*Important: In version 1.0.7, if hastag contains to many publications, it can take more time to show result.*

### Getting data

Now we can get hastag's publications. 

#### GET /:hastag
Returns an JSON array with hastag's publications and owner's information to each one.
Example:
```
localhost:3333/boletimsantacruz
```
```
[
  {
    "owner": {
      "id": "4473248506",
      "username": "ivanildinho_ferreira",
      "picUrl": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/15876877_1196536383715975_6370712307118374912_a.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=0vVEZg7Z_4MAX9889gr&oh=ed767a4e720d83c8a86118f05c58e150&oe=5EDF6681"
    },
    "likes": 44,
    "description": "Photo by Ivanildinho on May 09, 2020. Image may contain: text",
    "url": "https://www.instagram.com/p/B_-7ZqDA5BD",
    "thumbnail": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/96294389_694937941334583_8803843184670748643_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=SFQ3Psug1qcAX8UOCLC&oh=18279fb8079b123854824725bdda5ed3&oe=5EE11578"
  },
  {
    "owner": {
      "id": "11215517943",
      "username": "prefeiturasantacruzrn",
      "picUrl": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/90427308_218937609345536_465037369226035200_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=Qzgp3uKcqQ8AX-U6GJ6&oh=efc76d8f14ec0b2154023738ed942ef7&oe=5EDEE52D"
    },
    "likes": 246,
    "description": "Photo by Prefeitura de Santa Cruz on May 09, 2020. Image may contain: text",
    "url": "https://www.instagram.com/p/B_-6H4hg3Qo",
    "thumbnail": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/96001895_122690012758031_3404132383985120846_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=vO3dPoggbu0AX-U_R35&oh=f4e6c82e12939524b9f7660a66a8d007&oe=5EDF21A8"
  },
  ...
]
```

