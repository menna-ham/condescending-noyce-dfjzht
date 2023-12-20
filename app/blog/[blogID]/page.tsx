import { Metadata } from "next";

type props = {
  params: {
    blogID: number;
  };
};

export const generateMetadata = ({ params }: props): Metadata => {
  return {
    title: `Blog Number ${params.blogID}`,
  };
};

export default function AboutPage({ params }: props) {
  return (
    <>
      <p> About Number ${params.blogID}</p>
    </>
  );
}
