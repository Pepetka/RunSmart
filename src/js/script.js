document.addEventListener("DOMContentLoaded", () => {
	// slider

	const prev = document.querySelector(".slider__prev"),
		next = document.querySelector(".slider__next"),
		slides = document.querySelector(".slider__slides-wrapper"),
		slide = document.querySelector(".slider__slide")

	slides.style.left = "0px"

	next.addEventListener("click", () => {
		const slideWidth = slide.offsetWidth

		if (slides.style.left.slice(0, -2) == -slideWidth * 2) {
			slides.style.left = "0px"
		} else {
			slides.style.left = +slides.style.left.slice(0, -2) - slideWidth + "px"
		}
	})

	prev.addEventListener("click", () => {
		const slideWidth = slide.offsetWidth

		if (slides.style.left.slice(0, -2) == 0) {
			slides.style.left = -slideWidth * 2 + "px"
		} else {
			slides.style.left = +slides.style.left.slice(0, -2) + slideWidth + "px"
		}
	})

	// catalog

	const cardsInfo = [
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Polar FT1",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "4 750",
				salePrice: "4 500",
				data: "fitness",
			},
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Suunto M2",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "6 690",
				salePrice: "6 641",
				data: "running",
			},
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Polar FT4",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "7 390",
				salePrice: "7 021",
				data: "triathlon",
			},
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Polar FT1",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "4 750",
				salePrice: "4 500",
				data: "triathlon",
			},
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Suunto M2",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "6 690",
				salePrice: "6 641",
				data: "fitness",
			},
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Polar FT4",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "7 390",
				salePrice: "7 021",
				data: "running",
			},
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Polar FT1",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "4 750",
				salePrice: "4 500",
				data: "running",
			},
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Suunto M2",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "6 690",
				salePrice: "6 641",
				data: "triathlon",
			},
			{
				img: "./img/catalog/photo.png",
				name: "Пульсометр Polar FT4",
				info: "Для первых шагов в тренировках, основанных на сердечном ритме",
				price: "7 390",
				salePrice: "7 021",
				data: "fitness",
			},
		],
		cards = document.querySelector(".catalog__cards"),
		filterBtns = document.querySelectorAll(".catalog__filter button")

	let linkMore = document.querySelectorAll("[data-link='more']"),
		linkBack = document.querySelectorAll("[data-link='back']")

	let cardsArr = []
	cards.innerHTML = ""

	cardsInfo
		.filter((el) => "fitness" === el.data)
		.forEach((info) => {
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
											${info.name}
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
								<button class="button button_card">КУПИТЬ</button>
							</div>
						</div>
					`

			cardsArr.push(div)
		})

	cardsArr.forEach((el) => {
		cards.appendChild(el)
	})

	linkMore = document.querySelectorAll("[data-link='more']")
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

	filterBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			filterBtns.forEach((el) => {
				el.classList.remove("active-filter")
			})

			btn.classList.add("active-filter")

			cardsArr = []
			cards.innerHTML = ""

			cardsInfo
				.filter((el) => btn.getAttribute("data-filter") === el.data)
				.forEach((info) => {
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
											${info.name}
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
								<button class="button button_card">КУПИТЬ</button>
							</div>
						</div>
					`

					cardsArr.push(div)
				})

			cardsArr.forEach((el) => {
				cards.appendChild(el)
			})

			linkMore = document.querySelectorAll("[data-link='more']")
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
		})
	})

	// catalog__card
})
