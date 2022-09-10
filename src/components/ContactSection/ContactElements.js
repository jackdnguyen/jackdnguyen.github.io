import styled from 'styled-components'
import { Link } from 'react-scroll'

export const ContactContainer = styled.div`
    color:#fff;
    background: #f9f9f9;

    @media screen and (max-width:768px){
        padding: 100px 0;
    }  
`
export const ContactWrapper = styled.div`
    display:grid;
    z-index:1;
    height:890px;
    width:100%;
    max-width: 1100px;
    margin-right:auto;
    margin-left:auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-height:868px){
        height:800px;
    }
`;

export const ContactRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width:768px){
        grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding:0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding:0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: #010606;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 80%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #F38181;
      }
    }
    textarea {
      max-width: 80%;
      min-width: 80%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-bottom: 35px;
      &:focus {
        border: 2px solid #F38181;
      }
    }
    label {
      margin-top: 1rem;
      padding-bottom:.7rem;
    }
    .submit{
      border-radius:50px;
      background: black;
      white-space:nowrap;
      width:8rem;
      /* padding: 12px 30px; */
      color: #fff;
      font-size:16px;
      outline:none;
      border:none;
      cursor:pointer;
      display:flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;

      &:hover {
          transition: all 0.2s ease-in-out;
          background: #F38181;      
      }
    }
  }
`;

export const TopLine = styled.p`
    color:#F38181;
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Subtitle = styled.p`
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.2px;
    color: #010606;
    margin-bottom:35px;
`;

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const Button = styled(Link)`
    border-radius:50px;
    background: black;
    white-space:nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01BF71;      
    }
`