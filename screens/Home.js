import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

const MAX_RESULT = 15;
const PLAYLIST_ID = "PLScC8g4bqD47c-qHlsfhGH3j6Bg7jzFy-";
const API_KEY = "XXX_API_KEY";

export default class Home extends Component<{}> {
  
  home(){
    Actions.home();
  }

  watchVideo(video_url){
    Actions.watchvideo({video_url: video_url});
  }

  componentWillMount() {
    this.fetchPlaylistData();
  }

  fetchPlaylistData = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`);
    const json = await response.json();
    this.setState({ videos: json['items']});
    console.log(this.state.videos)
  };

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }
  }

  render() {
    const videos = this.state.videos;

    return (
      <SafeAreaView style={styles.safeArea}>
            <FlatList
              data={this.state.videos}
              renderItem={
                ({item}) => 
                <TouchableOpacity
                    style={styles.demacate}
                    onPress={() => this.watchVideo(item.contentDetails.videoId)}
                >
                <Text 
                  style={styles.item} 
                > 
                {item.snippet.title} 
                </Text>
                </TouchableOpacity>
              }
            />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  demacate: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    borderRadius:10
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
});