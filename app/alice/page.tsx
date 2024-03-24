import ChatApp from "../App";

const AlicePage = () => {
    return (
        <div className="w-full y-full">
        <div className="flex h-full w-full px-8 py-32 bg-white">
            <h1 className="text-xl text-white rounded-lg px-2 py-6 bg-gradient-to-r from-pink-500 from-10% via-orange-500 via-30% to-yellow-500 to-90%">Welcome to Alice's Page</h1>
            <ChatApp user="Alice" />
        </div>
        </div>
    );
};

export default AlicePage;