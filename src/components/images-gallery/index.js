import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ImagesGallery extends React.Component {
  slideshowIntervalId = undefined;

  state = {
    activeImageIndex: 0
  };

  componentDidMount() {
    this.startSlideshow();
  }

  componentDidUpdate(prevProps) {
    const { slideshowInterval } = this.props;
    const slideshowIntervalChanged = slideshowInterval !== prevProps.slideshowInterval;

    if (!slideshowInterval) {
      this.stopSlideshow();
    }

    if (slideshowIntervalChanged) {
      this.startSlideshow();
    }
  }

  startSlideshow = () => {
    const { slideshowInterval } = this.props;

    if (slideshowInterval) {
      this.stopSlideshow();
      this.slideshowIntervalId = setInterval(this.onNextImageShow, slideshowInterval);
    }
  };

  stopSlideshow = () => {
    clearInterval(this.slideshowIntervalId);
  };

  onPictureChange = (newIndex) => {
    this.setState({
      activeImageIndex: newIndex
    });
  };

  onNextImageShow = () => {
    const activeImageIndex = this.state.activeImageIndex;
    this.setState({
      activeImageIndex: (activeImageIndex + 1) % this.props.images.length
    });
    this.startSlideshow();
  };

  onPreviousImageShow = () => {
    const activeImageIndex = this.state.activeImageIndex;
    this.setState({
      activeImageIndex: activeImageIndex > 0
        ? activeImageIndex - 1
        : this.props.images.length - 1
    });
    this.startSlideshow();
  };

  render() {
    const { activeImageIndex } = this.state;
    const { images } = this.props;

    return (
      <div className={styles.imagesGallery}>
        <div className={styles.mainView}>
          <button
            className={styles.leftButton} 
            onClick={this.onPreviousImageShow}>
            <FontAwesomeIcon icon="angle-double-left" />
          </button>
          <img alt={''} src={ images[activeImageIndex] } />
          <button
            className={styles.rightButton}
            onClick={this.onNextImageShow}>
            <FontAwesomeIcon icon="angle-double-right" />
          </button>
        </div>

        <div className={styles.imagesList}>
          {images.map((image, index) => {
            const isActive = activeImageIndex === index;
            const className = isActive
              ? styles.imageThumbnail + ' ' + styles.active
              : styles.imageThumbnail;

            return (
              <div
                key={image}
                className={className}
                onClick={() => this.onPictureChange(index)}>
                <img alt={''} src={image}  />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
