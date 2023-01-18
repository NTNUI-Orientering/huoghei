import React, { FC, useReducer, CSSProperties, useEffect } from 'react';
import './Carousel.less';
import image1 from '../../assets/images/carousel/DSC07381-min.jpg';
import image2 from '../../assets/images/carousel/DSC07385-min.jpg';
import image3 from '../../assets/images/carousel/DSC07390-min.jpg';
import image4 from '../../assets/images/carousel/DSC07394-min.jpg';
import image5 from '../../assets/images/carousel/DSC07530-min.jpg';
import image6 from '../../assets/images/carousel/DSC07545-min.jpg';
import image7 from '../../assets/images/carousel/DSC07554-min.jpg';
import image8 from '../../assets/images/carousel/DSC07563-min.jpg';
import image9 from '../../assets/images/carousel/DSC07588-min.jpg';
import image10 from '../../assets/images/carousel/DSC07637-min.jpg';

const slides = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
const title = 'Hu og hei';
const subtitle = 'Høstens tøffeste utfordring';
//const description = 'Foto: Gudmund Toverud Høglund';

const isSmallScreen = () => {
  //console.log(window.innerWidth)
  return window.innerWidth < 756;
};

interface SlideI {
  slide: string;
  offset: number;
}

const Slide: FC<SlideI> = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  const stylesContainer = {
    '--offset': offset,
    '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1
  } as CSSProperties;
  const stylesWrapper = {
    '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
    backgroundImage: `url('${slide}')`
  } as CSSProperties;

  return (
    <div className="slide-container" data-active={active} style={stylesContainer}>
      <div className="slide-wrapper" style={{ backgroundImage: `url('${slide}')` }} />

      <div className="slide-content" style={stylesWrapper}>
        <div className="slide-content-inner">
          <h2 className="slide-title">{title}</h2>
          {!isSmallScreen() && <h3 className="slide-subtitle">{subtitle}</h3>}
          <p className="slide-description">{/*description*/}</p>
        </div>
      </div>
    </div>
  );
};

enum StateActionKind {
  NEXT = 'NEXT',
  PREV = 'PREV'
}

interface StateActionI {
  type: StateActionKind;
}

interface StateI {
  index: number;
}

const initalState = { index: slides.length - 1 };

const reducer = (state: StateI, action: StateActionI) => {
  const { type } = action;
  switch (type) {
    case StateActionKind.NEXT:
      return {
        ...state,
        index: (state.index + 1) % slides.length
      };

    case StateActionKind.PREV:
      return {
        ...state,
        index: state.index === 0 ? slides.length - 1 : state.index - 1
      };

    default:
      return state;
  }
};

const Carousel: FC = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: StateActionKind.PREV });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="slides">
        {!isSmallScreen() && (
          <button onClick={() => dispatch({ type: StateActionKind.NEXT })}> ‹ </button>
        )}

        {[...slides, ...slides, ...slides].map((slide, i) => {
          const offset = slides.length + (state.index - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}

        {!isSmallScreen() && (
          <button onClick={() => dispatch({ type: StateActionKind.PREV })}> › </button>
        )}
      </div>
    </div>
  );
};
export default Carousel;
