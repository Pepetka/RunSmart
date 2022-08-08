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

	function prevSlide() {
		const slideWidth = slide.offsetWidth

		if (slides.style.left.slice(0, -2) == 0) {
			slides.style.left = -slideWidth * 2 + "px"
		} else {
			slides.style.left = +slides.style.left.slice(0, -2) + slideWidth + "px"
		}

		dotChanger()
	}

	function nextSlide() {
		const slideWidth = slide.offsetWidth

		if (slides.style.left.slice(0, -2) == -slideWidth * 2) {
			slides.style.left = "0px"
		} else {
			slides.style.left = +slides.style.left.slice(0, -2) - slideWidth + "px"
		}

		dotChanger()
	}

	slides.style.left = "0px"

	next.addEventListener("click", () => {
		nextSlide()
	})

	prev.addEventListener("click", () => {
		prevSlide()
	})

	dots.forEach((dot, i) => {
		const slideWidth = slide.offsetWidth

		dot.addEventListener("click", () => {
			slides.style.left = -slideWidth * i + "px"

			dotChanger()
		})
	})

	let touchstartX = 0
	let touchendX = 0

	function checkDirection() {
		if (touchendX < touchstartX) {
			nextSlide()
		}
		if (touchendX > touchstartX) {
			prevSlide()
		}
	}

	slides.addEventListener("touchstart", (e) => {
		touchstartX = e.changedTouches[0].screenX
	})

	slides.addEventListener("touchend", (e) => {
		touchendX = e.changedTouches[0].screenX
		checkDirection()
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
		cardsArr.forEach((el, i) => {
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
			<div class="card animate__animated animate__fadeInRight" data-filter="${info.data}">
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

	document.querySelectorAll(".button[data-modal='order']").forEach((btn) => {
		btn.addEventListener("click", (e) => showHideModal(e.target))
	})

	filterBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			cards.innerHTML = ""

			activeBtn(btn)
			showFiltered(cardsArr, btn.getAttribute("data-filter"))
			cardsEffect()
			document.querySelectorAll(".button[data-modal='order']").forEach((btn) => {
				btn.addEventListener("click", (e) => showHideModal(e.target))
			})
		})
	})

	// modals

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

	function showModal(modal) {
		const body = document.querySelector("body"),
			up = document.querySelector(".up")

		modal.style.display = "flex"
		body.style.overflow = "hidden"
		body.style.marginRight = `${getScrollbarWidth()}px`
		up.style.marginRight = `${getScrollbarWidth()}px`
	}

	function hideModal(modal) {
		const body = document.querySelector("body"),
			up = document.querySelector(".up")

		modal.style.display = "none"
		body.style.overflow = ""
		body.style.marginRight = "0px"
		up.style.marginRight = "0"
	}

	function showHideModal(e) {
		const modals = document.querySelectorAll(".modal"),
			header = document.querySelector('.modal[data-modal="order"] .modal__header span')

		modals.forEach((modal) => {
			modal.style.display = "none"

			if (e.getAttribute("data-modal") == modal.getAttribute("data-modal")) {
				if (e.getAttribute("data-product")) {
					header.textContent = "Пульсометр " + e.getAttribute("data-product").replaceAll("_", " ")
				}

				showModal(modal)
			}

			modal.addEventListener("click", (e) => {
				if (
					e.target.querySelector(".modal__wrapper") ||
					e.target.classList.contains("modal__close")
				) {
					hideModal(modal)
				}
			})
		})
	}

	document.querySelectorAll(".button[data-modal='consultation']").forEach((btn) => {
		btn.addEventListener("click", (e) => showHideModal(e.target))
	})

	// forms

	const forms = document.querySelectorAll(".form"),
		inputs = document.querySelectorAll(".form__input")

	function formValidation(el) {
		const formInputs = el.querySelectorAll(".form__input"),
			inputInf = el.parentNode.querySelectorAll(".form__info"),
			infContent = el.parentNode.querySelectorAll(".form__info-content")
		const error = [true, true, true]

		formInputs.forEach((input, i) => {
			if (input.value.length === 0) {
				infContent[i].textContent = "Заполните поле"
				error[i] = true
			} else if (input.value.length < 2 && i === 0) {
				infContent[i].textContent = "Введите больше 2-ух символов"
				error[i] = true
			} else if (input.value.length !== 17 && i === 1) {
				infContent[i].textContent = "Некорректный номер телефона"
				error[i] = true
			} else if (!input.value.includes("@") && i === 2) {
				infContent[i].textContent = "Некорректный почтовый адрес"
				error[i] = true
			} else {
				error[i] = false
			}
		})

		for (let i = 0; i < 3; i++) {
			if (error[i]) {
				inputInf[i].style.display = "block"
				formInputs[i].style.borderBottom = "solid 2px red"
				formInputs[i].style.borderRight = "solid 2px red"
			} else {
				inputInf[i].style.display = "none"
				formInputs[i].style.border = "none"
			}
		}

		return error.reduce((previousValue, currentValue) => previousValue || currentValue)
	}

	document.querySelectorAll(".form__input[name='phone']").forEach((input) => {
		input.addEventListener("focus", (e) => {
			e.target.value = e.target.value.length ? e.target.value : "+7"
		})

		input.addEventListener("blur", (e) => {
			e.target.value = e.target.value.length === 2 ? "" : e.target.value
		})

		input.addEventListener("input", (e) => {
			const x = (
				e.target.value.includes("+7")
					? e.target.value.slice(2)
					: e.target.value[0] == 8
					? e.target.value.slice(1)
					: e.target.value
			)
				.replace(/\D/g, "")
				.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

			e.target.value =
				"+7" +
				(!x[2] ? x[1] : "(" + x[1] + ") ") +
				x[2] +
				(x[3] ? "-" + x[3] : "") +
				(x[4] ? "-" + x[4] : "")
		})
	})

	inputs.forEach((input) => {
		input.addEventListener("input", (e) => {
			formValidation(e.target.parentNode.parentNode)
		})
	})

	forms.forEach((form) => {
		form.addEventListener("submit", (e) => {
			e.preventDefault()

			if (!formValidation(e.target)) {
				const formData = new FormData(e.target)

				const text = e.target.querySelector(".button_form").textContent
				e.target.querySelector(".button_form").textContent = "Отправка..."

				fetch("mailer/smart.php", {
					method: "POST",
					body: formData,
				})
					.then((res) => {
						const header = document.querySelector(".modal[data-modal='thanks'] .modal__header")
						const textThanks = header.innerHTML

						if (!res.ok) {
							header.innerHTML = `Возникла непредвиденная ошибка!
								<span>Проверьте подключение к интернету</span>`
						}

						showHideModal(e.target.querySelector(".button_form"))
						setTimeout(() => {
							forms.forEach(() => {
								hideModal(document.querySelector(".modal[data-modal='thanks']"))
								header.innerHTML = textThanks
							})
						}, 5000)

						e.target.querySelector(".button_form").textContent = text
						e.target
							.querySelectorAll(".form__label")
							.forEach((el) => el.classList.remove("form__label_active"))
						e.target.reset()
					})
					.catch((error) => console.error(error))
			}
		})
	})

	inputs.forEach((input) => {
		input.addEventListener("focus", (e) => {
			e.target.parentNode.querySelector(".form__label").classList.add("form__label_active")
		})

		input.addEventListener("blur", (e) => {
			e.target.value
				? null
				: e.target.parentNode.querySelector(".form__label").classList.remove("form__label_active")
		})
	})

	// smooth scroll

	const smoothLinks = document.querySelectorAll('a[href^="#"]'),
		up = document.querySelector(".up")

	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener("click", function (e) {
			e.preventDefault()
			const id = smoothLink.getAttribute("href")

			document.querySelector(id).scrollIntoView({
				behavior: "smooth",
				block: "start",
			})
		})
	}

	window.addEventListener(
		"scroll",
		() => {
			if (window.scrollY > 1000) {
				up.style.visibility = "visible"
				up.style.opacity = "1"
			} else {
				up.style.visibility = "hidden"
				up.style.opacity = "0"
			}
		},
		{ passive: true }
	)

	// animation

	new WOW().init()
})
