import PropTypes from 'prop-types'
import Locale from './locale'
import { MODE } from './mode'
import { THEME } from './theme'

const playModePropTypes = PropTypes.oneOf([
  'order',
  'orderLoop',
  'singleLoop',
  'shufflePlay',
])

export default {
  audioLists: PropTypes.array.isRequired,
  locale: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf(Object.values(Locale)),
  ]),
  theme: PropTypes.oneOf(Object.values(THEME)),
  mode: PropTypes.oneOf(Object.values(MODE)),
  defaultPlayMode: playModePropTypes,
  playMode: playModePropTypes,
  drag: PropTypes.bool,
  seeked: PropTypes.bool,
  autoPlay: PropTypes.bool,
  clearPriorAudioLists: PropTypes.bool,
  autoPlayInitLoadPlayList: PropTypes.bool,
  playModeText: PropTypes.object,
  panelTitle: PropTypes.string,
  closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  openText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  clickToPlayText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  clickToPauseText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  nextTrackText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  previousTrackText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  reloadText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  volumeText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  playListsText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  toggleLyricText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  toggleMiniModeText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  destroyText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  downloadText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  emptyText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  controllerTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultPosition: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  onAudioPlay: PropTypes.func,
  onAudioPause: PropTypes.func,
  onAudioEnded: PropTypes.func,
  onAudioAbort: PropTypes.func,
  onAudioVolumeChange: PropTypes.func,
  onAudioError: PropTypes.func,
  onAudioProgress: PropTypes.func,
  onAudioSeeked: PropTypes.func,
  onAudioDownload: PropTypes.func,
  onAudioReload: PropTypes.func,
  onThemeChange: PropTypes.func,
  onAudioListsChange: PropTypes.func,
  onPlayModeChange: PropTypes.func,
  onModeChange: PropTypes.func,
  onAudioListsPanelChange: PropTypes.func,
  onAudioPlayTrackChange: PropTypes.func,
  onAudioListsDragEnd: PropTypes.func,
  onAudioLyricChange: PropTypes.func,
  showDownload: PropTypes.bool,
  showPlay: PropTypes.bool,
  showReload: PropTypes.bool,
  showPlayMode: PropTypes.bool,
  showThemeSwitch: PropTypes.bool,
  showMiniModeCover: PropTypes.bool,
  toggleMode: PropTypes.bool,
  once: PropTypes.bool,
  extendsContent: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  checkedText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  unCheckedText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  defaultVolume: PropTypes.number,
  playModeShowTime: PropTypes.number,
  bounds: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showMiniProcessBar: PropTypes.bool,
  loadAudioErrorPlayNext: PropTypes.bool,
  preload: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['auto', 'metadata', 'none']),
  ]),
  glassBg: PropTypes.bool,
  remember: PropTypes.bool,
  remove: PropTypes.bool,
  defaultPlayIndex: PropTypes.number,
  playIndex: PropTypes.number,
  lyricClassName: PropTypes.string,
  emptyLyricText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showLyric: PropTypes.bool,
  getContainer: PropTypes.func,
  getAudioInstance: PropTypes.func,
  onBeforeAudioDownload: PropTypes.func,
  autoHiddenCover: PropTypes.bool,
  spaceBar: PropTypes.bool,
  showDestroy: PropTypes.bool,
  onBeforeDestroy: PropTypes.func,
  onDestroyed: PropTypes.func,
  customDownloader: PropTypes.func,
  audioTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  responsive: PropTypes.bool,
  quietUpdate: PropTypes.bool,
  renderAudioTitle: PropTypes.func,
  mobileMediaQuery: PropTypes.string,
  volumeFade: PropTypes.shape({
    fadeIn: PropTypes.number,
    fadeOut: PropTypes.number,
  }),
}
