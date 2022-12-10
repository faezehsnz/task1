import React from "react";
import Chart from "../components/chart";
import styled from "@emotion/styled"

const Main = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
`
export default function ChartPage() {
    return (
        <Main>
            <Chart /> 
        </Main>
    )
};

