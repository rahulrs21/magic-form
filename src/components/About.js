// import React, { useState } from 'react'

// export default function About() {

//   const [myStyle, setMyStyle] = useState({
//       color: 'black',
//       backgroundColor: 'white'
//   })

//   const [btnText, setBtnText] = useState("Enable Dark Mode")

//   const [darkMode, setDarkMode] = useState("Light Mode"); // Preview text

//   const toggleStyle = () => {
//       if(myStyle.color == 'white'){
//         setMyStyle({
//             color: 'black',
//             backgroundColor: 'white'
//         })
//         setBtnText("Enable Dark Mode")
//         setDarkMode("Light Mode")

//       } else {
//         setMyStyle({
//             color: 'white',
//             backgroundColor: 'black'
//         })
//         setBtnText("Enable Light Mode")
//         setDarkMode("Dark Mode")

//       }
//   }

//   return (
//     <div className='container my-4 p-3 rounded' style={myStyle}>
//         <h2>About Us</h2>
//         <div className="accordion" id="accordionExample" style={myStyle}>
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingOne">
//                 <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                     Accordion Item #1
//                 </button>
//                 </h2>
//                 <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                 <div className="accordion-body" style={myStyle}>
//                     <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                 </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingTwo">
//                 <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                     Accordion Item #2
//                 </button>
//                 </h2>
//                 <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                 <div className="accordion-body" style={myStyle}>
//                     <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                 </div>
//                 </div>
//             </div>
//             <div className="accordion-item">
//                 <h2 className="accordion-header" id="headingThree">
//                 <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                     Accordion Item #3
//                 </button>
//                 </h2>
//                 <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//                 <div className="accordion-body" style={myStyle}>
//                     <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                 </div>
//                 </div>
//             </div>
//         </div>
//         <button type='button' onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button> <p>{darkMode} is Enabled</p>
//     </div>
//   )
// }


import React, { useState } from 'react'

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
      color: 'black',
      backgroundColor: 'white'
  })

  const [btnAlert, setBtnAlert] = useState('Enable Dark Mode')

  const [Mode, setMode] = useState('Light Mode')

  const toggleButtton = () => {
      if(myStyle.color === 'white'){
          setMyStyle({
              color: 'black',
              backgroundColor: 'white'
          })
          setBtnAlert('Enable Dark Mode')
          setMode('Light Mode')
      } else {
          setMyStyle({
              color: 'white',
              backgroundColor: 'black'
          })
          setBtnAlert('Enable Light Mode')
          setMode('Dark Mode')


      }
  }

  return (
    <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            {/* <hr className='px-4' /> */}
            <h2 className='text-center mt-5'>DarkMode</h2>
        </div>
        <div className='container my-4 p-3 rounded' style={{myStyle}}>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={{myStyle, backgroundColor: props.mode === 'dark' ? '#072239' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{myStyle, backgroundColor: props.mode === 'dark' ? '#072239' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={{myStyle, backgroundColor: props.mode === 'dark' ? '#072239' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{myStyle, backgroundColor: props.mode === 'dark' ? '#072239' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={{myStyle, backgroundColor: props.mode === 'dark' ? '#072239' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{myStyle, backgroundColor: props.mode === 'dark' ? '#072239' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-row'>
                <button className='btn btn-primary my-2' onClick={toggleButtton}>{btnAlert}</button>
                <div className="form-check form-switch my-2 mx-4">
                    <input className="form-check-input" type="checkbox" onClick={toggleButtton} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">{Mode}</label>
                </div>
            </div>
        </div>
    </>
  )
}
