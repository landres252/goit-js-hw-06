const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const titulo = item.querySelector('h2').textContent;
  const elementos = item.querySelectorAll('li').length;

    console.log(`Category: ${titulo}`);
    console.log(`Elements: ${elementos}`);
});