import ProductForm from "../components/ProductForm";

const PlaygroundPage = () => {
  return (
    <ProductForm
      onSubmit={async (product) => {
        console.log(product);
      }}
    />
  );
};

export default PlaygroundPage;
