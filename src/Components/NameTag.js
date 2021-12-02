import {React, Component} from 'react';
class NameTag extends Component{
    render(){
        return(
        <div style={{background:'red',textAlign:'center',width:'200px',margin:'auto',border:'1px solid black'}}>
            <h1 style={{background:'white',color:'red'}}>John Doe</h1>
            <h3 style={{color:'white'}}>Teacher</h3>
        </div>
        )
    }
}
export default NameTag;