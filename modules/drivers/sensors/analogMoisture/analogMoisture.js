/*
 * Copyright (c) 2021  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Runtime.
 *
 *   The Moddable SDK Runtime is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   The Moddable SDK Runtime is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with the Moddable SDK Runtime.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/*
	Analog Moisture Sensor
*/

import Timer from "timer";

class AnalogMoisture {
	#io;
	#averaging;

	constructor(options) {
		this.#io = new options.sensor.io(options.sensor);
		this.#averaging = 1;
	}
	configure(options) {
		if (undefined !== options.averaging)
			this.#averaging = options.averaging;
	}
	close() {
		this.#io.close();
		this.#io = undefined;
	}
	sample() {
		const io = this.#io;
		let adc = 0;
		for (let i=0; i<this.#averaging; i++)
			adc += io.read();
		adc /= this.#averaging;
		return { value: adc }
	}
}


export default AnalogMoisture;
