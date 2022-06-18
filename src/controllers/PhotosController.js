const { default: axios } = require("axios");
const { response } = require("express");

exports.photosCollection = async (req, res) => {
    try {
        const response= await axios.get("https://www.flickr.com/services/rest/",
        {
            params:{
                method: 'flickr.photos.search',
                api_key: process.env.API_FLICKR,
                tags: req.query.search,
                extras: 'url_n, owner_name, date_taken, views',
                page: req.query.page,
                format: 'json',
                nojsoncallback: 1,
                per_page: 12,
            }
        }
        )
        res.status(200).send(response.data.photos.photo);    
    } catch (error) {
        console.log(error.message)
    }
};