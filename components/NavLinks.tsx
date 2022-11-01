import Link from "next/link";
import { navLinks } from "../data";


const NavLinks = () => {

    return (
        <>
            {
                navLinks.map((link) => (
                    <li key={link.id} className='hover:underline cursor-pointer capitalize'>
                        <Link href={`${link.href}`}><a>{link.title}</a></Link>
                    </li>
                ))
            }
        </>
    );
};

export default NavLinks;