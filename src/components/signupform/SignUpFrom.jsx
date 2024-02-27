import {SignUpFormBlock, InputGroup, Button } from "./SignUpForm.element"

export const SignUpForm = () => {
    return <SignUpFormBlock>
      
        <InputGroup>
            <label htmlFor="email">이메일</label>
            <input 
                name="email"
                placeholder="ssafe11@gmail.com"
            />
            <span>유효하지 않은 이메일 입니다.</span>
        </InputGroup>
        <InputGroup>
            <label htmlFor="password">비밀번호</label>
            <input 
                name="password"
                placeholder="비밀번호를 입력하세요."
            />
            <span>유효하지 않은 비밀번호 입니다.</span>
        </InputGroup>
        <InputGroup>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input 
                name="passwordConfirm"
                placeholder="비밀번호를 다시 입력해주세요."
            />
            <span>입력하신 비밀번호와 다릅니다.</span>
        </InputGroup>
        
        <Button>회원가입</Button>
    </SignUpFormBlock>
}