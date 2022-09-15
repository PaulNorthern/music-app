export default {
    /**
     * Format time to {minutes}:{seconds} like 01:15.
     * @param {Number} time - total time in seconds.
     * @return {string} an example 01:15.
     * */
    formatTime(time) {
        const minutes = Math.floor(time / 60) || 0;
        const seconds = Math.round(time - minutes * 60) || 0;

        return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
    },
};