import LampListItem from '../components/lampListItem/lampListItem'
import LampListItemB from '../components/lampListItem/lampListItemB'
import './lamplist.css'

const LampList = () => {
    return (
      <div className='lampliststyle'>
        <LampListItem/>
        <LampListItemB/>
        <LampListItemB/>
        <LampListItem/>
      </div>
    );
  }
  
  export default LampList;
  