import React from "react";
import styled from "@emotion/styled"
import { Button } from "@mui/material";
import {Stack} from "@mui/material";

const Main = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
`
export default function MainPage() {
    return (
        <Main>
            <Stack spacing={2} direction="column" width={250}>
                <Button href="/chart" variant="contained">task 1</Button>
                <Button href="/grid" variant="contained">task 2</Button>
            </Stack>
        </Main>
    )
};

