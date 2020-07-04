/* Magic Mirror
 * Module: MMM-AnimatedWeather
 *
 * By Muhammad Ali https://alinaeem.com
 * MIT Licensed.
 */

Module.register("MMM-AnimatedWeather", {

	defaults: {
		theme: "nothing"
	},

	getStyles: function() {
		return [ "MMM-AnimatedWeather.css" ]
	},

	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.className = "wrapper";

		if(this.config.theme == "rain") {
			var rain = document.createElement("div");
			rain.className = "rain";
			wrapper.appendChild(rain);
		}

		return wrapper;
	},

	notificationReceived: function (notification, payload, sender) {
		if (notification == "WEATHER_WALLPAPER") {
			if (payload == "Rain") {
				this.config.theme = "rain";
			} else if (payload == "Snow") {
				this.config.theme = "snow";
			} else {
				this.config.theme = "nothing";
			}
			this.updateDom();
		}
	}
});
