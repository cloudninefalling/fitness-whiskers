export default function TestPage() {
    return (
        <div>
            <div>I am test page</div>
            <div>Your lucky number is {Math.floor(Math.random() * 100)}</div>
        </div>
    );
}
