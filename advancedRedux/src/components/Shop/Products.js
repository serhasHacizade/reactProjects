import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyProducts = [
  { id: "p1", price: 6, title: "My first book", description: "the first book I" },
  { id: "p2", price: 5, title: "My second book", description: "the second book I" }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          dummyProducts.map(product =>(
            <ProductItem
              key = {product.id}
              id = {product.id}
              title = {product.title}
              price = {product.price}
              description = {product.description}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default Products;
