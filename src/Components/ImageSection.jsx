/* eslint-disable react/no-unescaped-entities */
import Home1 from "../assets/home1.jpg";
import Home2 from "../assets/home2.jpg";
import Home3 from "../assets/home3.jpg";
import Men1 from "../assets/men1.jpg";
import Men2 from "../assets/men2.jpg";
import Men3 from "../assets/men3.jpg";
import Women1 from "../assets/girls1.jpg";
import Women2 from "../assets/girls2.jpg";
import Women3 from "../assets/girls3.jpg";
import Kid1 from "../assets/baby1.jpg";
import Kid2 from "../assets/baby2.jpg";
import Kid3 from "../assets/baby3.jpg";

function ImageSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen xs:px-8 p-4 lg:px-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <img src={Home1} alt="Image 1" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Tops & Kurtas from Rs.399
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Home2} alt="Image 2" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            The Festive Sale is On!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Home3} alt="Image 3" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Comfort & Style at on go
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <img src={Men1} alt="Image 1" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Up to 70% off || Men's wear
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Men2} alt="Image 2" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">Trendy!!</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Men3} alt="Image 3" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Men's New Arrivals
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <img src={Women1} alt="Image 1" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Trendy tops & Tees from Rs.499 only
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Women2} alt="Image 2" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Denims starting from Rs.799
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Women3} alt="Image 3" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Grab the sale rightnow
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <img src={Kid1} alt="Image 1" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Kids t-shirts from just Rs.299
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Kid2} alt="Image 2" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Kids clothing from just Rs.599
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Kid3} alt="Image 3" className="w-full h-auto" />
          <p className="mt-2 text-center text-black font-medium">
            Buy 1, Get 1 free on babies clothes
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
