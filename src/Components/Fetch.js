import Data from './Data/Data.json'



const Fetch = (props) => {
  const showData = e =>{
    console.log(Object.entries(Data.features)[0][1]);
  }
 
  return (
    <div>
    
      <button type='button' onClick={showData}>Show Data</button>
    </div>
  )
}

export default Fetch