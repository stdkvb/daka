const menuController = function () {
	const burger = document.getElementById('burger')
	const menu = document.getElementById('menu')
	burger.addEventListener('click', () => {
		menu.classList.toggle('active')
		document.body.style.overflow = 'hidden'
	})
	const close = document.getElementById('close')
	close.addEventListener('click', () => {
		menu.classList.toggle('active')
		document.body.style.overflow = 'unset'
	})
	const links = menu.querySelectorAll('a')
	links.forEach((element) => {
		element.addEventListener('click', () => {
			menu.classList.toggle('active')
			document.body.style.overflow = 'unset'
		})
	});
}

export default menuController;