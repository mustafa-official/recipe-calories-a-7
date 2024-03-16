import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Carts from "./components/Carts/Carts";
import Header from "./components/Header/Header";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [carts, setCarts] = useState([]);
  const [saveBookmark, setSaveBookmark] = useState([]);
  useEffect(() => {
    fetch("../public/recipe.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleBtn = (cartInfo) => {
    const existBtn = saveBookmark.find((data) => data.id == cartInfo.id);
    if (!existBtn) {
      setSaveBookmark([...saveBookmark, cartInfo]);
    } else {
      toast.warn("Already added!");
    }
  };
  return (
    <>
      <div>
        <Header></Header>
        <Banner></Banner>
        <RecipeHeader></RecipeHeader>
        <div className="flex lg:flex-row gap-5 flex-col lg:mt-12 mt-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:w-[60%] w-full">
            {carts.map((cart) => (
              <Carts key={cart.id} allCart={cart} handleBtn={handleBtn}></Carts>
            ))}
          </div>
          <div className="lg:w-[40%] w-full">
            <Bookmarks saveBookmark={saveBookmark}></Bookmarks>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
