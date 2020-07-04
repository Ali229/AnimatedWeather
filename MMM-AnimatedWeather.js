/* Magic Mirror
 * Module: MMM-AnimatedWeather
 *
 * By Muhammad Ali https://alinaeem.com
 * MIT Licensed.
 */

Module.register("MMM-AnimatedWeather",{

	defaults: {
		theme : "nothing"
	},

	getDom: function() {
		var wrapper = document.createElement("div")
		wrapper.className = "wrapper"
		
		return wrapper;
	},

	notificationReceived: function(notification, payload, sender) {
		if (notification == "WEATHER_WALLPAPER") {
			if (payload == "Rain") {
				this.config.theme = "rain";
				this.updateDom();
			}
			else if (payload == "Snow") {
				this.config.theme = "winter";
				this.updateDom();
			}
			else {
				this.updateDom();
			}
		}
	}
});
