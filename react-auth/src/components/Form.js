import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component{
    constructor(props) {
        super(props);
        //Khởi tạo state chứa giá trị của input
        this.state = {
            customer: {
              fullname: props.fullname,
              catg: props.catg,
              bday: props.bday
            }
        }
    }

    changeInputValue(event) {
        var customer = this.state.customer;
        customer.fullname = event.target.value;
        customer.catg = event.target.value;
        customer.bday = event.target.value;

        this.setState({ customer: customer });
    }

    submitForm(e){
        e.preventDefault();
        alert('Submit success')
        console.log(
            this.state.customer.fullname
        )
    }
    
    render(){
        return(
            <form>
                <fieldset>
                {/**Thông tin ngắn */}
                    <div class="short-info">
                        <label for="name">Full name:<br/>
                            <input 
                                type="text" id="fullname" 
                                name="fullname"  
                                value={this.state.customer.fullname}
                                onChange={e=>this.changeInputValue(this)}
                            />
                        </label><br/>
                        <label for="category">Category<br/>
                            <input 
                                type="text" id="catg" 
                                name="catg" 
                                value={this.state.customer.catg}
                                onChange={e=>this.changeInputValue(e)}    
                                />
                        </label><br/>
                        <label for="birth-day">Date of birth:<br/>
                            <input 
                                type="text" id="bday" 
                                name="bday"
                                value={this.state.customer.bday} 
                                onChange={e=>this.changeInputValue(e)}   
                            /><br/>
                        </label>
                        <label for="sex">Sex : <br/>
                            <select name="sex" id="gender" onChange={e=>this.changeInputValue(e)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="order">Order</option>
                            </select>
                        </label>
                    </div>

                     {/**Vùng contact*/}
                    <div class="just-contact">
                        Contact<br/>
                        <label for="phone">Phone number:<br/>
                            <input type="text" id="phone" name="phone"/><br/>
                        </label>
                        <label for="mail">Emails:<br/>
                            <input type="email" id="mail" name="mail"/>
                        </label><br/>
                        <label for="website">Website:<br/>
                            <input type="text" id="website" name="website"/><br/>
                        </label>
                    </div>

                    {/**Vùng text */}
                    <div class="info-discrip">
                        <label for="about">
                            About: <br/>
                            <textarea name="about" id="about" cols="30" rows="10">
                                Something
                            </textarea>
                        </label><br/>
                        <label for="hobby">
                            Hobby: <br/>
                            <textarea name="hobby" id="hobby" cols="30" rows="10">
                                Something
                            </textarea>
                        </label><br/>
                        <label for="photo">
                            Photos: <br/>
                            <input type="image" id="inden-img" name="iden-img" />
                        </label><br/>
                        <label for="career">
                            Career Goals: <br/>
                            <textarea name="career" id="career" cols="30" rows="10">
                                Something
                            </textarea>
                        </label><br/>
                        <label for="education">
                            Education: <br/>
                            <textarea name="edu" id="edu" cols="30" rows="10">
                                Something
                            </textarea>
                        </label><br/>
                        <label for="exp">
                            Experience: <br/>
                            <textarea name="exp" id="exp" cols="30" rows="10">
                                Something
                            </textarea>
                        </label><br/>
                        <label for="skill">
                            Skill: <br/>
                            <textarea name="skill" id="skill" cols="30" rows="10">
                                Something
                            </textarea>
                        </label><br/>
                        <label for="lang">
                            Language: <br/>
                            <textarea name="lang" id="lang" cols="30" rows="10">
                                Something
                            </textarea>
                        </label><br/>
                        <label for="certifi">
                            Certification: <br/>
                            <textarea name="certifi" id="certifi" cols="30" rows="10">
                                Something
                            </textarea>
                        </label><br/>
                    </div>

                    {/**Vùng thao tác */}
                    <div>
                        <button id="cancel" name="cancel">
                            Cancel
                        </button>
                        <label for="submit">
                            <input type="submit" id="submit" name="submit"  onSubmit={e => {this.submitForm(e);}}/>
                        </label>
                    </div>

                </fieldset>
            </form>
        );
    }
}

export default Form