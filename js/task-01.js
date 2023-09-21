const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.dir(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.dir(`Category: ${categoryName}`);
  console.dir(`Elements: ${categoryElements}`);
});
