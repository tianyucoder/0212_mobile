/* 适配代码---------start------------ */
function adapter(){
	//获取当前设备的设备独立像素值
	const w = document.documentElement.clientWidth
	//计算跟字体大小
	const rootFontSize = w / 10
	//设置根字体大小
	document.documentElement.style.fontSize = rootFontSize + 'px'
}
adapter()
window.onresize = adapter
/* 适配代码---------end------------ */

//获取底部所有footer_item
const footerItems = document.querySelectorAll('#footer .footer_item')
//获取所有footer_icon
const footerIcons = document.querySelectorAll('#footer .footer_item .icon')
//获取所有footer_text
const footerTexts = document.querySelectorAll('#footer .footer_item .footer_text')
//获取所有屏
const screens = document.querySelectorAll('#content .content_item')

//给每一个底部导航加监听
for (let i = 0; i < footerItems.length; i++) {
	footerItems[i].addEventListener('touchstart',()=>{
		//1.清除所有底部导航的高亮
		for (let j = 0; j < footerItems.length; j++) {
			footerIcons[j].className = 'icon'
			footerTexts[j].className = 'footer_text'
			screens[j].className = 'content_item'
		}
		//2.给当前点击的加高亮
		footerIcons[i].className = 'icon active'
		footerTexts[i].className = 'footer_text active'
		screens[i].className = 'content_item active'
	})
}
