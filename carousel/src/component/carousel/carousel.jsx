import './carousel.css';
import {useState} from 'react';

const Carousel = (props) => {
    const size = props.size;
    const imgs = props.imgs;

    const [currentImg, setCurrentImg] = useState(0);
    const [img, setImg] = useState(imgs[currentImg].img);
    const [alt, setAlt] = useState(imgs[currentImg].alt);

    const nextImg = () => {
        currentImg === (size-1) ? setCurrentImg(0) : setCurrentImg(currentImg + 1);
        setImg(imgs[currentImg].img);
        setAlt(imgs[currentImg].img);
    }

    const previousImg = () => {
        currentImg === 0 ? setCurrentImg(size-1) : setCurrentImg(currentImg - 1);
        setImg(imgs[currentImg].img);
        setAlt(imgs[currentImg].img);
    }

    return(
        <div className="carousel-div">
            <div className="carousel-left-btn"><p onClick={previousImg} className="noselect">{"<"}</p></div>
            <img src={img} alt={alt} className="carousel-img noselect" />
            <div className="carousel-right-btn"><p onClick={nextImg} className="noselect">{">"}</p></div>
        </div>
    )
}

export default Carousel;