import Image from "next/image";
import Link from "next/link";
import {
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";

const NavIcons = () => {
    const { data: session } = useSession();
    const items = useSelector(selectBasketItems);

    return (
        <div className="flex items-center justify-center gap-x-4 md:w-1/5">
            <MagnifyingGlassIcon className="nav-icon" />
            <Link href="/checkout">
                <div className="relative cursor-pointer">
                    {items.length > 0 && (<span className="count">{items.length}</span>)}
                    <ShoppingBagIcon className="nav-icon" />
                </div>
            </Link>

            {session ? (
                <Image
                    src={
                        session.user?.image ||
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    }
                    alt=""
                    className="cursor-pointer rounded-full"
                    width={34}
                    height={34}
                    onClick={() => signOut()}
                />
            ) : (
                <UserIcon className="nav-icon" onClick={() => signIn()} />
            )}
        </div>
    )
}

export default NavIcons