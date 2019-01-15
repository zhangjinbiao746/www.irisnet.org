export default class Tools {
	static currentDeviceIsPersonComputer(){
		const userAgent = navigator.userAgent;
		const agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		let flag = true;
		for (let i = 0; i < agents.length; i++) {
			if (userAgent.includes(agents[i]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
}