import styled from "styled-components";
const Login = (props) {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/minilogo.svg" alt=""/>
                </a>
                <Join>Join now</Join>
                <SignIn>Sign in</SignIn>
            </Nav>
            <Section>
                <Hero>
                   <h1>Welcome to the world of giving</h1> 
                </Hero>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    
    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px); {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 0 12px;
    text-decoration: none;
    border-radius: 6px
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover {
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167px;
    font-size: 16px;
    font-weight: 600;
    line-height:40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    &:hover{
        background-color
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding 60px 0;
    position relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    hi {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: 
    }
`;
export default Login;