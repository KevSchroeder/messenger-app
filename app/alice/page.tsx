import ChatApp from "../App";

const AlicePage = () => {
    return (
        <div className="bg-white">
            <h1>Welcome to Alice's Page</h1>
            <ChatApp user="Alice" />
        </div>
    );
};

export default AlicePage;