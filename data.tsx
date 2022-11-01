import { v4 as uuidv4 } from 'uuid';

interface NavLink {
    id:string;
    title:String;
    href:String;

}

export const navLinks:NavLink[] = [
    {
        id: uuidv4(),
        title: 'product',
        href: '/checkout',
    },
    {
        id: uuidv4(),
        title: 'about',
        href: '/',
    },
    {
        id: uuidv4(),
        title: 'mission',
        href: '/',
    },
];