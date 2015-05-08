var videoList = [];

var Video = function(name, url, title, description) {
	this.name = name;
	this.url = url;
	this.title = title;
	this.description = description;
	this.slug = this.title.toLowerCase().replace(/ /g, '-');
};

var addVideo = function(name, url, title, description) {
	var newVideo = new Video(name, url, title, description);
	videoList.push(newVideo);
};

var findVideo = function(slug) {
	for (var i = 0; i < videoList.length; i++) {
		if(videoList[i].slug === slug) {
			return videoList[i];
		}
	}
};

module.exports = {
	Video: Video,
	videoList: videoList,
	addVideo: addVideo
};

var waidalal = new Video('Scott Bears','//www.youtube.com/embed/eItER27Wggo&list=PLKouOAEZlgmk6bv4YW3G5LHwtJvYRXkZ6', 'Waidalal Waidalal', 'Traditional Mauritanian music by Khalifa Ould Eide and Dimi Mint Abba');
videoList.push(waidalal);