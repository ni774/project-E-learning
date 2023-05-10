import React,{useEffect} from 'react'

function Buy(props) {
    const id = props.id;
   const sendRequest = async() =>{
       try{ 
           const res = await fetch("",{
               method: 'post',
               headers : {
                'Authorization': `${token}`,
               },

           })
       }catch(err){
           console.log(err);
       }
   }
    return (
        <div>
            <h3>buy</h3>
        </div>
    )
}

export default Buy

