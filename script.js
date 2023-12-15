const backToTopBtn = document.querySelectorAll('.back-to-top');

backToTopBtn.forEach(element => {
	element.addEventListener("click", function() {
		// console.log("clicked");
		window.scrollTo(0, 0);
	});
});


const stateRepoter1 = document.getElementById("state-1");


const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const searchMsg = document.querySelector(".search-message")
const suggestionsList = document.getElementById("suggestion");

searchBtn.addEventListener("click", () => {
	if (searchBar.value.length == 0) {
		searchMsg.classList.remove("hidden");
		return;
	} else {
		searchMsg.classList.add("hidden");
	}

	for (let i = 0; i < availableSearches.length; i++) {
		if (availableSearches[i][0].toLowerCase().includes(searchBar.value.toLowerCase())) {
			searchBtn.value = availableSearches[i][1];
			break;
		}

		stateRepoter1.innerHTML = searchBtn.value;
		searchBtn.value = '../pages/nuhuh.html';
	}
	

	window.location = searchBtn.value;
	return;
});

searchBar.addEventListener("keyup", (ev) => {
	while(suggestionsList.firstChild) { // To remove all childs from the last search
		suggestionsList.removeChild(suggestionsList.firstChild);
	}
	// stateRepoter1.innerHTML = searchBtn.value;
	let results = [];
	let input = searchBar.value.toLowerCase();

	if (input.length > 0) {
		results = availableSearches.filter((word) => {
			return word[0].toLowerCase().includes(input.toLowerCase());
		});

		if (results.length > 0) {
			let count = 0;
			results.forEach((item) => {
				count++;
				const newItem = document.createElement("li");
				newItem.classList.add("suggestion-item");
				newItem.innerHTML = item[0];
	
				newItem.addEventListener('click', (ev) => {
					searchBar.value = item[0];
					searchBtn.value = item[1];

					while(suggestionsList.firstChild) { // To remove all suggestions
						suggestionsList.removeChild(suggestionsList.firstChild);
					}
				});
				if (count <= 12) {
					suggestionsList.append(newItem);
				}
			});
		}

	}
});


