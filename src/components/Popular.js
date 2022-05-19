import { Splide,SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { useEffect, useState } from "react";
import styled from "styled-components"

function Popular() {

  const [popular, setPopular] = useState([])

  //only run it when component is mounted
  useEffect(()=>{
    getPopular()
  },[])

  const getPopular = async () => {
    const api = await fetch(`https://kovw0n5o44.execute-api.us-east-1.amazonaws.com/v0/recipes`)
    const data = await api.json();
    console.log(data)
    setPopular(data.recipes)
  }

  return (
    <div>{popular.map(recipe=>{
      return(
        <Wrapper>
          <h3>Popular Picks</h3>
            <Splide>
              {
                popular.map((recipe)=>{
                  return(
                    <SplideSlide>
                      <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                      </Card>
                    </SplideSlide>
                  )
                })
              }
            </Splide>
        </Wrapper>
      )
    })}</div>
  )

}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`

export default Popular