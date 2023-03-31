// David Damian Galan
// El precio de una propiedad en Airbnb

import "../styles/Price.css"

const Price = (props) => {
    return (
        <div className="price">
            ${props.price} MXN total before taxes
        </div>
    );
};

export default Price;