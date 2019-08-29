import React from 'react';
import './AddressForm.css';
import Form from 'react-bootstrap/Form';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

/**
 * 
 * 2 types of BINDING happening
 * one in constuctor
 * second in form submit
 * 
 * for every input there is a change handler
 * 
 * PROPS are defined using function or class and are used as elements
 * they don't need binding
 * only change handler or similar functions do
 * 
 * STATE changes and many could be maintained.
 * setState function used
 * 
 * to make form react BOOTSTRAP used
 * 
 * PrintFormLabel1 shows prop use inside class using function
 * PrintFormLabel uses a class(commented) || ES6
 * 
 */

// Regaular class for craeting element/props, ES6 below
/*
class PrintFormLabel extends React.Component {
  render(){
    return <FormLabel>{this.props.labelFor}</FormLabel>;
  }
}
*/
// ES6 version of above
const PrintFormLabel = props => <FormLabel>{props.labelFor}</FormLabel>;

class AddressForm extends React.Component {

  
  constructor(props){
    super(props);

    this.state = {
      name: '',
      age: '',
      address: '',
      city: '',
      category: '',
      mailinglist: ''
    };

    // binding functions, way 2 check form submit
    //this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangeAge = this.handleOnChangeAge.bind(this);
    this.handleOnChangeAddress = this.handleOnChangeAddress.bind(this);
    this.handleOnChangeCategory = this.handleOnChangeCategory.bind(this);
    this.handleOnChangeMailingList = this.handleOnChangeMailingList.bind(this);
  }

  handleOnSubmit(event){
    // remember to update the default behaviour
    event.preventDefault();
    
    console.log("Form submit successful");
    console.log("Name: " + this.state.name);
    console.log("Age : "+ this.state.age);
    console.log("Address : "+ this.state.address);
    console.log("City : "+ this.state.city);
    console.log("Category : "+ this.state.category);
    console.log("Mailing List : "+ this.state.mailinglist);
    
  }

  handleOnChangeName(event){
    // I want to set the state here so setState
    this.setState({name : event.target.value});
  }

  handleOnChangeAge(event){
    this.setState({age : event.target.value});
  }

  handleOnChangeAddress(event){
    this.setState({address : event.target.value});
  }

  handleOnChangeCity(event){
    this.setState({city : event.target.value});
  }

  handleOnChangeCategory(event){
    this.setState({category : event.target.value});
  }

  handleOnChangeMailingList(event){
    this.setState({mailinglist : event.target.value});
  }

  PrintFormLabel1(props){
    return <FormLabel>{props.labelFor}</FormLabel>;
  }


  render(){
    return (
      <Container>
        <Form onSubmit={(e) => this.handleOnSubmit(e)}>
          
          <Row>
            <this.PrintFormLabel1 labelFor="Name : "/>
            <input type="text" value={this.state.name} onChange={this.handleOnChangeName} ></input>
          </Row>
          
          <Row>
            <PrintFormLabel labelFor="Age : "/>
            <input type="number" value={this.state.age} onChange={this.handleOnChangeAge} ></input>
          </Row>

          
          <Row>
            <PrintFormLabel labelFor="Address : "/>
            <textarea value={this.state.address} onChange={this.handleOnChangeAddress}>
            </textarea>
          </Row>


          <Row>
            <PrintFormLabel labelFor="City : "/>
            <select value={this.state.city} onChange={(e)=>this.handleOnChangeCity(e)}>
              <option value="Neemuch">Neemuch</option>
              <option value="Nantes">Nantes</option>
              <option value="Boston">Boston</option>
              <option value="Sambhar Salt Lake">Sambhar Salt Lake</option>
            </select>
          </Row>


          <Row>
            <PrintFormLabel labelFor="Order Type : "/>
            <input type="radio" value="Retail" 
            onChange={this.handleOnChangeCategory} name="ordertype"></input>
            Retail
            <input type="radio" value="Wholesale" 
            onChange={this.handleOnChangeCategory} name="ordertype"></input>
            Wholesale
          </Row>

          <Row>
            <PrintFormLabel labelFor="Subscribe Mails : "/>
            <input type="checkbox" value="offer" onChange={this.handleOnChangeMailingList}/>
            Offers Emails
            <input type="checkbox" value="marketing" onChange={this.handleOnChangeMailingList}/>
            Marketing Emails
          </Row>


          <Row>
            <Button type="submit">Submit</Button>
          </Row>  
        </Form>
      </Container>
    );
  }
  
}

export default AddressForm;