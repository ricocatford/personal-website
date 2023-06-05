import React, { useState } from "react";

export function ComponentApple() {
    return <h1>Apple</h1>;
}

export function ComponentOrange() {
    return <h1>Orange</h1>;
}

const fruitComponents = {
    apple: <ComponentApple />,
    orange: <ComponentOrange />,
};

export function App(props) {
    const [fruit, setFruit] = useState("orange");

    return <div className="App">{fruitComponents[fruit]}</div>;
}

// Log to console
console.log("Hello console");
