import React from "react";
import Grid from "../components/grid";
import styled from "@emotion/styled"

const Main = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:5vw;
`
export default function GridPage() {
    return (
        <Main>
            <Grid /> 
        </Main>
    )
};
