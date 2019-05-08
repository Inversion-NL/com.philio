'use strict';
const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class PAN07 extends ZwaveDevice {
	onMeshInit() {
		this.registerCapability('onoff', 'SWITCH_BINARY');
		this.registerCapability('measure_power', 'METER');
		this.registerCapability('meter_power', 'METER');
		this.registerCapability('measure_voltage', 'METER');
		this.registerCapability('measure_current', 'METER');
	}
}

module.exports = PAN07;
