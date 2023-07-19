const categoryList = document.querySelector('ul#categories');
const categoriesItems = categoryList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryEl = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryEl}`);

});
