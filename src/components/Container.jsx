// David Damian Galan
// El contenedor de las propiedades

import "../styles/Container.css"
import Property from './Property';
import monterrey from '../images/monterrey.webp'
import helotes from '../images/helotes.webp'
import arteaga1 from '../images/arteaga1.webp'
import arteaga2 from '../images/arteaga2.webp'

const Container = (props) => {
    return (
        <secion className="container">
            <Property location={{city: 'Monterrey', state: 'Nuevo León', country: 'México'}}
                filtersInfo={{dist: 4,
                              nights: 5,
                              checkinDate: new Date(2023, 3, 9),
                              checkoutDate: new Date(2023, 3, 14)}}
                price={13372}
                img={monterrey}/>
            <Property location={{city: 'Helotes', state: 'Texas', country: 'US'}}
                filtersInfo={{dist: 467,
                              nights: 6,
                              checkinDate: new Date(2023, 3, 23),
                              checkoutDate: new Date(2023, 3, 29)}}
                price={21271}
                img={helotes}/>
            <Property location={{city: 'Arteaga', state: 'Coahuila', country: 'México'}}
                filtersInfo={{dist: 57,
                              nights: 6,
                              checkinDate: new Date(2023, 3, 1),
                              checkoutDate: new Date(2023, 3, 7)}}
                price={27930}
                img={arteaga1}/>
            <Property location={{city: 'Arteaga', state: 'Coahuila', country: 'México'}}
                filtersInfo={{dist: 50,
                              nights: 6,
                              checkinDate: new Date(2023, 3, 8),
                              checkoutDate: new Date(2023, 3, 14)}}
                price={95297}
                img={arteaga2}/>
        </secion>
    );
};

export default Container;