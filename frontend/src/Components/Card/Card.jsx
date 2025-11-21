import styles from './Card.module.css'

function Card({children, classname = '', onClick, hoverable = false}) {
    return (
        <div className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${classname}`} onClick={onClick}>
            {children}
        </div>
    )
}

function CardHeader({ children, className= ''}) {
    return (
        <div className={`${styles.cardHeader} ${className}`}>
            {children}
        </div>
    )
}

function CardBody({ children, className = '' }) {
    return (
        <div className={`${styles.cardBody} ${className}`}>
            {children}
        </div>
    );
}

function CardFooter({ children, className = '' }) {
    return (
        <div className={`${styles.cardFooter} ${className}`}>
            {children}
        </div>
    );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;