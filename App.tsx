import * as React from 'react';
import './style.css';
type Prop = {
  content: string,
  link: string
}
const Component = () => {
  const topic = fetch("http://jsonplaceholder.typicode.com/gensukeSpp/sweets_fake").then(res =>　res.json());

  const sample = {
    content: "もちもち",
    num: 1
  }
  const [val, setVal] = React.useState<Prop[]>([]);

  React.useEffect(()=>{
    setVal(topic);
    }
  )
  return (
    <div> 
      {
      　val.map((v)=>{
          return <li>{v}</li>
        })
      }
    </div> 
  )
}
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Component />
    </div>
  );
}
