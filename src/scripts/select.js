const selectController = function () {
	const selects = document.querySelectorAll('.select__button');
	selects.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.classList.toggle('active')
		})
	})

	const options= document.querySelectorAll('.select__options');
	options.forEach((elem) => {
		elem.addEventListener('click', () => {
			elem.parentElement.classList.remove('active')
		})
	})
};

export default selectController;

