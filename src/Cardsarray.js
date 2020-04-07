import React from 'react';
import Card from './Card';


const Cardsarray=({robots})=>{

const Cardscomponent=robots.map((props,i)=>{

return(<Card  
	id={robots[i].id} 
	name={robots[i].name} 
	email={robots[i].email}/>);

})



return(
	<div>
	{Cardscomponent}
	</div>
);

}

export default Cardsarray;