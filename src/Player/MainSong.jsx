import React from 'react'
import { withCustomAudio } from 'react-soundplayer/addons'
import {
  PlayButton,
  Timer,
  VolumeControl,
  Progress,
  PrevButton,
  NextButton,
} from 'react-soundplayer/components'

class MainSong extends React.Component {
  render() {
    const {
      currentTime,
      duration,
      isMuted,
      playing,
      preloadType,
      seeking,
      soundCloudAudio,
      trackTitle,
      volume,
    } = this.props

    return (
      <React.Fragment>
        <div className="flex-column items-center bg-darken-1 red rounded">
          <Progress
            value={currentTime / duration * 100 || 0}
            soundCloudAudio={soundCloudAudio}/>
          <div className="flex items-center">
            <PrevButton
              soundCloudAudio={soundCloudAudio}/>
            <PlayButton
              className="flex"
              playing={playing}
              seeking={seeking}
              soundCloudAudio={soundCloudAudio}
            />
            <NextButton
              soundCloudAudio={soundCloudAudio}/>
            <VolumeControl
              className="flex items-center"
              rangeClassName="mb1"
              isMuted={isMuted}
              volume={volume}
              soundCloudAudio={soundCloudAudio}
            />
            <div className="h5 mx2 caps truncated-text">{trackTitle}</div>
            <Timer
              className="h6 mr1"
              duration={duration}
              currentTime={currentTime}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withCustomAudio(MainSong)
