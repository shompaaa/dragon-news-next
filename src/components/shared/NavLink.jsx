'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href,children}) => {
    const pathName = usePathname()
    const isActive = href === pathName
    return (
        <Link href={href} className={`${isActive ? 'text-pink-700 border-b-2': ""}`}>
            {children}
        </Link>
    );
};

export default NavLink;