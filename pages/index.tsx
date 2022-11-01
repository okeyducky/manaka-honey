import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Landing from '../components/Landing'
import About from "../components/About";
import Promos from '../components/Promos'
import Mission from "../components/Mission";
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";


interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}


const Home = ({ categories, products }: Props) => {
  return (
      <Layout title='Manaka Honey'>
        <Landing />
        <About/>
        <Promos categories={categories} products={products} />
        <Mission/>
      </Layout>
  )
}

export default Home

// Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      categories,
      products,
      session,
    },
  };
};