const ImageSlider = () => {
    const images = [
      "images/Frame 6.png",
      "images/image 7.png",
      "images/image 8.png",
      "images/image 9.png",
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change every 3 seconds
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <div className="slider-container">
        <img src={images[currentIndex]} alt="Sliding" className="slider-image" />
      </div>
    );
  };
export default ImageSlider  