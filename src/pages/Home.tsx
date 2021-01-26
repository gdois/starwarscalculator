import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { 
  Card, 
  Title, 
  SubTitle, 
  Input, 
  Button, 
  Container } from '../components/style';
import { consumablesCalc } from '../services/index';

const Home: React.FC = () => {
  let [count, setCount] = useState<number>(2);
  const [data, setData] = useState<any>();
  const [distance, setDistance] = useState<any>();

  const increment = async () => {
    const response = await  api.get(`/starships/?page=${count}`);
    const json = response.data.results;
    setData(json)
    
    if (count < 4) {
      setCount(count + 1)
    }
  }

  const decrement = async () => {
    const response = await  api.get(`/starships/?page=${count}`);
    const json = response.data.results;
    setData(json)
    if (count > 1) {
      setCount(count - 1)
    }
  }
  
  const handle = async () => {
    const response = await api.get('/starships');
    const json = response.data.results;
    setData(json);
  }

  useEffect(() => {
    handle()
  }, [])

  return (
    <>
    <Input type="number" placeholder="Digite a distancia" onChange={(e) => setDistance(e.target.value)} />
    <Container>
      {data && data.map((items: any) => (
        <Card key={items.name}>
          <Title>{items.name}</Title>
          <SubTitle>Paradas: {Math.trunc(distance / items.MGLT / consumablesCalc(items))}</SubTitle>
        </Card>
      ))}
    </Container>
    {!!count && (
      <Container>
        <Button onClick={() => decrement()}>Menos</Button>
        <Button onClick={() => increment()}>Mais</Button>
      </Container>
    )}
    </>
  )
}

export default Home;