// David Damian Galan
// El registro de una propiedad en Airbnb

import Image from './Image'
import Location from './Location'
import Price from './Price'
import FiltersInfo from './FiltersInfo'
import '../styles/Property.css'

const Property = (props) => {
    return (
        <div className="property">
            <Image img={props.img} />
            <div className = "property-info">
                <Location location={props.location} />
                <FiltersInfo filtersInfo={props.filtersInfo} />
                <Price price={props.price} />
            </div>
        </div>
    );
};

export default Property;