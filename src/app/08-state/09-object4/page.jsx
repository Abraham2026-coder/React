"use client";
import { useState } from "react";
import "./styles.css";
import { initScriptLoader } from "next/script";


export default function ObjectState() {
    // const [size,setSize]= useState(100);

    // function incrementSize(){
    //     setSize(size + 20)
    // }

    // function decrementSize(){
    //     setSize(size -20)
    // }

    // State called isRound
    // is isRound == true, then borderRadius = 50%
    // is isRound == false, then borderRadius = 8px

    // State called color
    const [boxProperties, setBoxProperties] = useState({
        size: 100,
        // Final structure we need
        color: "#3b82f6",
        isRound: true
    })

    function incrementSize() {
        const newBoxProperties = {
            size: boxProperties.size + 20
        }

        setBoxProperties(newBoxProperties)
    }

    function decrementSize() {
        const newBoxProperties = {
            size: boxProperties.size - 20
        }

        setBoxProperties(newBoxProperties)
    }
    return (
        <div className="container">
            <h1 className="title">Immutable State Demo</h1>
            <div className="controls">
                <div className="control-row">
                    <div className="control-group">
                        <span className="label">Size</span>
                        <div className="button-row">
                            <button onClick={decrementSize} className="action-btn">— Smaller</button>
                            <button onClick={incrementSize} className="action-btn">+ Larger</button>
                        </div>
                    </div>
                    <div className="control-group">
                        <span className="label">Shape</span>
                        <button className="action-btn">Toggle Round</button>
                    </div>
                </div>
                <div className="control-group">
                    <span className="label">Color</span>
                    <div className="button-row">
                        <button onClick={setBoxProperties("#3b82f6")}
                            className="swatch-btn"
                            style={{ backgroundColor: boxProperties.color }}
                            aria-label="Set color #3b82f6"
                        />
                        <button onClick={setBoxProperties("#22c55e")}
                            className="swatch-btn"
                            style={{ backgroundColor: boxProperties.color }}
                            aria-label="Set color #22c55e"
                        />
                        <button onClick={setBoxProperties("#ef4444")}
                            className="swatch-btn"
                            style={{ backgroundColor: boxProperties.color }}
                            aria-label="Set color #ef4444"
                        />
                        <button onClick={setBoxProperties("#a855f7")}
                            className="swatch-btn"
                            style={{ backgroundColor: boxProperties.color }}
                            aria-label="Set color #a855f7"
                        />
                    </div>
                </div>
            </div>
            <div className="display-box">
                <div
                    className="shape"
                    style={{
                        width: boxProperties.size,
                        height: boxProperties.size,
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px", // change between 8px and 50%
                    }}
                />
            </div>
        </div>

    )
}