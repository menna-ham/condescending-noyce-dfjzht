type props = {
  params: {
    aboutID: number;
  };
};

export default function AboutPage({ params }: props) {
  return (
    <>
      <p> About Number ${params.aboutID}</p>
    </>
  );
}
