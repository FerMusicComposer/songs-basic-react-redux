import React from 'react';
import { selectSong } from '../actions';
import { connect } from 'react-redux';

const SongsList = ({ songs, selectSong }) => {
    return (
        <div className="ui divided list">
            {songs.map((song, index) => {
                return (
                    <div className="item" key={index}>
                        <div className="right floated content">
                            <button onClick={() => selectSong(song)} className="ui button primary">
                                Select
                            </button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { songs: state.songsList };
};

export default connect(mapStateToProps, { selectSong })(SongsList);
