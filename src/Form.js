import React, { Component } from "react";
 
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  name: '',
	  age: '',
	  accept: false
	};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
	alert("Name : " + this.state.name + " -- " + this.state.age + " ==> " + this.state.accept);
	event.preventDefault();
  }
  
  handleChange(event) {
	let name = event.target.name,
	    value = (name === "accept" ? event.target.checked : event.target.value);
	this.setState( { [name] : value });
  }
  
  render() {
    return (
	  <form onSubmit={this.handleSubmit}>
	    Name : <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
		<br/>
		Age : <select name="age" value={this.state.age} onChange={this.handleChange}>
		  <option>-</option>
		  <option value="min">&lt; 18 years old</option>
		  <option value="max">&gt;= 18 years old</option>
		</select>
		<br/>
		<input type="checkbox" name="accept" value={this.state.accept} onChange={this.handleChange}/> Accept the terms
		<br/>
		<br/>
		<input type="submit" name="submit" value="Submit"/>
	  </form>
    );
  }
}
 
export default Home;