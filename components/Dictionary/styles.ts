import styled from '@emotion/styled';

type ContainerParams = {
  backgroundColor: string;
  isShow: boolean;
};

export const Container = styled.div`
  position: absolute;
  top: 50%;
  overflow: hidden;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 2em;
`;

export const Input = styled.input`
  height: 3em;
  width: 15em;
  margin-right: 1em;
  border: 3px solid #fdf932;
  border-radius: 1em;
  padding-left: 0.5em;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 5em;
  height: 3em;
  border: 3px solid #fdf932;
  border-radius: 1em;
  padding: 0.5em;
  background-color: transparent;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const PikachuImage = styled.div`
  position: absolute;
  width: 10em;
  height: 10em;
  z-index: 10;
  left: 10em;
  bottom: 0;
  & img {
    width: 100%;
  }
`;

export const CardContainer = styled.div<ContainerParams>`
  z-index: 20;
  width: 20em;
  background: linear-gradient(45deg, ${props => props.backgroundColor}, white);
  border-radius: 0.5em;
  display: flex;
  border: 5px solid #fdf932;
  display: flex;
  flex-direction: column;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  opacity: ${props => (props.isShow ? 1 : 0)};
  @media (max-width: 414px) {
    width: 90%;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 8em;
  height: 8em;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  text-align: center;
`;

export const Types = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const Type = styled.div<{ backgroundColor: string }>`
  padding: 0.4em;
  border: 2px solid white;
  border-radius: 1em;
  color: white;
  font-weight: bold;
  background-color: ${props => props.backgroundColor};
  margin: 0 0.2em;
`;

export const Abilities = styled.div<{ backgroundColor: string }>`
  margin: 1em auto;
  padding-left: 1em;
  background: linear-gradient(45deg, white, ${props => props.backgroundColor});
  border: 2px solid #fdf932;
  width: 90%;
  height: 12em;
`;

export const Ability = styled.div`
  font-weight: bold;
  margin: 0.7em 0;
`;
