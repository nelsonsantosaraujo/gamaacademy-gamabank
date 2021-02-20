import styled from "styled-components";

export const Container = styled.div`
    background-color: #8C52E5;
    height: 100%;
    min-height: 100vh;
`

export const Header = styled.div`
    img{
        margin: 40px;
    }
`

export const LoginPage = styled.div`
    margin-top: -40px;
    display:flex;
    align-items: center;
    justify-content: center;
    .login-div{
        display:block;
        align-items: center;
        justify-content: center;
        background: #fff;
        max-width: 600px;
        min-width: 450px;
        border-radius: 10px;
        padding: 30px;
        .recovery-div{
            display: inline-block;
            a {
                color: red;
            }
        }
        h4{
            font-size: 25px;
            margin-bottom:20px;
            text-align: center;
        }
        form{
            display: inline-block;
            margin: 0 auto;
            input{
                    display: initial;
                    border: none;
                    font-size: 16px;
                    padding: 8px;
                    font-weight: 300;
                    text-align:left;
                    width: 85%;
                    margin: 25px;
                    border-bottom: 2px solid #666;
                    transition: 0.5s;
                    &:focus{
                        border-bottom: 3px solid #8C52E5;
                    }
                }
                button{
                margin: auto;
                margin-top: 45px;
                display: flex;
                justify-content: space-between;
                cursor: pointer;
                border: none;
                border-radius: 100px;
                padding: 15px 30px;
                width: 80%;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                font-size: 20px;
                font-weight: 300;
                border: 3px solid #8C52E5;
                margin: 0 auto;
                &:hover{
                    background: #68DE5A;
                }
            }
        }
    }
`

export const LinkSections = styled.div`
    display: block;
    text-align: center;
    margin-top: 25px;
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  `