
		
		//Инициализация 
		
		//Меняем класс для html, если у пользователя есть JS
		
var html = document.documentElement;
		html.className = html.className.replace("no-js", "js");
		
		//Добавляем галерее класс, который задает одну картинку вместо кучи мелких.
		

		var gallery = document.querySelector(".gallery");
		gallery.classList.add("gallery-live");
		
		//Добавляем кнопки галерее 
		
		var buttons = 
				'<button class="btn gallery-prev">Назад</button>' +
				'<button class="btn gallery-next">Вперед</button>';
		
		gallery.innerHTML = gallery.innerHTML + buttons;
		
		//Начальное состояние кнопок
		
		var prev = document.querySelector(".gallery-prev");
		prev.setAttribute('disabled', 'disabled')
		
//		Код формы
		
		var link = document.querySelector(".login");
		var popup = document.querySelector(".modal-content");
		var close = document.querySelector(".modal-content-close");
		var login = popup.querySelector("[name=login]");
		var form = popup.querySelector("form");
		var password = popup.querySelector("[name=password]");
		var storage = localStorage.getItem("login");
		
		link.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.add("modal-content-show");
			
			if(popup.classList.contains("modal-error")) {
				popup.classList.remove("modal-error");
			}
			if(storage){
				login.value = storage;
				password.focus();
			} else {
				login.focus();
			}
		})
		
		close.addEventListener("click", function(event){
			event.preventDefault();
			popup.classList.remove("modal-content-show");
		})
		
		form.addEventListener("submit", function(event){
			
			if(!(login.value && password.value)){
				event.preventDefault();
				if(popup.classList.contains("modal-error")) {
				popup.classList.remove("modal-error");
			}
				console.log("Нужно ввести логин и пароль");
				popup.classList.add("modal-error");
			} else {
				localStorage.setItem("login", login.value);
			}
			
		})
		
		window.addEventListener("keydown", function(event){
			if (event.keyCode == 27) {
				if (popup.classList.contains("modal-content-show")){
					popup.classList.remove("modal-content-show");
				}
			}
		});
	
//		Код карты
		
		var mapOpen = document.querySelector(".open-map");
		var mapPopup = document.querySelector(".modal-content-map");
		var mapClose = mapPopup.querySelector(".modal-content-close");
		
		mapOpen.addEventListener("click", function(event) {
			event.preventDefault();
			mapPopup.classList.add("modal-content-show");
		});
		
		mapClose.addEventListener("click", function(event){
			event.preventDefault();
			mapPopup.classList.remove("modal-content-show");
		});
		
		window.addEventListener("keydown", function(event) {
			if(event.keyCode == 27) {
				if (mapPopup.classList.contains("modal-content-show")) {
					mapPopup.classList.remove("modal-content-show");
				}
			}
		});
	