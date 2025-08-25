import { Metadata } from 'next';

type Props = {
  params: Promise<{ productid: string }>;
};

export const generateMetadata=  async({params}: Props): Promise<Metadata> => {
  const id = (await params).productid;
  return {
    title: `Product ${id}`,
    description: `Details about product ${id}.`,
  }
};

export default async function ProductDetail({ params }: Props) {
  const productid  = (await params).productid;
  return <h1>Product Detail Page {productid}</h1>;
}
