
export default function ImagePopup({ imageSrc, position, onClose }) {
  const zoomFactor = 2; // Set the zoom factor to 2x

  const styles = {
    position: "absolute",
    top: position.y - 100 + "px",
    left: position.x - 100 + "px",
    width: "600px",
    height: "600px",
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: `${-position.x * zoomFactor}px ${
      -position.y * zoomFactor
    }px`,
    backgroundSize: `${zoomFactor * 100}%`,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    borderRadius: "5px",
    overflow: "hidden",
    zIndex: "999",
  };

  return <div className="image-popup" style={styles} onMouseLeave={onClose} />;
}
