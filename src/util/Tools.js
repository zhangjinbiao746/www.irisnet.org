export default class Tools {
	static currentDeviceIsPersonComputer(){
		const userAgentInfo = navigator.userAgent;
		const Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		let flag = true;
		for (let i = 0; i < Agents.length; i++) {
			if (userAgentInfo.includes(Agents[i]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
}