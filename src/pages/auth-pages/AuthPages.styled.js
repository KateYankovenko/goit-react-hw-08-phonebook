import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

export const Message = styled.p`
width: fit-content;
margin: 0 auto;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.title};
background-color: ${p => p.theme.colors.white};
margin-bottom: ${p => p.theme.space[5]}px;
border-radius: ${p => p.theme.radii.normal};
opacity: 0.9;
`;

export const StyledContainer = styled(Container)`
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom:  ${p => p.theme.space[6]}px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('https://cdn.pixabay.com/photo/2017/12/01/08/52/feedback-2990424_1280.jpg');`