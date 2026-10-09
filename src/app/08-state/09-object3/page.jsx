"use client";
import { useState } from "react";
import "./styles.css";
import { initScriptLoader } from "next/script";
import ColorBox from "../01-2-way-binding-ex1/page";


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

    function Colors({ newColor }) {
        return (<button
            className="swatch-btn"
            style={{ backgroundColor: newColor }}
            aria-label={`Set color ${newColor}`}
            onClick={() => setBoxProperties({
                ...boxProperties,
                color: newColor
            })}
        />)
    }

    function incrementSize() {
        const newBoxProperties = {
            ...boxProperties,
            size: boxProperties.size + 20
        }

        setBoxProperties(newBoxProperties)
    }

    function decrementSize() {
        const newBoxProperties = {
            ...boxProperties,
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
                        <Colors newColor="#3b82f6" />
                        <Colors newColor="#22c55e" />
                        <Colors newColor="#ef4444" />
                        <Colors newColor="#a855f7" />
                    </div>
                </div>
            </div>
            <div className="display-box">
                <div
                    className="shape"
                    style={{
                        width: boxProperties.size,
                        height: boxProperties.size,
                        backgroundColor: boxProperties.color,
                        borderRadius: "8px", // change between 8px and 50%
                    }}
                />
            </div>
        </div>

    )
}