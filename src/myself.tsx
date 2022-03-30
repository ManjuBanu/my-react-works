import React from 'react';
import styled from 'styled-components';
import manju from './manju.jpg';


const StyledList = styled.div`
list-style-type: none;
  margin-left: 30px;
  padding: 0;
  text-align: left;
  float: left;
`;

const  Styeldli =styled.div`
display: block;
color: #000;
padding: 8px 16px;
text-decoration: none;`;
    

const ContactMe = styled(StyledList)`
background-color:gray;
float:right;
`;

const Button = styled.button`
  background: rebeccapurple;
  border-radius: 3px;
  border: 2px solid black;
  color: whitesmoke;
  margin:20px;
  padding: 0.25em 1em;
`;

export class AboutMe extends React.Component<{}, {divshow:boolean,}>{
    constructor(props:any){
        super(props);
        this.state = {
            divshow:false,
        }}
    clickMe = ()=>{
        this.setState({
            divshow : !this.state.divshow,
        })
        }

    render(){
        return(
            <div className="AboutMe">
                <h1>WANT TO KNOW ABOUT ME !!!</h1>
                <img src={manju} className="mypic1" alt="logo" />
                <StyledList>
                    <Styeldli>
                        Name :: Manju Mala Devi M
                    </Styeldli>
                    <Styeldli>
                        D.O.B :: 08/01/1996
                    </Styeldli>
                    <Styeldli>
                        Nationality :: Indian
                    </Styeldli>
                    <Styeldli>
                        Languages :: Tamil & English
                    </Styeldli> 
                    <Styeldli>
                        Qualification :: B.Tech - Information Technology
                    </Styeldli> 
                    <Button onClick={this.clickMe}>Contact</Button>
                    {this.state.divshow && 
                        <ContactMe>
                    <Styeldli>
                        Phone :: 0463-243454
                    </Styeldli>
                    <Styeldli>
                        Mobile :: 9500481384
                    </Styeldli>
                    <Styeldli>
                        Email :: manjubanu08@gmail.com
                    </Styeldli>
                    <Styeldli>
                        Street :: 13/2-19, Shallom school street,
                    </Styeldli> 
                    <Styeldli>
                        City :: Tirunelveli
                    </Styeldli> 
                    <Styeldli>
                        State :: TamilNadu
                    </Styeldli>                   
                    </ContactMe>
                        }                 
                    </StyledList>
                    
            </div>
        );
    }
}