const Card = ({ children }) => {
    return (<div>
        {children}
    </div>)
}

export const CardHeader = ({ children }) => {
    return (<div>
        {children}
    </div>)
}

export const CardBody = ({ children }) => {
    return (<div>
        {children}
    </div>)
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card