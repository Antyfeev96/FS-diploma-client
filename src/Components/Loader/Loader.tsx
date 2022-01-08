import React from 'react';
import styled from 'styled-components'
import spinner from 'Assets/Images/Spinner.svg'

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    background-color: black;
    opacity: .8;
`

const LoaderBox = styled.div`
    width: 25%;
    min-width: 230px;
    height: 25%;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: 10px;
`

const Loader = () => {
    return (
        <Container>
            <LoaderBox>
                <img src={spinner} alt="spinner"/>
            </LoaderBox>
        </Container>
    );
};

export default Loader;
