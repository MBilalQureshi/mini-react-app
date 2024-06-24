import React,{Component} from "react";
import css from "./css/NavBarSimple.module.css"
import NavBarChild from "./NavBarChild";

export default class NavBarForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
    handleClick = () => {
        this.setState((prevState)=>{
            return{
                isLoggedIn : prevState.isLoggedIn ? false : true,
            }
        })
    }
    render(){
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <NavBarChild isLoggedIn={this.state.isLoggedIn} handleClick={this.handleClick}/>
            </div>
        )
    }
}