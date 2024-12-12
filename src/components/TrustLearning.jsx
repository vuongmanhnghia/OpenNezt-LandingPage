import csie from '../assets/trust_learning_logo/csie.png';
import neuron from '../assets/trust_learning_logo/neuron.png';
import ptitiec from '../assets/trust_learning_logo/ptitiec.png';
import vklinks from '../assets/trust_learning_logo/vklinks.png';
import zent from '../assets/trust_learning_logo/zent.png';
import "./TrustLearning.scss";

function TrustLearning() {
  return (
    <>
      <div className="trust-learning-container">
        
          <div className="trust-learning-title">
            <p className='title'>Trusted By Leading Educational Institutions And Incubators</p>
          </div>
          <div className="trust-learning-logos">
            <div className='logos' style={{ backgroundImage: `url(${csie})` ,width: "100px" , height :"100px" }}></div>
            <div className='logos-neuron' style={{ backgroundImage: `url(${neuron})` ,width: "160px" , height :"100px"}}></div>
            <div className='logos' style={{ backgroundImage: `url(${zent})`,width: "100px" , height :"100px" }}></div>
            <div className='logos' style={{ backgroundImage: `url(${ptitiec})`,width: "100px" , height :"100px" }}></div>
            <div className='logos' style={{ backgroundImage: `url(${vklinks})` ,width: "100px" , height :"100px"}}></div>

          </div>
       
      </div>
    </>
  );
}

export default TrustLearning;