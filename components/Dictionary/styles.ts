import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 40%;
  overflow: hidden;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div<{ backgroundColor: string }>`
  width: 20em;
  background: linear-gradient(45deg, ${props => props.backgroundColor}, white);
  border-radius: 0.5em;
  margin-top: 2em;
  display: flex;
  border: 5px solid #fdf932;
  display: flex;
  flex-direction: column;
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
