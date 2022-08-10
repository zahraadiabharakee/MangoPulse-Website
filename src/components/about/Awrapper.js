import React from "react"
import { awrapper } from "../../dummydata"
import BackAnimation from "../BackAnimation";

const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <BackAnimation />
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper