const play = ({
            spotify_uri,
            playerInstance: {
                _options: {
                    getOAuthToken,
                    id
                }
            }
        }) => {
            getOAuthToken(access_token => {
                fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        uris: ['spotify:user:spotify:playlist:37i9dQZF1DX5WkSQEMTURo']
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${'BQDYYxHO2hnIqolYwO2XEl_HSPLXc3GrFyhA0c4jSa100gvngCs3Am_f7AVoSp78dH8wr0aqVP5nLoTuoBwWY0VfFkmql2GCa4J2uYPRjB8ddrEnKRZ5kZo'}`
                    },
                });
            });
        };

        var player = new Spotify.Player({
            name: 'Music Playlist',
            getOAuthToken: callback => {
                // Run code to get a fresh access token
                // Connect to the player!
                player.connect().then(success => {
                    if (success) {
                        console.log("The Web Playback SDK successfully connected to Spotify!");
                    }
                })
                player.disconnect()
                callback('BQDYYxHO2hnIqolYwO2XEl_HSPLXc3GrFyhA0c4jSa100gvngCs3Am_f7AVoSp78dH8wr0aqVP5nLoTuoBwWY0VfFkmql2GCa4J2uYPRjB8ddrEnKRZ5kZoV9hSqF3MK1eR9scL5UKfP2SFDYSeyssYwzt8emOubs8sLjGg94obbcy1TyLiKHw');
            },
            volume: 0.5
        });

        play({
            playerInstance: new Spotify.Player({
                name: "Spotify Music Playlist"
            }),
            spotify_uri: 'spotify:playlist:37i9dQZF1DX5WkSQEMTURo',
        });

        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = 'BQDYYxHO2hnIqolYwO2XEl_HSPLXc3GrFyhA0c4jSa100gvngCs3Am_f7AVoSp78dH8wr0aqVP5nLoTuoBwWY0VfFkmql2GCa4J2uYPRjB8ddrEnKRZ5kZoV9hSqF3MK1eR9scL5UKfP2SFDYSeyssYwzt8emOubs8sLjGg94obbcy1TyLiKHw';
            const player = new Spotify.Player({
                name: 'Web Playback SDK Quick Start Player',
                getOAuthToken: cb => {
                    cb(token);
                }
            });

            // Error handling
            player.addListener('initialization_error', ({
                message
            }) => {
                console.error(message);
            });
            player.addListener('authentication_error', ({
                message
            }) => {
                console.error(message);
            });
            player.addListener('account_error', ({
                message
            }) => {
                console.error(message);
            });
            player.addListener('playback_error', ({
                message
            }) => {
                console.error(message);
            });

            // Playback status updates
            player.addListener('player_state_changed', state => {
                console.log(state);
            });

            // Ready
            player.addListener('ready', ({
                device_id
            }) => {
                console.log('Ready with Device ID', "c349add90ccf047f4e737492b69ba912bdc55f6a");
            });

            // Removes all "ready" events
            player.removeListener('ready');
            // Remove a specific "ready" listener
            player.removeListener('ready', yourCallback)

            // Not Ready
            player.addListener('not_ready', ({
                device_id
            }) => {
                console.log('Device ID has gone offline', "c349add90ccf047f4e737492b69ba912bdc55f6a");
            });

            player.addListener('player_state_changed', ({
                position,
                duration,
                track_window: {
                    current_track
                }
            }) => {
                console.log('Currently Playing', current_track);
                console.log('Position in Song', position);
                console.log('Duration of Song', duration);
            });

            player.getCurrentState().then(state => {
                if (!state) {
                    console.error('User is not playing music through the Web Playback SDK');
                    return;
                }

                let {
                    current_track,
                    next_tracks: [next_track]
                } = state.track_window;

                console.log('Currently Playing', current_track);
                console.log('Playing Next', next_track);
            });

            player.setName("Music Playlist").then(() => {
                console.log('Player name updated!');
            });

            player.getVolume().then(volume => {
                let volume_percentage = volume * 100;
                console.log(`The volume of the player is ${volume_percentage}%`);
            });

            player.setVolume(0.5).then(() => {
                console.log('Volume updated!');
            });

            player.pause().then(() => {
                console.log('Paused!');
            });

            player.resume().then(() => {
                console.log('Resumed!');
            });
            player.togglePlay().then(() => {
                console.log('Toggled playback!');
            });

            player.seek(60 * 1000).then(() => {
                console.log('Changed position!');
            });

            player.previousTrack().then(() => {
                console.log('Set to previous track!');
            });

            player.nextTrack().then(() => {
                console.log('Skipped to next track!');
            });

            player.on('initialization_error', ({
                message
            }) => {
                console.error('Failed to initialize', message);
            });

            player.on('authentication_error', ({
                message
            }) => {
                console.error('Failed to authenticate', message);
            });

            player.on('account_error', ({
                message
            }) => {
                console.error('Failed to validate Spotify account', message);
            });

            player.on('playback_error', ({
                message
            }) => {
                console.error('Failed to perform playback', message);
            });

            {
                device_id: "c349add90ccf047f4e737492b69ba912bdc55f6a"
            }

        };
