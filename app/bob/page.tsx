import ChatApp from "../App";

const BobPage = () => {
    return (
        <div className="w-full y-full">
        <div className="flex h-full w-full px-8 py-32 bg-white">
            <h1 className="text-xl text-white rounded-lg px-2 py-6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Welcome to Bob's Page</h1>
            <ChatApp user="Bob" />
        </div>
        </div>
    );
};

export default BobPage;