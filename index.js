/* header */
const header = document.querySelector('header');
const buttonMenu = header.querySelector('.header-menu-btn');
/* footer */
const footer = document.querySelector('footer');
const spanDate = footer.querySelector('span').innerHTML = new Date().getFullYear();
/* products */
const productsSection = document.querySelector('.products-section');
const btnsProduct = productsSection.querySelectorAll('.div-btn');
const productsItem = productsSection.querySelectorAll('.products-item');
/* image decoration */
const image = document.querySelector('.image-dec');

/* heigth of decoration */
const observer = new ResizeObserver(entries => {
  const imageHeight = entries[0].contentRect.height;
  const decorations = document.querySelectorAll('.us-decoration');
  decorations.forEach((element) => {
    element.style.height = `${imageHeight}px`;
  });
})

/* observer.observe(decoration); */
observer.observe(image);

/* header open menu */
buttonMenu.addEventListener('click', () => {
  header.classList.toggle('show-class')
})

/* change product card */
productsSection.addEventListener('click', (e) => {
  const element = e.target.dataset.id;
  console.log(element);
  if (element) {
    btnsProduct.forEach((btn) => {
      btn.classList.remove('active');      
    });
    e.target.classList.add('active');
    productsItem.forEach((product) => {
      product.classList.remove('active');
    });
    const item =  document.getElementById(element);
    item.classList.add('active');
  }
});

/* Banners and span */
const banners = document.querySelectorAll('.banner-product');

banners.forEach((banner) => {
  banner.addEventListener('mouseover', (banner) => {
    const element = banner.target.dataset.id;
    console.log(element);
  });
});

/* function readElement(element) {
  console.log(element.target);
}
function showSpan (item) {
  console.log(item);
  item.style.dispay = 'block';    
}
*/
/* Products boxes */
const container = document.querySelectorAll('.ue-small');

container.forEach((item) => {
  const productItem = item.querySelectorAll('.product-item');
  item.addEventListener('click', (e) => {
    const element = e.target.dataset.id;
    const boxElement= item.querySelector(`#${element}`);
    if (boxElement.classList.contains('show')) {
      productItem.forEach((element) => {
        element.classList.remove('show');
      });
    }
    else {
      productItem.forEach((element) => {
        element.classList.remove('show');
      });
      boxElement.classList.add('show');
    }
  });
})
