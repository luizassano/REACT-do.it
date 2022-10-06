import { InputContainer } from "./style";
import { Container } from "./style";

export const Input = ({label, icon: Icon, ...rest}) => {
  return (
    <Container>
      <div>{label}</div>

      <InputContainer>
        {Icon && <Icon size={20}/>}
        <input {...rest}/>
      </InputContainer>
    </Container>
  );
}
