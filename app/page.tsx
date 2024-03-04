import Link from 'next/link';

export default function Home() {
    return (
    <>
        <Link href="/alice">Chat as Alice</Link>
        
        <Link href="/bob">Chat as Bob</Link>
    </>
    );
}