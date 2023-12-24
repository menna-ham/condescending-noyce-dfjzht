type props = {
  params: {
    productID: number;
  };
};
let getRandomInt = (count: number) => {
  Math.floor(Math.random() * count);
};
export default function page({ params }: props) {
  let random = getRandomInt(1);

  if (params.productID == 1) {
    throw new Error("Error in Product ID 1");
  }
  return (
    <div>
      <h1> Products {params.productID} Details</h1>
    </div>
  );
}
