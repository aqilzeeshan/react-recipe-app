import { useEffect, useState } from "react";
import styled from "styled-components"

function Popular() {

  const [popular, setPopular] = useState([])

  //only run it when component is mounted
  useEffect(()=>{
    getPopular()
  },[])

  const getPopular = async () => {
    const api = await fetch(`https://3j98w6n9gf.execute-api.us-east-1.amazonaws.com/v0/recipes`)
    const data = await api.json();
    console.log(data)
    setPopular(data.recipes)
  }

  return (
    <div>{popular.map(recipe=>{
      return(
        <div key={recipe.id}>
          <p>{recipe.title}</p>
        </div>
      )
    })}</div>
  )

}

const Wrapper = styled.dev`
  margin: 4rem 0rem;
`


export default Popular