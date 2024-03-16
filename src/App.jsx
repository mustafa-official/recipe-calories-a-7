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
  const [preparing, setPreparing] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);
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
      toast.warn(`Already Added ${cartInfo.name.slice(0, 10)}`);
    }
  };

  const handlePreparing = (info) => {
    setTime(time + info.time);
    setCalories(calories + info.calories);
    const removeCart = saveBookmark.filter((data) => data.id != info.id);
    setPreparing([...preparing, info]);
    if (removeCart) {
      setSaveBookmark(removeCart);
    }
  };
  const [getValue, setGetValue] = useState(true);
  const getVisibleBtn = (value) => {
    setGetValue(value);
  };
  return (
    <>
      <div>
        <Header></Header>
        <Banner></Banner>
        <RecipeHeader></RecipeHeader>
        <div className="flex lg:flex-row gap-5 flex-col lg:mt-12 my-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:w-[60%] w-full">
            {carts.map((cart) => (
              <Carts key={cart.id} allCart={cart} handleBtn={handleBtn}></Carts>
            ))}
          </div>
          <div className="lg:w-[40%] w-full">
            <Bookmarks
              handlePreparing={handlePreparing}
              saveBookmark={saveBookmark}
              preparing={preparing}
              getVisibleBtn={getVisibleBtn}
              getValue={getValue}
              time={time}
              calories={calories}
            ></Bookmarks>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
