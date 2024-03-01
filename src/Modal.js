import React from 'react';

function Modal({ isModalOpen, toggleModal, currentImageIndex, setCurrentImageIndex, imageUrls, windowHeight }) {
    const handleLeftClick = () => {
        setCurrentImageIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : imageUrls.length - 1));
    };

    const handleRightClick = () => {
        setCurrentImageIndex(prevIndex => (prevIndex < imageUrls.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        isModalOpen && (
            <div className="modal" style={{ maxHeight: `${windowHeight - 15}px` }}>
                <button className="x-button" onClick={toggleModal}>X</button>
                <img className='profile-images' src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                <div className='switch-buttons'>
                    <button className="left-button" onClick={handleLeftClick}>
                        <img src="/images/left.png" alt="Left" />
                    </button>
                    <button className="right-button" onClick={handleRightClick}>
                        <img src="/images/right.png" alt="Right" />
                    </button>
                </div>
                <p>Hi, my name is Vani Daryani. This is my portfolio website; thank you for visiting! 
                I am a sophomore in Computer Science at Purdue University. I made this website using a 
                MERN stack (MongoDB, Express.js, React, and Node.js). This marks my debut in single-handedly 
                deploying a web product and my second time doing full-stack development. I plan to update 
                this site as I learn new skills and showcase my future projects here! I have added links to 
                my Instagram and LinkedIn and my email if you want to get in touch. In addition, I have 
                created a photo album to show photos I take with my digital camera throughout college.</p>
                <button className="close-button" onClick={toggleModal}>Close</button>
            </div>
        )
    );
}

export default Modal;
