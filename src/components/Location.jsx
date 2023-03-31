// David Damian Galan
// La localizacion de una propiedad en Airbnb

import "../styles/Location.css"

const Location = (props) => {
    const city = props.location.city;
    const state = props.location.state;
    const country = props.location.country;
    return (
        <div className="location">
            {city + ', ' + state + ', ' + country}
        </div>
    );
};

export default Location;