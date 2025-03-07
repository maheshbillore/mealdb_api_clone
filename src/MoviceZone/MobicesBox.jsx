import React from 'react'

const MobicesBox = ({props}) => { 
    const {id,thumbnail,title,category} = props;   
  return (
    <div className='hover_effect' style={{maxWidth:'250px',border:'2px solid white',borderRadius:'10px'}} >
        <div style={{padding:'10px'}} >
            <img src={thumbnail} alt=''  style={{width:'215px',textAlign:'center'}} />
        </div>
       <div style={{flexWrap:'wrap'}} >
       <p>{title}</p> 
       <p>06-03-2025</p>
       </div>
    </div>
  )
}

export default MobicesBox