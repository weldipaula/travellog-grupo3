
import React,{useEffect, useState} from 'react';
import { useCssHandles } from 'vtex.css-handles';
import './Shelf.css';

const CSS_HANDLES = [
  'shelfContainer',
  'shelfInfo'
]

const Shelf=()=>{
 
  const [user,setUser]=useState(undefined);

  const handles = useCssHandles(CSS_HANDLES);

  useEffect(()=>{

      fetch('/api/sessions?items=*')
      .then(response=>response.json())
      .then((data)=>{
            if(data.namespaces.profile.isAuthenticated.value=='false'){
              setUser(undefined);
            }else{
              const options = {method: 'POST', 

              headers: {
            
                "Content-Type": "application/json",
                "Accept": "application/json"
            
              },
              body:JSON.stringify({"user":data.namespaces.authentication.storeUserId.value})
            };
        
              fetch('https://52.67.237.244/pontos',options)
              .then(response=>response.json())
              .then((data)=>{
                setUser(data)
                console.log(data);
              });
           
            }
      });
  })

  return  (
	  user ?
      <d className={`${handles.shelfContainer}`}><p className={`${handles.shelfInfo}`}>{user} PONTOS</p></d>
    :
      ''
  );
}

export default Shelf;