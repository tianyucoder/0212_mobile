/* 适配代码---------start------------ */
function adapter(){
	//获取当前设备的设备独立像素值(因为开启了完美视口，所以布局视口=设备独立像素值)
	const w = document.documentElement.clientWidth
	//计算根字体大小
	const rootFontSize = (w * 100) / 375
	//设置根字体大小
	document.documentElement.style.fontSize = rootFontSize + 'px'
}
adapter()
window.onresize = adapter
/* 适配代码---------end------------ */