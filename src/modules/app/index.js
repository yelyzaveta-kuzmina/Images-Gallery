import React, { Component } from 'react';
import { ImagesGallery } from 'components/images-gallery/index.js';
import Slider from 'rc-slider';
import SearchBar from '../../components/search-bar';
import styles from './styles.module.scss';

const images = [
  'https://wallpapercave.com/wp/wp2033218.jpg',
  'http://www.hdnicewallpapers.com/Walls/Big/Waterfalls%20and%20Waterscape/Beautiful_Australian_Waterfall_HD_Wallpaper.jpg',
  'https://i.imgur.com/bJ4shYo.jpg',
  'https://i.pinimg.com/originals/c1/db/a3/c1dba3cc2297526cef7e49a8a926302c.jpg',
  'https://wpblink.com/sites/default/files/wallpaper/earth/68502/iguazu-falls-wallpapers-hd-68502-8015815.png',
  'https://steemitimages.com/DQmVP5sFkgwjVdehE8CKgUw31L4GqeiCUeexQbR1DD9ZHKZ/29.jpg'
];

class App extends Component {
  state = {
    isSlideshowActive: false,
    slideshowInterval: 0,
    isSliderVisible: false,
  };

  onToggleSlideshow = () => this.setState({
    isSlideshowActive: !this.state.isSlideshowActive,
    isSliderVisible: !this.state.isSliderVisible
  });

  onIntervalChange = (value) => this.setState({
    slideshowInterval: value
  });

  render() {
    const { isSlideshowActive, slideshowInterval } = this.state;
    const { isSliderVisible } = this.state;

    console.log(isSliderVisible);

    return (
      <div>
        <header className={styles.header}>
          Mykola Header
        </header>
        <main>
        <SearchBar onSubmit={this.onSearchSubmit}/>
          <ImagesGallery
          slideshowInterval={isSlideshowActive && slideshowInterval}
          images={images} />

          <div>
            <label>
              <input 
                type="checkbox"
                checked={isSlideshowActive}
                onChange={this.onToggleSlideshow}/>
              Slideshow
            </label>
            {isSliderVisible && (
              <Slider
                min={0}
                max={5000}
                value={slideshowInterval}
                onChange={this.onIntervalChange} />
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
