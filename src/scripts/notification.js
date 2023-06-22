// close notification button
const notificationController = () => {
	const notification = document.querySelector('.notification')	
	if (notification !== null && notification.classList.contains('notification_active')) {
		document.body.style.overflow = 'hidden'
	}
	const notificationCloseButtons = document.querySelectorAll('.notification__close')
	notificationCloseButtons.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.parentElement.classList.remove('notification_active')
			document.body.style.overflow = 'unset'
		})
	})
}

export default notificationController
