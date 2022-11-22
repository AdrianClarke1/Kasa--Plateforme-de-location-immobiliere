import houseList from '../../data/data';
import {useParams, Navigate} from "react-router-dom"
import Carrousel from "../../components/carrousel/carrousel";
import Collapsible from '../../components/collapsible/collapsible';
import "./housingInfo.css"
import Tag from "../../components/tag/tag"
import { FaStar } from "react-icons/fa";


function HousingInfo() {

    const houseListCopy =[...houseList];

    const params = useParams()

    const houseUpdated = houseListCopy.find((house) => house.id === params.id)

    // index == 2 valeurs possibles : -1 s'il n'existe pas, >=0 si existe
    const index = houseListCopy.findIndex((house) => house.id === params.id)

    const ratings = [1,2,3,4,5]

    return index >= 0 ? (
        <main>
        <Carrousel house={houseUpdated}/>

        <section className="flexContainer">
            <div className='title'>
                <h1 className='houseTitle'>{houseUpdated.title}</h1>
                <h2 className='houseLocation'>{houseUpdated.location}</h2>
                <ul className='tagsContainer'>
                    {houseUpdated.tags.map((tag) => {
                        return (
                            <Tag key={tag+houseUpdated.id}>
                                {tag}
                            </Tag>
                        )
                    })} 
                </ul>
            </div>
            <div className='rating'>
                <div className='hostInfo'>
                    <h3 className='hostName'>{houseUpdated.host.name}</h3>
                    <img className='hostImg' src={houseUpdated.host.picture} alt={houseUpdated.host.name}></img>
                </div>
                <ul>    
                    {ratings.map((rating) => {
                        return houseUpdated.rating >= rating ? (
                            <li key={ratings[rating]+houseUpdated.id}className='star-active'><FaStar /></li>
                            ) : (
                            <li key={ratings[rating]+houseUpdated.id} className="star"><FaStar /></li>
                        );
                    })}
                </ul>
            </div>
        </section>
            
        <section className='collapsiblesHousing'>
            <div className='collapsibleWrap'>
            <Collapsible label="Description">
                <p>
                    {houseUpdated.description}
                </p>
            </Collapsible>
            </div>
            <div className='collapsibleWrap'>
            <Collapsible label="Equipements">
                <ul>
                    {houseUpdated.equipments.map((component) => {
                        return(
                        <li key={component+houseUpdated.id}>{component}</li>
                        )
                            
                    })}
                </ul>
            </Collapsible>
            </div>
        </section>
        </main>
    ) : (
        <Navigate to="/*" />
    );
}

export default HousingInfo