import React from "react";

// {name} syntax is called object deconstruction syntax
function Hello({ name }) {
    //console.log(name);         
    return <h1>Hello {name} </h1>
}

// NextJS will look at a file named page
export default function Home() {
    return (<div>
        <Hello name="Andrew" />
        <Hello name="Abraham" />
    </div>);

    // return React.createElement(Hello, { name: "Andrew"})
}


/*
createElement({
            type: "p",
            props: {
                id: "hello"
            },
            children: "Hello World"
        })
*/