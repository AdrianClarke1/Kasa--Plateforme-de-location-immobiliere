import "./tag.css"

function Tag(props) {
    return (
        <li className="tag">{props.children}</li>
    )
} 

export default Tag