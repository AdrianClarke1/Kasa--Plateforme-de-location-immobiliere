import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import {useState} from "react"
import "./carrousel.css"

function Carrousel({house}) {
    //use state for slider based on index of the pictures
    const [current, setCurrent] = useState(0);
    const length = house.pictures.length
    
    //next image 
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    //previous image
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      }
    //render of slider

    // Affichage du nombre d'images
    const nbrImages = current + 1 ;

    return (
        <section className="slider">
            
            <FaChevronLeft className={length === 1 ? "leftArrow disabled" : "leftArrow"} onClick={prevSlide}></FaChevronLeft>
            <FaChevronRight className={length === 1 ? "rightArrow disabled" : "rightArrow"} onClick={nextSlide}></FaChevronRight>
            
            <div className="nbrImgages">
                {nbrImages}/{length}
            </div>

            {house.pictures.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                        <img src={slide} alt={house.title} className='image' />
                        )}
                    </div>
                );
            })}
        </section>                    
    )
}
export default Carrousel

