import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"


const Contact = () => {


    const selectAllText = (e) => {
        e.target.select();
    };

    return (
        <Layout>

            <ContactHeader>
                If you have any questions fell free to fill out the form below, or if there is a problem with the site submit an issue on my <a href="https://github.com/zachrobertson">GitHub</a>
            </ContactHeader>

            <HorizontalLine />

            <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" id="contact">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
            <label >
                Name :
                <input type="text" name="name" required={true}/>
            </label>
            <br />
            <label >
                Email :
                <input type="email" name="email" required={true}/>
            </label>
            <br />
            <label >
                Message :
                <textarea name="message" required={true} onClick={selectAllText} onFocus={selectAllText} defaultValue={"Type your message here!"} />
            </label>
            <br />
            
            <Submit type="submit" value="SUBMIT" style={{
                fontFamily : "Consolas",
                fontSize: "20px",
                background: "#1f2e2e",
                border: "2px solid black",
                borderRadius: "10px/10px",
                color: "white",
                padding: "15px"
            }} />
            
            </Form>

            

        </Layout>
    )
}

export default Contact

const ContactHeader = styled.h1`
    text-align: center;
    font-family: "Consolas";
    padding-top: 25px;
    font-size: 20px;

`

const Form = styled.form`
    font-family: "Consolas";
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;

    label {
        font-size: 20px;
        text-align: center;
        padding: 20px;

        input {
            margin-top: 20px;
            display: block;
            align-items: center;
            width: 420px;
            height: 50px;
            border-radius: 10px/10px;
            padding: 10px;
            border: 2px solid black;
            background: #1f2e2e;
            color: white;
            box-shadow: 5px 5px 5px 5px black;
        }

        textarea {
            margin-top: 20px;
            display: block;
            align-items: center;
            width: 420px;
            height: 250px;
            border-radius: 10px/10px;
            padding: 10px;
            color: white;
            background: #1f2e2e;
            border: 2px solid black;
            box-shadow: 5px 5px 5px 5px black;
        }
    }
`

const Submit = styled.input`
    box-shadow: 5px 5px 5px 5px black;
    
    :hover {
        cursor: pointer;
        color: white;
    }

`

const HorizontalLine = styled.hr`
    display: block;
    padding: 0;
    height: 2px;
    background-color: #333;
    border: none;
`