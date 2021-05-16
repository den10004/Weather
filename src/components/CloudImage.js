import cloud from '../images/cloud.svg';



function CloudImage() {
  return (
        <>
        <img className="block__card__image" src={cloud} alt='cloud_image' />
        <h4 className="blocks__card__text">Fill in all the fields and the weather will be displayed</h4>
        </>
       
  );
}


export default CloudImage;