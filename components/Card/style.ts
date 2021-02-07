import styled from '@emotion/styled';

type ContainerParams = {
  backgroundColor: string;
  isShow: boolean;
};

export const CardContainer = styled.div<ContainerParams>`
  width: 100%;
  height: 100vh;
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
  @media (min-width: 415px) {
    width: 30vw;
    height: 40vw;
    margin-left: 35vw;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  };
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
  width: 90%;
`;

export const Ability = styled.div`
  font-weight: bold;
  margin: 0.7em 0;
`;