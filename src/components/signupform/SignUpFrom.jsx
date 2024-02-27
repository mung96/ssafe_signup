import { useEffect, useState } from "react";
import {SignUpFormBlock, InputGroup, Button } from "./SignUpForm.element"
import { checkEmail,checkPassword } from "../../utils/validator";

export const SignUpForm = () => {
    //이메일
    const [email,setEmail] = useState("");
    const [isEmailValid,setIsEmailValid] = useState(false);
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }
    useEffect(()=>{
        if(!checkEmail(email)){
            setIsEmailValid(false);
        }
        if(checkEmail(email)||!email){
            setIsEmailValid(true);
        }
        console.log("Email:" ,isEmailValid,"내용: ",email);
    },[email])

    //패스워드
    const [password,setPassword] = useState("");
    const [isPasswordValid,setIsPasswordValid] = useState(false);
    
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }
    useEffect(()=>{
        if(!checkPassword(password)){
            setIsPasswordValid(false);
        }
        if(checkPassword(password)||!password){
            setIsPasswordValid(true);
        }
    },[password])

    //패스워드 확인
    const [passwordConfirm,setPasswordConfirm] = useState("");
    const [isPasswordConfirmValid,setIsPasswordConfirmValid] = useState(false);
    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
    }
    useEffect(()=>{
        if(password!==passwordConfirm){
            setIsPasswordConfirmValid(false);
        }
        if(password===passwordConfirm||!passwordConfirm){
            setIsPasswordConfirmValid(true);
        }
    },[password,passwordConfirm]); 


    const [isActive,setIsActive] = useState(false);

    useEffect(()=>{
        if(isEmailValid&&isPasswordValid&&isPasswordConfirmValid){
            setIsActive(true);
        } 
        if(!isEmailValid||!isPasswordValid||!isPasswordConfirmValid){
            setIsActive(false);
        } 
        if(!email||!password||!passwordConfirm){
            setIsActive(false);
        }      
    },[isEmailValid,isPasswordValid,isPasswordConfirmValid])

    return <SignUpFormBlock>
        <InputGroup>
            <label htmlFor="email">이메일</label>
            <input 
                name="email"
                placeholder="ssafe11@gmail.com"
                onChange={handleEmailChange}
            />
            <span>{!isEmailValid&&"유효하지 않은 이메일 형식입니다."}</span>
        </InputGroup>
        <InputGroup>
            <label htmlFor="password">비밀번호</label>
            <input 
                name="password"
                placeholder="비밀번호를 입력하세요."
                type="password"
                onChange={handlePasswordChange}
            />
            <span>{!isPasswordValid&&"유효하지 않은 비밀번호 형식입니다."}</span>
        </InputGroup>
        <InputGroup>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input 
                name="passwordConfirm"
                placeholder="비밀번호를 다시 입력해주세요."
                type="password"
                onChange={handlePasswordConfirmChange}
            />
            <span>{!isPasswordConfirmValid&&"비밀번호가 일치하지 않습니다."}</span>
        </InputGroup>
        
        <Button active={isActive}>회원가입</Button>
    </SignUpFormBlock>
}