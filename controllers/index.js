var video = require('../models/videos.js');

var indexController = {
	index: function(req, res) {
		var videoList = video.videoList;
		res.render('index', {
			videoList: videoList
		});
	},

	view: function(req, res) {
		var waidalalUrl = video.videoList[0].url;
		var currentVideo = video.findVideo(req.params.videoTitle);
		res.render('view', {
			waidalalUrl: waidalalUrl
		});
	},

	submit: function(req, res) {
		res.render('submit');
	},

	formSubmit: function(req, res) {
		video.addVideo(req.body.name, req.body.url, req.body.title, req.body.description);
		res.redirect('/');
	},

	addVideo: function(req, res) {
		video.addVideo();
		
	}

};

module.exports = indexController;