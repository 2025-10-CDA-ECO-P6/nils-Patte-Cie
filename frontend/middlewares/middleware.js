import {NextResponse} from "next/server";

export function middleware(req) {
    const userType = req.cookies.get('userType')?.value;

    if (req.nextUrl.pathname === '/animals') {
        if (userType === 'owner') {
            return NextResponse.rewrite(new URL('/animals/owner', req.url));
        } else if (userType === 'veterinarian') {
            return NextResponse.rewrite(new URL('/animals/vet', req.url));
        } else {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher : '/animals/:path'
}