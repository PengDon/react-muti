import rule from './rule';
import msg from './msg';



const validata =(name,type,value,msg)=>{
    let args = [name,type,value,msg];
    if(!rule[type](...args)){
      console.log(msg[type]());
      return false;
    }else{
        console.log("正常");
    }
}


export default validata;