const hashtagPublications = require('../utils/HashtagPublications');

module.exports = {
    async getCount(req, res) {
        try {
            const count = await hashtagPublications.getCount();

            return res.end(count);
        } catch (error) {
            return res.status(404).json({ error: 'Something is not correct. Please check params.' }); 
        }
    },
    async getPublications(req, res) {
        const { hashtag } = req.params;

        try {
            
            const publications = await hashtagPublications.getPublications(hashtag);

            return res.send(publications);
        } catch (error) {
            return res.status(404).json({ error: `It was not possible to get #${hashtag} publications. Please, check if it exists.`}); 
        }
    },
}