const fetch = require('node-fetch');
const fetchSettings = { method: 'Get' };

const instagramUrl = 'https://www.instagram.com/';
const tagsUrl = instagramUrl + 'explore/tags/';
const queryParam = '/?__a=1';

module.exports = {
    async getPublications(hashtag) {
        const requestUrl = tagsUrl + hashtag + queryParam;

        try {
            const response = await fetch(requestUrl, fetchSettings);
            const data = await response.json();
    
            const brutePubs = data.graphql.hashtag.edge_hashtag_to_media.edges;
        
            let publications = [];
        
            let requestPubUrl;
            for (let i = 0; i < brutePubs.length; i++) {
        
                requestPubUrl = instagramUrl + 'p/' + brutePubs[i].node.shortcode + queryParam;
        
                const responsePub = await fetch(requestPubUrl, fetchSettings);
                const dataPub = await responsePub.json();
        
                const publication = {
                    owner: {
                        id: dataPub.graphql.shortcode_media.owner.id,
                        username: dataPub.graphql.shortcode_media.owner.username,
                        picUrl: dataPub.graphql.shortcode_media.owner.profile_pic_url,
                    },
                    likes: brutePubs[i].node.edge_liked_by.count,
                    description: brutePubs[i].node.accessibility_caption,
                    url: instagramUrl + 'p/' + brutePubs[i].node.shortcode,
                    thumbnail: brutePubs[i].node.display_url,
                }
        
                publications.push(publication);    
            }

            return publications;
        } catch (error) {
            return ({ error: 'It was not possible to get publications of #' + hashtag });  
        }
    }
}

