import {defineStore} from "pinia";
import {Howl} from "howler";
import helper from "@/includes/helper";

export default defineStore("player", {
    state: () => ({
        current_song: {},
        sound: {},
        seek: "00:00",
        duration: "00:00",
        playerProgress: "0%",
    }),
    actions: {
        async newSong(song) {
            if (this.sound instanceof Howl) {
                this.sound.unload();
            }

            this.current_song = song;

            this.sound = new Howl({
                src: [song.url],
                html5: true,
            });

            this.sound.play();

            this.sound.on("play", () => {
                requestAnimationFrame(this.progress);
            });
        },
        async toggleAudio() {
            if (!this.sound.playing) {
                return;
            }

            if (this.sound.playing()) {
                this.sound.pause();
            } else {
                this.sound.play()
            }
        },
        progress() {
            this.seek = helper.formatTime(this.sound.seek());
            this.duration = helper.formatTime(this.sound.duration());

            this.playerProgress = `${(this.sound.seek() / this.sound.duration()) * 100}%`

            if (this.sound.playing()) {
                requestAnimationFrame(this.progress);
            }
        },
        updateSeek(event) {
            console.log("event", event)
            // if (!state.sound.playing) {
            //     return;
            // }
            const { x, width } = event.currentTarget.getBoundingClientRect();

            // Document - 2000, Timeline - 1000, clientX - 1000, Distance - 500
            const clickX = event.clientX - x;
            console.log("event.clientX", event.clientX);
            console.log("clickX", clickX)
            console.log("width", width);

            const percentage = clickX / width;
            const seconds = this.sound.duration() * percentage;

            this.sound.seek(seconds);
            this.sound.once("seek", this.progress);
        }
    },
    getters: {
        playing: (state) => {
          if (state.sound) {
              return state.sound.playing();
          }

          return false;
        },
    }
});