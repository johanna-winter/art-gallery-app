import Link from "next/link";


export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/art-pieces">Galerie</Link>
                </li>
                <li>
                    <Link href="/">Spotlight</Link>
                </li>
            </ul>
        </nav>
    );
}