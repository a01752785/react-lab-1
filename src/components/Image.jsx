// David Damian Galan
// La imagen de una propiedad en Airbnb
import '../styles/Image.css'

const Image = (props) => {
    return (
        <div className="image">
            <img src={props.img} alt="image"/>
        </div>
        
    );
};

export default Image;