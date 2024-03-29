import React from "react";

import Link from 'next/link'


export function NavBar() {

    return (
        <div>
            <nav style={{display:'flex',flexDirection:'row',gap:'1rem'}}>
                <Link href="/"> Home </Link>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Contact </Link>
                <Link href="/login"> Login</Link>
            </nav>
        </div>
    )
}