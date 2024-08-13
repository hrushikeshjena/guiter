// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// function HeroSection() {
//   const imgStyle = {
//     width: '100%',
//     height: '600px', // Set a fixed height
//     objectFit: 'cover', // Ensures the image covers the entire area
//   };

//   return (
//     <div>
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         interval={3000} // Time between slides in milliseconds
//         transitionTime={500} // Transition time between slides in milliseconds
//         stopOnHover={false} // Stop autoplay on hover
//         emulateTouch={true} // Enable swipe gestures on touch devices
//         dotColor="#000000" // Set dot color to black
//       >
//         <div>
//           <Link to="/allproducts">
//             <img src="https://t4.ftcdn.net/jpg/07/27/57/07/240_F_727570773_jqgl32cLjXX3qYH19036iHEPMUIdDpgH.jpg" alt="Image 1" style={imgStyle} />
//           </Link>
//         </div>
//         <div>
//           <Link to="/allproducts">
//             <img src="https://t4.ftcdn.net/jpg/08/48/90/71/240_F_848907155_lMcGZaGFlSgaPR3ECC2ulv0nubvFGCaY.jpg" alt="Image 2" style={imgStyle} />
//           </Link>
//         </div>
//         <div>
//           <Link to="/allproducts">
//             <img src="https://t3.ftcdn.net/jpg/08/58/74/64/240_F_858746413_iRyZv53rtvfZCxfNPFeeYZJ72eidVxHN.jpg" alt="Image 3" style={imgStyle} />
//           </Link>
//         </div>
        
//       </Carousel>
//     </div>
//   );
// }

// export default HeroSection;



import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HeroSection() {
  const imgStyle = {
    width: '100%',
    height: 'auto', // Change height to auto to maintain aspect ratio
    maxHeight: '600px', // Set a max height to prevent overflow
    objectFit: 'cover', // Ensures the image covers the entire area
  };

  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000} // Time between slides in milliseconds
        transitionTime={500} // Transition time between slides in milliseconds
        stopOnHover={false} // Stop autoplay on hover
        emulateTouch={true} // Enable swipe gestures on touch devices
        dotColor="#000000" // Set dot color to black
        className="w-full"
      >
        <div>
          <Link to="/allproducts">
            <img src="https://t4.ftcdn.net/jpg/07/27/57/07/240_F_727570773_jqgl32cLjXX3qYH19036iHEPMUIdDpgH.jpg" alt="Image 1" style={imgStyle} />
          </Link>
        </div>
        <div>
          <Link to="/allproducts">
            <img src="https://t4.ftcdn.net/jpg/08/48/90/71/240_F_848907155_lMcGZaGFlSgaPR3ECC2ulv0nubvFGCaY.jpg" alt="Image 2" style={imgStyle} />
          </Link>
        </div>
        <div>
          <Link to="/allproducts">
            <img src="https://t3.ftcdn.net/jpg/08/58/74/64/240_F_858746413_iRyZv53rtvfZCxfNPFeeYZJ72eidVxHN.jpg" alt="Image 3" style={imgStyle} />
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
