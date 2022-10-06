import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Background, Container, Content, AnimationContainer } from "./style"
import {FiUser, FiMail, FiLock} from 'react-icons/fi'


export const Signup = () => {
 return( 
    <Container>
       <Background/>
        <Content>
            <AnimationContainer>
                <form>
                    <h1>Cadastro</h1>
                    <Input icon={FiUser} label='Nome'  placeholder="Seu nome"/>
                    <Input icon={FiMail}  label='Email' placeholder="Seu melhor email"/>
                    <Input icon={FiLock} label='Senha' placeholder="Uma senha bem segura" type="password" />
                    <Input icon={FiLock} label='Confirmar senha'  placeholder="Confirmação da senha" type="password"/>

                    <Button>Enviar</Button>
                    <p>Já tem uma conta? Faça seu <Link to='/link'>login</Link></p>
                </form>
            </AnimationContainer>
        </Content>
    </Container>
    )}