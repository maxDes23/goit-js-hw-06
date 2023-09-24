const categoriesList = document.querySelector("#categories");

const childNodesArray = Array.from(categoriesList.childNodes);

childNodesArray.forEach((node) => {
  if (node.nodeType === 1) {
    const categoryName = node.querySelector("h2").textContent;
    const categoryElements = node.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
  }
});

console.log(`Number of categories: ${childNodesArray.length}`);
