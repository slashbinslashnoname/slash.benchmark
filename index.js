"use strict";

var instance;

const getInstance = () => {
	if (instance == null) {
		instance = Benchmark;
	}
	return instance;
};

const Benchmark = (() => {
	var start = 0;
	var stop = 0;
	var items = 0;

	function Start() {
		start = new Date().getTime();
		return start;
	}
	function Stop() {
		stop = new Date().getTime();
		return stop;
	}
	function GetMilliseconds() {
		return stop - start;
	}
	function GetSeconds() {
		return (stop - start) / 1000;
	}
	function GetSpeed(granularity) {
		console.log(granularity);
		switch (granularity) {
			case "s":
				return items / GetMilliseconds();
			case "ms":
				return items / GetSeconds();
			default:
				console.log("Granularity must be in 's' or 'ms'");
				return 0;
		}
	}
	function SetItems(i) {
		items = i;
		return i;
	}

	return {
		start: function () {
			return Start();
		},
		stop: function () {
			return Stop();
		},
		getMilliseconds: function () {
			return GetMilliseconds();
		},
		getSeconds: function () {
			return GetSeconds();
		},
		setItems: function (i) {
			return SetItems(i);
		},
		getSpeed: function (granularity) {
			return GetSpeed(granularity);
		},
	};
})();

module.exports = getInstance();
