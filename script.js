SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
SC.get('/tracks/293', function(track) {
SC.oEmbed(track.permalink_url, document.getElementById('player'));
});
