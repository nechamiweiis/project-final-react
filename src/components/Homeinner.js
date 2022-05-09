import react from "react";
import{ Link, Outlet} from 'react-router-dom'
import { Losses } from './Losses';
import { Founds } from './Founds';

export const Homeinner = () => {
    return <div className="Homeinner">
    <Link to={'/homeinner/losses'}>להכנסת פריט שאיבדת </Link>
    <Link to={'/homeinner/founds'}>להכנסת פריט שמצאת </Link>
  <Outlet/>
  </div>
}