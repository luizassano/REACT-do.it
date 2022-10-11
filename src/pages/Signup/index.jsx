import { Link, Redirect, useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Background, Container, Content, AnimationContainer } from "./style"
import {FiUser, FiMail, FiLock} from 'react-icons/fi'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { api } from "../../services/api"
import { toast } from "react-toastify";

export const Signup = () => {

    const schema = yup.object().shape({
      name: yup.string().required("Campo Obrigatório!!"),
      email: yup.string().email("Email Inválido").required("Campo Obrigatório!!"),
      password: yup.string().min(8,"Mínimo de 8 digítos").required("Campo Obrigatório!!"),
      passwordConfirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes").required('Campo Obrigatório'),
    })

    const {register, handleSubmit,formState:{errors},} = useForm({resolver : yupResolver(schema)})

    const history = useHistory();


    const onSubmitFunction = ({ name, email, password }) => {
        const user = { name, email, password };
        api
          .post("/user/register", user)
          .then((_) => {
            toast.success("Sucesso ao criar a conta");
            return history.push("/login");
          })
          .catch((err) => toast.error("Erro ao criar a conta, tente outro email"));
      };

 return( 
    <Container>
       <Background/>
        <Content>
            <AnimationContainer>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h1>Cadastro</h1>
                    <Input register={register} icon={FiUser} label='Nome'  placeholder="Seu nome" name="name" error={errors.name?.message}/>
                    <Input register={register} icon={FiMail} label='Email' placeholder="Seu melhor email" name="email" error={errors.email?.message} />
                    <Input register={register} icon={FiLock} label='Senha' placeholder="Uma senha bem segura" type="password" name="password" error={errors.password?.message}/>
                    <Input register={register} icon={FiLock} label='Confirmar senha'  placeholder="Confirmação da senha" type="password" name="passwordConfirm" error={errors.passwordConfirm?.message}/>

                    <Button type="submit">Enviar</Button>
                    <p>Já tem uma conta? Faça seu <Link to='/login'>login</Link></p>
                </form>
            </AnimationContainer>
        </Content>
    </Container>
    )}