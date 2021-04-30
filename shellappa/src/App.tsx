import React from 'react';
import styled from 'styled-components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import data from './data'
import './App.css';

const TitleContent = (e: any) => {
  return <div></div>
}
function App() {
  console.log({data})
  return (
    <Wrapper>
      <H1>Shellappa</H1>
      <H2>{data.length} trainings recorded</H2>
      <Calendar
        onChange={(e: any) => console.log(e)}
        tileContent={TitleContent}
      />
      <H2><small>(see in console for now)</small></H2>
    </Wrapper>
  );
}

const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  color:white;
  margin: 0;
  margin-bottom: 1rem;
  line-height: 1;
`
const H2 = styled.h2`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color:#dc4b90;
`
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-content: center;
  background-color: #081329;
`
export default App;
