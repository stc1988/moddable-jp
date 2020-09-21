import Timer from "timer";

import Digital from "pins/digital";
import Monitor from "pins/digital/monitor";

import NeoPixel from "neopixel";
import AudioOut from "pins/audioout";

import config from "mc/config";

export default function (done) {
	globalThis.button = {
		a: new Monitor({pin: 39, mode: Digital.InputPullUp, edge: Monitor.Rising | Monitor.Falling}),
	};
	button.a.onChanged = nop;
	
	globalThis.lights = new NeoPixel({});

	if (config.speaker) {
		globalThis.speaker = new AudioOut({
			streams: 2
		});
	}

	done();
}

function nop() {
}
