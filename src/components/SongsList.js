import React from 'react';
import { connect } from 'react-redux';

const SongsList = ({ songs }) => {
    return (
        <ul>
            {songs.map((song, index) => {
                return <li key={index}>{song.title}</li>;
            })}
        </ul>
    );
};

const mapStateToProps = state => {
    return { songs: state.songsList };
};

export default connect(mapStateToProps)(SongsList);
