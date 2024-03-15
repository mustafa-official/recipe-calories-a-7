import "./App.css";
import Banner from "./components/Banner/Banner";
import Carts from "./components/Carts/Carts";
import Header from "./components/Header/Header";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Banner></Banner>
        <RecipeHeader></RecipeHeader>
        <Carts></Carts>
      </div>
      
    </>
  );
}

export default App;
