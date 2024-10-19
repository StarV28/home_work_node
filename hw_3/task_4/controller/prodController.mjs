class ProdController {
  static product(req, res) {
    const products = [
      {
        name: 'iPhone',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ad.',
        price: 990,
      },
      {
        name: 'Xiaomi',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ad.',
        price: 700,
      },
      {
        name: 'Pixel',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ad.',
        price: 999,
      },
      {
        name: 'Honor',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ad.',
        price: 239,
      },
    ];
    res.render('products', {
      title: 'Product List',
      products,
    });
  }
}
export default ProdController;
