import { ReactNode } from 'react';
import Head from "next/head";
import Basket from "../components/Basket";
import Nav from './Nav';
import NavMobile from './NavMobile';
import Footer from './Footer';

interface Props {
  children: ReactNode
  title: String
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <header className="sticky top-0 z-50 bg-primary-d overflow-hidden">
          <Nav />
          <NavMobile />
        </header>
        <Basket />
        <main>
          {children}
        </main>
        <Footer />
      </section>
    </>
  );
}

export default Layout;