import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  height: 5em;
  width: 100%;
  display: flex;
  margin-bottom: 2em;
  position: fixed;
  align-items: center;
  background-color: white;
`;

export const Input = styled.input`
  height: 3em;
  width: calc(100% - 10em);
  margin-left: 1em;
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
  margin-left: auto;
  margin-right: 1em;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Items = styled.div`
  margin-top: 5em;
  cursor: pointer;
`;

export const Item = styled.div`
  display: inline-block;
  margin: 1em;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
