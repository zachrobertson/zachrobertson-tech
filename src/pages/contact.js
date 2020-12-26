import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"

const Contact = () => {

    return (
        <Layout>

            <ContactHeader>
                If you have any questions fell free to fill out the form below, or if there is a problem with the site subit an issue on my <Link to="https://github.com/zachrobertson">GitHub</Link>
            </ContactHeader>

            <FormWrapper>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                <label>
                    Email :
                    <input type="email" name="email" style={{
                        width: "960px",
                        height: "50px",
                        margin: "25px",
                    }}/>
                </label>
                <br />
                <label>
                    Name :
                    <input type="text" name="name" style={{
                        width: "960px",
                        height: "50px",
                        margin: "25px",
                        textAnchor: "tops"
                    }}/>
                </label>
                <br />
                <label>
                    Message :
                    <input type="text" name="message" style={{
                        width: "960px",
                        height: "250px",
                        margin: "25px",
                    }}/>
                </label>
                </form>
            </FormWrapper>

        </Layout>
    )
}

export default Contact

const ContactHeader = styled.h1`
    text-align: center;
    font-family: "Lucida Console";
    padding-top: 25px;

`

const FormWrapper = styled.div`
    position: relative;
    font-family: "Lucida Console";
    display: flex;
    flex-direction: column;
    padding-top: 10%;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    br {
        margin: 20%;
    }
`