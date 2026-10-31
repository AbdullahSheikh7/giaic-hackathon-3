import ProductPage from "./_components/ProductPage";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return <ProductPage id={id} />;
};

export default Page;
