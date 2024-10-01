import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "../icons/cart";
const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight: normal;
    font-size: 3rem;
`;
const Desc = styled.p`
    color:#aaa;
    font-size: .8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img{
        max-width:400px;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonWrapper =styled.div`
    display: flex;
    gap: 10px;
    margin-top:25px;
`;

export default function Featured({feature}){
    return(
        <Bg>
            
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title></Title>
                            <Desc></Desc>
                            <ButtonWrapper>
                                <ButtonLink href={'/features/'} outline={1} white={1}>
                                    Read more
                                </ButtonLink>
                                <Button primary={1}>
                                    <CartIcon/>
                                    Add to Book</Button>
                            </ButtonWrapper>
                            
                        </div>
                    </Column>
                    <Column>
                        
                    </Column>
                </ColumnsWrapper>
            
        </Bg>
    );
}