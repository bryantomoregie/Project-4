import React, { Component } from 'react';
import { Panel, PanelGroup } from 'rsuite';
import '../About.css';
import 'rsuite/dist/styles/rsuite-default.css';

export default function About(props) {
    
        return(

            <div>
                <h1 className="about-header" >About Us</h1>
                <Panel bordered>
                <img src = "https://files.slack.com/files-pri/T02MD9XTF-F014TL11GG1/image.png" class="center"></img>
                <h3>A complete new way to shop</h3> 
                <p>Shoeapp is a social commerce platform for the next generation of retailers and shoppers. 
                Our mission is to transform commerce by combining the power of people and technology, 
                making shopping and selling simple, social, and fun. It is a place where you can buy 
                and sell new or used shoes you have sitting in your closet,
                The company is headquartered in Houston, texas.</p>
                </Panel>

                <Panel bordered>
                
                <h2>Founders</h2>
                <div class="row">
                <div class="column">
                <h4> Will Brennan </h4>
                <img src="https://ca.slack-edge.com/T02MD9XTF-UMDSJ3021-c33c158e356a-512" width="200" height="200" class="center" ></img>
                </div>
                <br></br>
                <br></br>
                <div class="column">
                <h4> Faizah Ahsan </h4>
                    <img src="https://ca.slack-edge.com/T02MD9XTF-UUVNWH4BX-b8641defb712-512" width="200" height="200" class="center"></img>
                </div>
                <br></br>
                <br></br>
                <div class="column">
                <h4> Bryant Omoregie </h4>
                <img src="https://ca.slack-edge.com/T02MD9XTF-UUJ8LKS3D-971bbbe09be7-512" width="200" height="200" class="center"></img>
                </div>
                </div>
                
                </Panel>
            </div>
            
        )
    
}
