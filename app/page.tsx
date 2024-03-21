import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Welcome to Chat</h1>
            <hr className="w-1/2 border-gray-400 mb-8" />
            <div className="flex flex-col items-center space-y-6">
                <Link href="/alice">
                    <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md cursor-pointer shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        Chat as Alice
                    </div>
                </Link>
                <Link href="/bob">
                    <div className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md cursor-pointer shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        Chat as Bob
                    </div>
                </Link>
            </div>
        </div>
    );
}