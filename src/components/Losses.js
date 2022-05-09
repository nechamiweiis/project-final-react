import Combobox from 'react-widgets/Combobox';
import axios from 'axios';

export const Losses=()=>
{
    let allCategories
    axios.post("http://localhost:5000/category")
    .then((res) => {
      if (res.data) {
        console.log(res.data);

        allCategories = res.data;
      }})
    
    return<div className='Losses'>
        <Combobox  
            data={allCategories}
        />
    </div>
}