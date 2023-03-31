// David Damian Galan
// La informacion de los filtros de una busqueda en Airbnb

import "../styles/FiltersInfo.css"

const FiltersInfo = (props) => {
    const dist = props.filtersInfo.dist;
    const nights = props.filtersInfo.nights;
    const checkinDate = props.filtersInfo.checkinDate;
    const checkoutDate = props.filtersInfo.checkoutDate;
    const checkinMonth = checkinDate.toLocaleString("en-US", { month: "long" });
    const checkinDay = checkinDate.toLocaleString("en-US", { day: "2-digit" });
    const checkoutMonth = checkoutDate.toLocaleString("en-US", { month: "long" });
    const checkoutDay = checkoutDate.toLocaleString("en-US", { day: "2-digit" });
    return (
        <div className="filters-info">
            {dist} kilometers away<br/>
            {nights} nights: {checkinMonth}, {checkinDay} - {checkoutMonth}, {checkoutDay}
        </div>
    );
};

export default FiltersInfo;