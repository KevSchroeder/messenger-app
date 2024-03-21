import ChatApp from "../App";

const BobPage = () => {
    return (
        <div className="bg-white">
            <h1>Welcome to Bob's Page</h1>
            <ChatApp user="Bob" />
        </div>
    );
};

export default BobPage;