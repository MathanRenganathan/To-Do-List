import { useState } from 'react'
import './App.css'

function App() {
  const [click, setclick] = useState([])
  const[input,setinput]=useState('')

  // ------------------------------------ethula input data store aakum 
  function store(get){
    setinput(get.target.value)
  }

  // console.log(input)
  console.log(click)

  // ------------------------------------kutukura input ta ,spread operator la store pannuvom oneu onna
  function show(){

    
    if(input.trim()===""){
      alert("enter data")
    }
    else{
      // setclick(input)-------------------------------ethula input store pandrom
      setclick([...click,input]) 
      setinput("");//-------------------------ethu inputa empty ya maatha
    }
  }

// -----------------------------Ethu remove button function
// --------naama click pandra box oda index value compare to (click state) la stored la oola value-vai not equal nu sollurom 
// atha setclick ku update pannurom so athanala athu show aakala 

  function remove(int){
    console.log(int)
    const removepanna = click.filter((item, index) => index !== int);
    setclick(removepanna); 
  }



  return (
    <div >
      
  <div className='overall'>
    

    <div className='left'>
    <h1>TodoList</h1>

    <div className='leftinside'>

    <textarea type="text" value={input}  onChange={store}/><br />
    <button onClick={show}>Click</button>
  {/* <h1>{click}</h1> */}
    </div>

    </div>


    <div className='right'>
    <h1>ReccentList</h1>

    
{/* <h1>{click}</h1> */}
{/* -----------------------------------enga thaan clicku map adikurom */}
      
        {
          click.map((currentitem,index)=>(
            <div className='rightinside'>
              
              
              <h3 className='h3'>task{index+1}</h3>
                
            <div><button className='but'></button>{currentitem}</div> 

                <button className='but1' onClick={()=>remove(index)}>remove</button>
                
              
            </div>
          ))
        }
    
    </div>

    </div>

    </div>
  )
}

export default App;
