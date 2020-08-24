import styled from "styled-components";
import {Card, CardContent} from "@material-ui/core";


export const CardPanelStyled = styled(Card)`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`

export const MenuItemDivStyled = styled.div`
    display: flex;
    min-width: 150px;
`

export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({ color }) => color || "black"};
`