let availableSearches = [
	["Hàm Boole", '../pages/Boolean.html#introduction'],
	["Hàm Bool?", '../pages/Boolean.html#introduction'],
	["Hàm Boole là?", '../pages/Boolean.html#introduction'],
	["Hàm Boole là gì?", '../pages/Boolean.html#introduction'],
	["George Boole", '../pages/Boolean.html#introduction'],
	["George Boole là ai?", '../pages/Boolean.html#introduction'],
	["Khái niệm Hàm Boole", '../pages/Boolean.html#introduction'],
	["Hàm Boole định nghĩa", '../pages/Boolean.html#definition'],
	["Định nghĩa hàm Boole", '../pages/Boolean.html#definition'],
	["Định nghĩa đại số Boole", '../pages/Boolean.html#definition'],
	["Đại số Boole", '../pages/Boolean.html#definition'],
	["Ví dụ Đại số Boole", '../pages/Boolean.html#example'],
	["Đại số Boole ví dụ ", '../pages/Boolean.html#example'],
	["Bài tập hàm Boole", '../pages/Boolean.html#example'],
	["Hàm Boole bài tập", '../pages/Boolean.html#example'],
	["Hàm Boole bài tập 2", '../pages/Boolean.html#example-2'],
	["Powerset", '../pages/Boolean.html#example-2'],
	["Power set", '../pages/Boolean.html#example-2'],
	["tô pô", '../pages/Boolean.html#example-2'],
	["tô pô không gian", '../pages/Boolean.html#example-2'],
	["không gian tôpô", '../pages/Boolean.html#example-2'],
	["không gian tô pô", '../pages/Boolean.html#example-2'],

	["logic", '../pages/Logic.html'],
	["logic mệnh đề", '../pages/Logic.html'],
	["logic và mệnh đề", '../pages/Logic.html'],
	["logic là gì", '../pages/Logic.html'],
	["logic là gì?", '../pages/Logic.html'],
	["logic?", '../pages/Logic.html'],
	["Sao hoả", '../pages/Logic.html'],
	["Sao hoả có sự sống", '../pages/Logic.html'],
	["Paris", '../pages/Logic.html'],
	["Paris là thủ đô", '../pages/Logic.html'],
	["Paris là thủ đô của nước Pháp", '../pages/Logic.html'],
	["Việt Nam", '../pages/Logic.html'],
	["Việt Nam Nam nằm ở Châu Á", '../pages/Logic.html'],
	["Ứng dụng Logic", '../pages/Logic.html#applications'],
	["Ví dụ Logic", '../pages/Logic.html#applications'],
	["Logic ứng dụng", '../pages/Logic.html#applications'],
	["Logic ví dụ", '../pages/Logic.html#applications'],
	["Mệnh đề", '../pages/Logic.html#statement-logic'],
	["Mệnh đề toán học", '../pages/Logic.html#statement-logic'],
	["Toán học mệnh đề", '../pages/Logic.html#statement-logic'],
	["áp dụng logic trong thực tiễn", '../pages/Logic.html#statement-logic'],
	["thực tiễn hoá Logic", '../pages/Logic.html#statement-logic'],
	["Toán học Logic", '../pages/Logic.html#statement-logic'],
	["Mệnh đề và câu", '../pages/Logic.html#statement-sentences'],
	["Câu từ", '../pages/Logic.html#statement-sentences'],
	["Mệnh đề Logic", '../pages/Logic.html#statement-logic'],
	["Logic Mệnh đề", '../pages/Logic.html#statement-logic'],
	["Logic mờ", '../pages/Logic.html#statement-logic'],
	["Mệnh đề mở", '../pages/Logic.html#statement-logic'],
	["Mệnh đề mờ", '../pages/Logic.html#statement-logic'],

	["anh nhà ở đâu thế?", '../pages/nuhuh.html'],
	["anh nhà ở Bình Dương", '../pages/nuhuh.html'],
	["anh nhà ở Bình Thạnh, phường 22", '../pages/nuhuh.html'],
	["anh nhà ở Bình Thạnh, phường 19", '../pages/nuhuh.html'],
	["anh nhà ở Bình Thạnh, phuwfong 15", '../pages/nuhuh.html'],
	["anh nhà ở Bình Chánh", '../pages/nuhuh.html'],
	["anh nhà ở Bình Định", '../pages/nuhuh.html'],
	["anh nhà ở Bình Quới", '../pages/nuhuh.html'],

	["asdfg cái này em cũng hay gõ nè", '../pages/nuhuh.html'],
	["asdfg hê hê", '../pages/nuhuh.html'],
	["asdqweqwe awmahgah", '../pages/nuhuh.html'],
	["asdasdv tototto", '../pages/nuhuh.html'],
	["aadsfah ádfasdasd ád ", '../pages/nuhuh.html'],
	["asdfvbasfádasdasd áda sdas ", '../pages/nuhuh.html'],
	["sadfgh common gibberish", '../pages/nuhuh.html'],
	["adasdasd cái này em cũng hay gõ nè", '../pages/nuhuh.html'],
	["adasdasdasd hê hê hê hê", '../pages/nuhuh.html'],
	["adasdasdasdasds test quốc dân", '../pages/nuhuh.html'],
	["adasdasdasdasdsasd aren\"t we the same?", '../pages/nuhuh.html'],
	["qwerqwer", '../pages/nuhuh.html'],

	["wasdef há lô thầy Hiển", '../pages/nuhuh.html'],
	["wasdef há lô Dương", '../pages/nuhuh.html'],
	["wasdef há lô Hưng", '../pages/nuhuh.html'],
	["wasdef lô Phú", '../pages/nuhuh.html'],
	["wasdef há lô Hồng Anh", '../pages/nuhuh.html'],
	["wasdef lô Thí Di", '../pages/nuhuh.html'],
	["wasdef há lô Cẩm Tin", '../pages/nuhuh.html'],

	["testlist1", '../pages/nuhuh.html'],
	["testlist2", '../pages/nuhuh.html'],
	["testlist3", '../pages/nuhuh.html'],
	["testlist4", '../pages/nuhuh.html'],
	["testlist5", '../pages/nuhuh.html']
]