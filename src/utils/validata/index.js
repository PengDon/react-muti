import Rule from './rule';
import Msg from './msg';



const validata =(name,type,value,msg)=>{
    let tip = '';
    if(!Rule[type](value)){
        tip = Msg[type](name);
    }
    return tip;
}


export default validata;