// import Button from '../../components/Button/Button';
// import Input from '../../components/Input/Input';

import Counter from '../../components/Counter/Counter';
import './styles.css';


function Lesson04() {
//  {/* 2 way  */}
// const showMessage = ()=>{
//   alert ("Hello, User!");
// };
// const showNameMessage = (userName)=>{
//   alert (`Hello, ${userName}!`);
// };

// const onChange = (event, message) => {
//   // console.log (event); 
//   console.log (`${event.target.value} - ${message}`);
// };

//   return (
//     <div className='lesson04-container'>

//       <Input onInputChange={(event) => onChange(event, "message")} />

//       {/* 1 way */}
//       <Button name='Function Inner' onButtonClick={()=> alert ("Hi!")}/>
       
//       <Button name='Function Outer' onButtonClick={showMessage}/> 
//       {/* 3 способ передачи функции с параметрами  */}
//       <Button name='Function With Parameters' onButtonClick={()=>showNameMessage("Tom")}/>

//     </div>
//   ); 

return (
  <div className="lesson04-container">
<Counter />
  </div>
);
  
}
export default Lesson04;