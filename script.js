const backToTopBtn = document.querySelectorAll('.back-to-top');

backToTopBtn.forEach(element => {
	element.addEventListener("click", function() {
		// console.log("clicked");
		window.scrollTo(0, 0);
	});
});

const searchBar = document.getElementById("search-bar");
const suggestionsList = document.getElementById("suggestions");

searchBar.addEventListener("keydown", (ev) => {
	while(suggestionsList.firstChild) { // To remove all childs from the last search
		suggestionsList.removeChild(suggestionsList.firstChild);
	}

	let results = [];
	let input = searchBar.value.toLowerCase();

	if (input.length >= 0) {
		results = keywords_for_searching.filter((word) => {
			return word.toLowerCase().includes(input.toLowerCase());
		});

		console.log(results)

		results.forEach((item) => {
			const newItem = document.createElement("li");
			newItem.classList.add("suggestion-item");
			newItem.innerHTML = item;

			suggestionsList.append(newItem);
		});
	}

})


let keywords_for_searching = [
	"anh nhà ở đâu thế?",
	"anh nhà ở Bình Thạnh",
	"anh nhà ở Bình Thạnh, phường 22",
	"anh nhà ở Bình Thạnh, phường 19",
	"anh nhà ở Bình Thạnh, phuwfong 15",
	"anh nhà ở Bình Chánh",
	"anh nhà ở Bình Định",
	"anh nhà ở Bình Quới",

	"lại một ngày xán lạn ta còn thở giữa thinh không này",
	"tâm thư là thứ giấu kín không so đo hay phơi bày",

	"và rồi ta cũng rời bỏ thế gian sau vạn biến cố từ lúc chào đời, cảm tạ loài người nhân ái đã đưa mình về với chốn mù khơi",
	"và rồi kế tiếp, ta sẽ đến với phần trình diễn của Ăn năn hối lỗi",
	"và rồi kế tiếp, ta sẽ đến với phần trình diễn của Biến đi đồ con chó",
	"và rồi kế tiếp, ta sẽ đến với phần trình diễn của Con Cặt",
	"và rồi kế tiếp, ta sẽ đến với phần trình diễn của D",

	"logic",
	"logic mệnh đề",
	"logic và mệnh đề",
	"logic là gì",
	"logic là gì?",
	"logic?",
	'wasdef há lô thầy',
	'asdfg cái này em cũng hay gõ nè',
	'asdfg hê hê',
	'asdqweqwe awmahgah',
	'asdasdv tototto',
	'aadsfah ádfasdasd ád ',
	'asdfvbasfádasdasd áda sdas ',
	'sadfgh common gibberish',
	'adasdasdasdasds aren\'t we the same?',
	'qwerqwer',

	'testlist1',
	'testlist2',
	'testlist3',
	'testlist4',
	'testlist5'
];

let ohya = keywords_for_searching.filter((word) => {
	word.includes("test");
});

console.log("heeeeee: ", ohya);

var yeuall = "yeuanhyeuemyeunhauyeuta"
var yeuem = "yeuem"
var yeuanh = "yeuanh"
var yeuae = "yeuanhyeem"