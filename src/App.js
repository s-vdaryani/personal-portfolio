import logo from './logo.svg';
import './App.css';
import InputBar from './InputBar';
import Modal from './Modal';
import React, { useEffect, useState } from 'react';

function Title() {
  return (
    <div className="Title">
      <img src="/images/Title.png" alt="Title" />
    </div>
  );
}

function Navbar({onProfileClick}) {
  return (
    <div className="navbar">
      {/* Other navbar content here */}
      <button className="profile-button" onClick={onProfileClick}>
        <img src="/images/profile.png" alt="Profile" />
      </button>
      <button className="file-button">
        <img src="/images/fileDropdown.png" alt="Files & Projects" />
      </button>

    </div>
  );
}

function QuickLinks() {
  // Mailto
  const email = "vani.daryani@outlook.com";

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_blank");
  }

  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="QuickLinks">
      <button onClick={() => handleNavigation("https://www.linkedin.com/in/vani-daryani/")} target= "_blank" rel='noopener noreferrer'>
        <img src="/images/linkedinButton.PNG" alt="LinkedIn" />
      </button>
      <button onClick={() => handleNavigation("https://www.instagram.com/vani.daryani/")} target= "_blank" rel='noopener noreferrer'>
        <img src="/images/instagramButton.PNG" alt="Instagram" />
      </button>
      <button onClick={handleEmailClick}>
        <img src="/images/mailButton.png" alt="Email" />
      </button>
      {/* Turn into button later */}
      <a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/photoButton.png" alt="Gallery" />
      </a>
    </div>
  );
}


function App() {
  //Background variables
  const [backgroundImage, setBackgroundImage] = useState('');
  //Profile pop-up states
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Pop-up height constants
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  // Image constants
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Random Background Selection
  useEffect(() => {
    // Array of background images
    const backgrounds = ['/images/bluebackground.gif', '/images/pinkbackground.gif'];
    // Randomly select one of the backgrounds
    const selectedBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBackgroundImage(selectedBackground);
  }, []);

  //Set pop-up states (open close)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define an array of image URLs for your carousel
  const imageUrls = [
    '/images//profiles/photo1.jpg',
    '/images/profiles/photo2.jpg',
    '/images/profiles/photo3.jpg',
    '/images/profiles/photo4.jpg'
    // Add more image URLs as needed
  ];



  // Function to handle clicking the left button
  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) => {
      // Ensure the index stays within bounds
      return prevIndex > 0 ? prevIndex - 1 : imageUrls.length - 1;
    });
  };

  // Function to handle clicking the right button
  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => {
      // Ensure the index stays within bounds
      return prevIndex < imageUrls.length - 1 ? prevIndex + 1 : 0;
    });
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar onProfileClick={toggleModal} />
      <div className="home-contents">
        <Title />
        <InputBar />
        <QuickLinks />
      </div>

      <Modal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        imageUrls={imageUrls}
        windowHeight={windowHeight}
      />
    </div>
  );
}

export default App;