
class VideoManager {
    constructor() {
        this.videos = document.querySelectorAll('video');
        this.currentPlaying = null;
        this.init();
    }

    init() {
        this.videos.forEach(video => {
            video.addEventListener('play', () => this.onVideoPlay(video));
            video.addEventListener('pause', () => this.onVideoPause(video));
        });
    }

    onVideoPlay(playingVideo) {
        if (this.currentPlaying && this.currentPlaying !== playingVideo) {
            this.currentPlaying.pause();
        }
        this.currentPlaying = playingVideo;
    }

    onVideoPause(pausedVideo) {
        if (this.currentPlaying === pausedVideo) {
            this.currentPlaying = null;
        }
    }

    playVideo(videoElement) {
        if (this.currentPlaying && this.currentPlaying !== videoElement) {
            this.currentPlaying.pause();
        }
        videoElement.play();
    }

    pauseVideo(videoElement) {
        videoElement.pause();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.videoManager = new VideoManager();
});
