import { HeaderBlock, Version,Logo,SubTitle,Div,Button } from "./Header.element"

export const Header = () => {
    return <HeaderBlock>
        <Div>
            <Logo>폼나는 싸패</Logo>
            <Version> v 3.4.1 24/02/13</Version>
            <SubTitle>2024 SAFFE FORM PROJECT Create your own Form</SubTitle>
        </Div>
        <Button>바로 작성하기</Button>
    </HeaderBlock>
}