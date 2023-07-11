import React from 'react'
import Navbar3 from '../../components/Navbar3'
import Hero from './Hero'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navbar3 />
      <Hero />
      <Footer />
    </div>
  )
}

// import React from 'react'
// import Navbar3 from '../../components/Navbar3'
// import Hero from './Hero'
// import Footer from './Footer'

// export default function Home(userDetails) {
//   const user=userDetails.user
//   useEffect(()=>{
//     if(user.isAuthenticate(){

//     }))
//   },[])
//   const logout = () => {
// 		window.open("http:localhost:5000/auth/logout", "_self");
// 	};
//   return (
//     <div>
//       <Navbar3 />
//       <Hero />
//       <p>
//         Welcome `${user.name}`
//         {/* ya fir user ko console karke dekh lo  */}
//       </p>
//       <button  onClick={logout}>
// 						Log Out
// 					</button>
//       <Footer />
//     </div>
//   )
// }

