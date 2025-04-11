import "./BgImage.css";
export default function BgImage({ image, alt }) {
  return (
    <div className="bg-image">
        <div className="bg-image-overlay"></div>
      <img src={image} alt={alt} />
    </div>
  );
}