type props = {
  params: {
    productID: number;
  };
};
export default function page({ params }: props) {
  return (
    <div>
      <h1> Products {params.productID} Details</h1>
    </div>
  );
}
