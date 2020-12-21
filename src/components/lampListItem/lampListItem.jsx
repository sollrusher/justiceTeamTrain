import lampA from '../../assets/lampA.png'
import './lamplistitem.css';

const LampListItem = () => {
    return (
      <div className='box'>
        <img src={lampA} alt="gag" className='imgstyle'/>
        <div className='price'>
            <h3>Blue Desk</h3>
            <p>$250.00</p>
        </div>
      </div>
    );
  }
  
  export default LampListItem;
  