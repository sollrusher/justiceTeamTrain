import lampB from '../../assets/lampB.png'
import './lamplistitem.css';

function LampListItem() {
    return (
      <div className='box'>
        <img src={lampB} alt="gag" className='imgstyle'/>
        <div className='price'>
            <h3>Gold</h3>
            <p>$243.00</p>
        </div>
      </div>
    );
  }
  
  export default LampListItem;
  