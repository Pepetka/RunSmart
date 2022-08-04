document.addEventListener("DOMContentLoaded", () => {
	// slider

	const prev = document.querySelector(".slider__prev"),
		next = document.querySelector(".slider__next"),
		slides = document.querySelector(".slider__slides-wrapper"),
		slide = document.querySelector(".slider__slide"),
		dots = document.querySelectorAll(".slider__dot")

	function dotChanger() {
		const slideWidth = slide.offsetWidth

		switch (+slides.style.left.slice(0, -2)) {
			case 0:
				dots.forEach((el, i) => {
					if (i !== 0) {
						el.classList.remove("slider__dot_active")
					} else {
						el.classList.add("slider__dot_active")
					}
				})
				break
			case -slideWidth:
				dots.forEach((el, i) => {
					if (i !== 1) {
						el.classList.remove("slider__dot_active")
					} else {
						el.classList.add("slider__dot_active")
					}
				})
				break
			case -slideWidth * 2:
				dots.forEach((el, i) => {
					if (i !== 2) {
						el.classList.remove("slider__dot_active")
					} else {
						el.classList.add("slider__dot_active")
					}
				})
				break
		}
	}

	slides.style.left = "0px"

	next.addEventListener("click", () => {
		const slideWidth = slide.offsetWidth

		if (slides.style.left.slice(0, -2) == -slideWidth * 2) {
			slides.style.left = "0px"
		} else {
			slides.style.left = +slides.style.left.slice(0, -2) - slideWidth + "px"
		}

		dotChanger()
	})

	prev.addEventListener("click", () => {
		const slideWidth = slide.offsetWidth

		if (slides.style.left.slice(0, -2) == 0) {
			slides.style.left = -slideWidth * 2 + "px"
		} else {
			slides.style.left = +slides.style.left.slice(0, -2) + slideWidth + "px"
		}

		dotChanger()
	})

	dots.forEach((dot, i) => {
		const slideWidth = slide.offsetWidth

		dot.addEventListener("click", () => {
			slides.style.left = -slideWidth * i + "px"

			dotChanger()
		})
	})

	// catalog

	const cardsInfo = [
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT1",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "4 750",
			salePrice: "4 500",
			data: "fitness",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Suunto M2",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "6 690",
			salePrice: "6 641",
			data: "running",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT4",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "7 390",
			salePrice: "7 021",
			data: "triathlon",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT1",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "4 750",
			salePrice: "4 500",
			data: "triathlon",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Suunto M2",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "6 690",
			salePrice: "6 641",
			data: "fitness",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT4",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "7 390",
			salePrice: "7 021",
			data: "running",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT1",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "4 750",
			salePrice: "4 500",
			data: "running",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Suunto M2",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "6 690",
			salePrice: "6 641",
			data: "triathlon",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT4",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "7 390",
			salePrice: "7 021",
			data: "fitness",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT4",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "7 390",
			salePrice: "7 021",
			data: "triathlon",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT1",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "4 750",
			salePrice: "4 500",
			data: "running",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Suunto M2",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "6 690",
			salePrice: "6 641",
			data: "fitness",
		},
		{
			img: "./img/catalog/photo.png",
			name: "Polar FT4",
			info: "Для первых шагов в тренировках, основанных на сердечном ритме",
			price: "7 390",
			salePrice: "7 021",
			data: "fitness",
		},
	]

	const cards = document.querySelector(".catalog__cards"),
		filterBtns = document.querySelectorAll(".catalog__filter button")

	function activeBtn(btn) {
		filterBtns.forEach((el) => {
			el.classList.remove("active-filter")
		})
		btn.classList.add("active-filter")
	}

	function showFiltered(cardsArr, data = "fitness") {
		cardsArr.forEach((el) => {
			if (el.dataModal === data) {
				cards.appendChild(el.content)
			}
		})
	}

	function cardsEffect() {
		const linkMore = document.querySelectorAll("[data-link='more']"),
			linkBack = document.querySelectorAll("[data-link='back']")
		linkMore.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.target.parentNode.parentNode.style.top = "0px"
			})
		})
		linkBack.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.target.parentNode.parentNode.style.top = "-320px"
			})
		})
	}

	const cardsArr = cardsInfo.map((info) => {
		const div = document.createElement("div")
		div.innerHTML = `
			<div class="card" data-filter="${info.data}">
				<div class="card__slider">
					<div class="card__wrapper">
						<div class="card__info">
							<ul class="card__list">
								<li><span>Вы услышите звуковое оповещение о нужном пульсе во время тренировки;</span></li>
								<li><span>Вы увидите информативный графический индикатор целевых тренировочных зон пульса;</span>
								</li>
								<li><span>Также Вы увидите информацию о расходе калорий за тренировку;</span></li>
								<li><span>Вы сможете посмотреть данные по 10 тренировкам.</span></li>
							</ul>
							<div data-link="back" class="card__link">НАЗАД</div>
						</div>
						<div class="card_product">
							<img src=${info.img} alt="card img">
							<h3 class="card__header">
								Пульсометр ${info.name}
							</h3>
							<div class="card__text">
								${info.info}
							</div>
							<div data-link="more" class="card__link">ПОДРОБНЕЕ</div>
						</div>
					</div>
				</div>
				<hr>
				<div class="card__buying-info">
					<div class="card__price">
						<span>${info.price} руб.</span>
						${info.salePrice} руб.
					</div>
					<button class="button button_card" data-modal="order" data-product=${info.name.replaceAll(
						" ",
						"_"
					)}>КУПИТЬ</button>
				</div>
			</div>
		`

		return {
			dataModal: info.data,
			content: div,
		}
	})

	showFiltered(cardsArr)
	cardsEffect()

	showHideModal("order")

	filterBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			cards.innerHTML = ""

			activeBtn(btn)
			showFiltered(cardsArr, btn.getAttribute("data-filter"))
			cardsEffect()
			showHideModal("order")
		})
	})

	// modals

	function showHideModal(data) {
		const modals = document.querySelectorAll(".modal"),
			openBtns = document.querySelectorAll(`.button[data-modal=${data}]`),
			closeBtns = document.querySelectorAll(".modal__close"),
			body = document.querySelector("body"),
			header = document.querySelector('.modal[data-modal="order"] .modal__header span')

		function getScrollbarWidth() {
			const outer = document.createElement("div")

			outer.style.visibility = "hidden"
			outer.style.overflow = "scroll"
			outer.style.msOverflowStyle = "scrollbar"
			document.body.appendChild(outer)

			const inner = document.createElement("div")
			outer.appendChild(inner)

			const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
			outer.parentNode.removeChild(outer)

			return scrollbarWidth
		}

		openBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				modals.forEach((modal) => {
					modal.style.display = "none"

					if (e.target.getAttribute("data-modal") == modal.getAttribute("data-modal")) {
						if (btn.getAttribute("data-product")) {
							header.textContent =
								"Пульсометр " + btn.getAttribute("data-product").replaceAll("_", " ")
						}

						modal.style.display = "flex"
						body.style.overflow = "hidden"
						body.style.marginRight = `${getScrollbarWidth()}px`
					}
				})
			})
		})

		modals.forEach((modal) => {
			modal.addEventListener("click", (e) => {
				closeBtns.forEach((btn) => {
					if (e.target.querySelector(".modal__wrapper") || e.target === btn) {
						modal.style.display = "none"
						body.style.overflow = ""
						body.style.marginRight = "0px"
					}
				})
			})
		})
	}

	showHideModal("consultation")
	showHideModal("thanks")

	// forms

	const forms = document.querySelectorAll(".form"),
		inputs = document.querySelectorAll(".form__input"),
		submitBtns = document.querySelectorAll(".button[data-modal='thanks']")

	forms.forEach((form) => {
		form.addEventListener("submit", (e) => {
			e.preventDefault()

			showHideModal("thanks")
		})
	})
})
