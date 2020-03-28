import styled from 'styled-components';

const Room = styled.div`

  display: flex;
  flex-direction: column;

  width:     100%;
  max-width: 300px;
  height: 320px;
  border-radius: 4%;
  background-color: red;
  background: url(${({ url }) => url}) center center;
  background-size: 120%;
  color: #ffffff;
  font-weight: 700;
  padding: 10px;
  font-size: 12px;

`;

export default Room;
