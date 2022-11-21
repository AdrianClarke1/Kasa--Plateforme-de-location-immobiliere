import { useState, useRef } from "react"
import {FaChevronDown } from "react-icons/fa"
import "./collapsible.css"

function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()

    return (
        <div className="collapsible">
            <button 
            className="toggle" 
            onClick={() => setIsOpen(!isOpen)}>
                {props.label}
                <FaChevronDown className={isOpen === false ? "isClose" : "isOpen"} />
            </button>

            <div className="contenuParent"
            ref={parentRef}
            style={
                isOpen 
                ? {
                    height: parentRef.current.scrollHeight + "px",
                }
                : {
                    height: "0px"
                }
            }
            >
                <div className="contenu">{props.children}</div>
            </div>
        </div>
    )
}

export default Collapsible