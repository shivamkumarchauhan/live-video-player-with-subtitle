if (Hls.isSupported()) {
	var video = document.getElementById('video');
	var hls = new Hls();
	hls.attachMedia(video);
	// You can use any live URL. This is a dummy url.
	var url = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
	hls.loadSource(url);
	hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
		for(var i=0; i<data.subtitleTracks.length; i++){
			console.log(data.subtitleTracks[i]);
		}
	});
	
	function setSub(){
		var checkedElement = document.getElementById('eng_sub');
		if(checkedElement.checked){
			hls.subtitleTrack = 1;
		}else{
			hls.subtitleTrack = 0;
		}
	}
  
	hls.on(Hls.Events.MANIFEST_LOADED, function (event, data) {
		console.log(
		  'manifest loaded, found ' + data.levels.length + ' quality level'
		);
		// For Default Subtitle
		hls.subtitleTrack = 0;
		hls.subtitleDisplay = true;
		video.play();
	});
}
