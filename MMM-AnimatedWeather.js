/* Magic Mirror
 * Module: MMM-AnimatedWeather
 *
 * By Muhammad Ali https://alinaeem.com
 * MIT Licensed.
 */
var self;
Module.register("MMM-AnimatedWeather", {

    defaults: {
        theme: "nothing"
    },

    getStyles: function () {
        return ["MMM-AnimatedWeather.css"]
    },

    start: function () {
        self = this;
    },

    getDom: function () {
        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";

        if (this.config.theme == "rain") {
            var rain = document.createElement("div");
            rain.className = "rain";
            wrapper.appendChild(rain);
        } else if (this.config.theme == "thunderstorm") {
            var lightning = document.createElement("div");
            lightning.className = "rain lightning";
            wrapper.appendChild(lightning);
        }
        return wrapper;
    },

    notificationReceived: function (notification, payload, sender) {
        if (notification == "WEATHER_WALLPAPER") {
            if (payload == "Rain") {
                this.config.theme = "rain";
            } else if (payload == "Thunderstorm") {
                this.config.theme = "thunderstorm";
            } else if (payload == "Snow") {
                this.config.theme = "snow";
            } else {
                this.config.theme = "nothing";
            }
            this.updateDom();
            this.testWeather();
        }
    },

    testWeather: function () {
        setTimeout(function () {
            self.sendNotification("WEATHER_WALLPAPER", "Thunderstorm");
        }, 8000);
    }
});
