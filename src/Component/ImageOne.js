import { Parallax } from 'react-parallax';
import Nasa from '../img/nasa.jpg';
import logo from '../../src/logo.png';

const ImageOne = () => (
    <Parallax
      className='image'
      blur={0}
      bgImage={Nasa}
      strength={800}
      bgImageStyle={{
        minHeight: '100%',
        width: '100%',
        height: '100%',
      }}
    >
      <div className='content'>
            <span className="img-txt">VIVID VIBES</span>
        </div>
    </Parallax>
  );
  
  
export default ImageOne;
