import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactContainer, ContactWrapper, ContactRow, Column1, Column2, TextWrapper, TopLine, Subtitle, ImgWrap, Img } from './ContactElements'
import toast from "../Toast";

const ContactSection = () => {
    const notify = React.useCallback((type, message) => {
        toast({ type, message });
      }, []);

    const form = useRef();
    const img = require('../../images/svg-5.svg').default;
    const sendEmail = (e) => {
        e.preventDefault();
        if(form.current.message.value === '' || form.current.user_name.value === '' || form.current.user_email.value === ''){
            console.log("error");
            notify("error", "Error! empty values")
            return;
        }

        emailjs.sendForm('service_is2tkrk', 'template_whx7euk', form.current, 'mSXg2-pofK9bBxI9L')
            .then((result) => {
                console.log(result.text);
                notify("success", "Success! Message Sent")
            }, (error) => {
                console.log(error.text);
                notify("error", "Error! Something Wrong Happened.")
            });
    };
    return (
        <>
            <ContactContainer id="Contact">
                <ContactWrapper>
                    <ContactRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Contact Me</TopLine>
                                <Subtitle>EMAIL: jack_nguyen@sfu.ca</Subtitle>
                                <form ref={form} onSubmit={sendEmail}>
                                    <label>Name</label>
                                    <input type="text" name="user_name" />
                                    <label>Email</label>
                                    <input type="email" name="user_email" />
                                    <label>Message</label>
                                    <textarea name="message" />
                                    <input className="submit" type="submit" value="Send"/>
                                </form>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt="at" />
                            </ImgWrap>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}
export default ContactSection;