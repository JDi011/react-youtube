import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideDetail from './VideoDetail';
const KEY = 'AIzaSyArNCYYDKxmWb8Fl4KWz778G1_kbVuqdcI';

class App extends React.Component{
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('Jugen Dharia');
    }

    onTermSubmit = async term => {
       const response = await youtube.get('/search', {
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params:{
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: "video",
                key: KEY
            }
       });
        this.setState({ 
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        // console.log('From the App!', video);
        this.setState({ selectedVideo: video });
    };

    render(){
        return (
        <div className="ui container"> 
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                <div className="eleven wide column">
                    <VideDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;