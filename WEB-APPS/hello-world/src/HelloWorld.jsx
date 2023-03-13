import { Component } from "react";

export class HelloWorld extends Component {

    render(){
        const text = 'My React App' ;
        return <h1 className="text-center bg-danger p-3">{text}</h1> ;
    }
}