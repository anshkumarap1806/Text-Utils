import {useState} from 'react'
export default function Textform(props) {
  const[text,setText] = useState(''); 
  // text='Hello'; wrong way to change state
    // setText("Hello");
    const click= ()=>{
      
      
      let c=0;
      for(var i=0;i<text.length;i++){
        if(text.charAt(i)===" "){
          c++;
        }}
        if(c===text.length||text.charAt(0)==="")
        props.salert("No Text","info")
        else{
        let newText=text.toUpperCase();
        setText(newText);
        props.salert("Converted to Upper case","success")
        }
    
  }
  
    const lclick= ()=>{
      
      let c=0;
      for(var i=0;i<text.length;i++){
        if(text.charAt(i)===" "){
          c++;
        }
      }
      if(c===text.length||text.charAt(0)==="")
      props.salert("No Text","info")
      else {
      let NewText=text.toLowerCase();
      setText(NewText);
      props.salert("Converted to lower case","success")
      }
    }
    const rclick= ()=>{
      let f = document.getElementById("exampleFormControlTextarea2").value;
      let r = document.getElementById("exampleFormControlTextarea3").value;
      
      let c=0;
      for(var i=0;i<text.length;i++){
        if(text.charAt(i)===" "||f===""||f===" " ||r===""||r===" "){
          c++;
        }
      }
      if(c===text.length||text.charAt(0)==="")
      props.salert("No Text","info")
      else{
      let NewTText=text.replace(f,r); 
      setText(NewTText);
      props.salert("Text Replaced","success")
      }
    
    }
    const cclick= ()=>{
      
      let c=0;
      for(var i=0;i<text.length;i++){
        if(text.charAt(i)===" "){
          c++;
        }
      }
      if(c===text.length||text.charAt(0)==="")
      props.salert("No Text","info")
      else{
      let NewText="";
      document.getElementById("exampleFormControlTextarea2").value="";
      document.getElementById("exampleFormControlTextarea3").value="";
      setText(NewText);
      props.salert("Text Cleared","success")
      }
    }
    
    const handle= (event)=>{
      console.log("onchange");
      setText(event.target.value);
    }
    const coclick=()=>{
      let c=0;
      for(var i=0;i<text.length;i++){
        if(text.charAt(i)===" "){
          c++;
        }
      }
      if(c===text.length||text.charAt(0)==="")
      props.salert("No Text","info")
      else{
        var text1=document.getElementById("exampleFormControlTextarea1");
      text1.select()
      navigator.clipboard.writeText(text1.value);
      props.salert("Text Copied","success")
      }
    }
    
  return (
    <>
    <div className="container">
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handle} value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
        </textarea>
    </div>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={click}>Convert to upper case
    </button>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={lclick}>Convert to lower case
    </button>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={cclick}>Clear Text
    </button>
    <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={coclick}>Copy Text
    </button>
    
    </div>
    <div className="container mt-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    <textarea className="form-control" placeholder='Word to find ' id="exampleFormControlTextarea2" rows="1" >
</textarea>
    <p></p>
    <textarea className="form-control" placeholder='Word to replace ' id="exampleFormControlTextarea3" rows="1" >
</textarea>
<button disabled ={text.length===0} className="btn btn-primary mt-2" onClick={rclick}>Replace Text
    </button>
    </div>
  </>
  )
}