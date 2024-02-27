import { useEffect, useState } from "react";
import {SignUpFormBlock, InputGroup, Button } from "./SignUpForm.element"
import { checkEmail,checkPassword } from "../../utils/validator";

export const SignUpForm = () => {
    //이메일
    const [email,setEmail] = useState("");
    const [emailValidateMessage,setEmailValidateMessage] = useState("");
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
    useEffect(()=>{
        if(!checkEmail(email)){
            setEmailValidateMessage("유효하지 않은 이메일 형식입니다.")
        }
        if(checkEmail(email)||!email){
            setEmailValidateMessage("");
        }
    },[email])

    //패스워드
    const [password,setPassword] = useState("");
    const [passwordValidateMessage,setPasswordValidateMessage] = useState("");
    
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }
    useEffect(()=>{
        if(!checkPassword(password)){
            setPasswordValidateMessage("유효하지 않은 비밀번호 형식입니다.")
        }
        if(checkPassword(password)||!password){
            setPasswordValidateMessage("");
        }
    },[password])

    //패스워드 확인
    const [passwordConfirm,setPasswordConfirm] = useState("");
    const [passwordConfirmValidateMessage,setPasswordConfirmValidateMessage] = useState("");
    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
    }
    useEffect(()=>{
        if(password!==passwordConfirm){
            setPasswordConfirmValidateMessage("비밀번호가 일치하지 않습니다.");
        }
        if(password===passwordConfirm||!passwordConfirm){
            setPasswordConfirmValidateMessage("");
        }
    },[password,passwordConfirm]); 

    return <SignUpFormBlock>
        <InputGroup>
            <label htmlFor="email">이메일</label>
            <input 
                name="email"
                placeholder="ssafe11@gmail.com"
                onChange={handleEmailChange}
            />
            <span>{emailValidateMessage}</span>
        </InputGroup>
        <InputGroup>
            <label htmlFor="password">비밀번호</label>
            <input 
                name="password"
                placeholder="비밀번호를 입력하세요."
                type="password"
                onChange={handlePasswordChange}
            />
            <span>{passwordValidateMessage}</span>
        </InputGroup>
        <InputGroup>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input 
                name="passwordConfirm"
                placeholder="비밀번호를 다시 입력해주세요."
                type="password"
                onChange={handlePasswordConfirmChange}
            />
            <span>{passwordConfirmValidateMessage}</span>
        </InputGroup>
        
        <Button>회원가입</Button>
    </SignUpFormBlock>
}