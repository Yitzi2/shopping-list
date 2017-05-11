function addItem(itemName) {
	newItem=$("<li><span></span><div></div></li>");
	newItem.children("span").addClass("shopping-item").text(itemName);
	toggleButton=$("<button><span></span></button");
	toggleButton.children("span").addClass("button-label").text("check");
	toggleButton.addClass("shopping-item-toggle");
	deleteButton=$("<button><span></span></button");
	deleteButton.children("span").addClass("button-label").text("delete");
	deleteButton.addClass("shopping-item-delete");
	newItem.children("div").addClass("shopping-item-controls").append(toggleButton,
		deleteButton);   
	$(".shopping-list").append(newItem); 
}

function checkItem(listItemJQ) {
	listItemJQ.children(".shopping-item").toggleClass("shopping-item__checked");
}

$(function () {
	$("#js-shopping-list-form").submit (
		function() {
			addItem($(this).children("input").val());
			return false;
		}
	);
	$(".shopping-list").on(
		"click", ".shopping-item-toggle", function () {
			checkItem($(this).closest("li"));
		}
	);
	$(".shopping-list").on(
		"click", ".shopping-item-delete", function () {
			console.log("foo");
			$(this).closest("li").remove();
		}
	);
});