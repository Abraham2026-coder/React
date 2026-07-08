
// A function that returns JSX is called a component
function ShowImage() {
    return (
        <img src="/image.jpeg" alt="Sample image"></img>
    );
}

export default function ShowMultipleImages() {
    return (
        <div>
            <ShowImage />
            <ShowImage />
            {/* {React.createElement(ShowImage)} */}
        </div>)
}