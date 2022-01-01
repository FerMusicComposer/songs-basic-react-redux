//REDUCERS
import { combineReducers } from 'redux';

const songsListReducer = () => {
    return [
        { title: 'Pin the tail on the donkey', duration: '3:16' },
        { title: 'Whats my age again?', duration: '3:16' },
        { title: 'I want it that way', duration: '3:16' },
        { title: 'Overkill', duration: '3:16' },
        { title: 'God lives through', duration: '3:16' },
        { title: 'Heaven', duration: '3:16' },
        { title: 'You give love a bad name', duration: '3:16' },
        { title: 'Gravity', duration: '3:16' },
        { title: 'Take on me', duration: '3:16' },
        { title: 'Rossana', duration: '3:16' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songsList: songsListReducer,
    selectedSong: selectedSongReducer,
});
