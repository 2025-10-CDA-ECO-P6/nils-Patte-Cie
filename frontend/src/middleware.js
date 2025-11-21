import {NextResponse} from "next/server";

// de base ca servait pour la demo mais j'ai pas eu le temps de faire la partie veto donc je laisse ca peux servir de base mais cest pas ouf :)
export function middleware(req) {
    const userType = req.nextUrl.searchParams.get('userType');

    if (req.nextUrl.pathname === '/animals') {
        console.log('animal triggered');
        if (userType === 'owner') {
            return NextResponse.rewrite(new URL('/animals/owner', req.url));
        } else if (userType === 'vet') {
            return NextResponse.rewrite(new URL('/animals/vet', req.url));
        } else {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher : '/animals',
}