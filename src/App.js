import {useEffect} from 'react'
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'
import { Robot } from './components/Robot';
import baffle from 'baffle'


function App() {

  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░i░n░n░o░v░a░t░i░o░n░p░r░e░s░e░n░t░a░t░i░o░n',
      speed: 100
    })
    target.start()
    target.reveal(1000,1000)
  })

  return (
    <>
      <color attach="background" args={['#333333']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />

      <ScrollControls pages={6} damping={0.1}>

        <Robot scale={0.8}/>
        <Sparkles size={2} color={"#fff"} scale={[10,10,10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5} // Stretches the floor segment, 0.25 by default
          segments={100} // Mesh-resolution, 20 by default
          scale={[50,30,10]}
          position={[4,-10,0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>  

        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
        <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
          <meshStandardMaterial color="#2a3a3f" />
        </Ring>
        </Float>              

        <Scroll>
                
        </Scroll>
        <Scroll html style={{width: '100%'}}>
          <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '50%', fontSize: '10em', transform: `translate(-50%,-50%)`, textAlign: 'center' }}>THREE.JS</h1>
          
          <div className='row' style={{ position: 'absolute', top: `132vh`}}>
            <h2>Introduction to three.js</h2>
            <p style={{ maxWidth: '400px' }}>Three.js is a JavaScript library that allows you to create and display 3D graphics and animations in a web browser.<br/><br/>
                                              It's an open-source library and is available for free.<br/><br/>
                                              With three.js, you can create complex 3D scenes, apply textures and lighting, and animate objects and cameras.
            </p>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Features and Capabilities</h2>
              <p style={{ maxWidth: '440px' }}>Three.js has a comprehensive set of tools for creating and manipulating 3D objects and scenes.<br/><br/>
                                                It supports multiple 3D file formats, such as OBJ and FBX, and includes tools for importing and exporting models.<br/><br/>
                                                You can apply textures and lighting to your 3D models, creating realistic materials and environments.<br/><br/>
                                                It also includes animation tools, such as keyframe animation and morph targets, allowing you to create complex and dynamic scenes.
              </p>                
            </div>
          </div>

          <div className='row' style={{ position: 'absolute', top: `332vh`}}>
            <h2>Use Cases and Examples</h2>
            <p style={{ maxWidth: '400px' }}>three.js has been used in a wide range of real-world applications, from educational tools to games to scientific visualizations.<br/><br/>
                                              It's a popular choice for creating interactive product configurators, allowing customers to see and customize products in 3D.<br/><br/>
                                              It's also been used in educational tools and simulations, such as a chemistry simulation for students or an anatomy visualization for medical professionals.<br/><br/>
                                              Games and entertainment are another common use case for three.js, with many popular games and animations created using the library.
            </p>
          </div>

          <div className='row' style={{ position: 'absolute', top: `430vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Conclusion</h2>
              <p style={{ maxWidth: '440px' }}>In conclusion, three.js is a powerful JavaScript library for creating 3D graphics and animations in a web browser.<br/><br/>
                                                It offers a comprehensive set of tools and capabilities, making it a popular choice for a wide range of applications.<br/><br/>
                                                Whether you're an artist, a game developer, a researcher, or anyone interested in creating 3D graphics and animations, three.js is a great choice.
              </p>                
            </div>
          </div>
          
          
          <h2 style={{ position: 'absolute', top: '550vh', left: '50%', transform: `translate(-50%,-50%)` }}>THANK YOU SO MUCH</h2>              
          
          <a href="https://www.saisrujanpenta.com/" ><button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)`, cursor: 'pointer' }} type="button">VIEW PROJECT</button></a>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;