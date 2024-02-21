import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter/Counter.js";
import TodosList from "./components/todos-list/TodosList.js";
import ParentComponent from "./components/controlled-input/ParentComponent.js";
import DataFetcher from "./components/fetch-data/DataFetcher.js";
import ToggleSwitch from "./components/Day4/ToggleSwtich.js";
import NavigationBar from "./components/Day4/NavigationBar.js";
import Modal from "./components/Day4/Modal.js";
import DropdownMenu from "./components/Day4/DropdownMenu.js";
import Pagination from "./components/Day5/Pagination.js";
import Timer from "./components/Day6/Timer.js";
import Carousel from "./components/Day7/Carousel.js";
import AnimeTitles from "./components/Day8/Search/AnimeTitles.js";
import CharacterCounter from "./components/Day9/CharacterCounter.js";
import ProgressBar from "./components/Day9/ProgressBar.js";
import ExampleApp from "./components/Day9/DynamicRendering/DynamicRenderer.js";
import ColorPicker from "./components/Day9/colour-picker/ColorPicker.js";
import MarkDown from "./components/Day10/markdown/MarkDown.js";
import Tab from "./components/Day10/tabbed-navigation/Tab.js";
import Tabs from "./components/Day10/tabbed-navigation/Tabs.js";
import TabList from "./components/Day10/tabbed-navigation/TabList.js";
import LazyLoading from "./components/Day11/LazyLoading.js";

function App() {
  const options = ["kENDRICK LAMAR", "UZI", "Carti", "YE"];
  const images = [
    "https://wallpapercave.com/wp/wp8782757.jpg",
    "https://wallpaperboat.com/wp-content/uploads/2021/04/19/75467/bleach-07.jpg",
    "https://images.alphacoders.com/819/81993.jpg",
    "https://s1.1zoom.me/b5050/144/332698-dikemoon_1920x1080.jpg",
    "https://wallpaperset.com/w/full/2/a/5/172758.jpg",
  ];

  return (
    <div className="App">
      <NavigationBar />
      <ProgressBar duration={9000} />
      <LazyLoading />
    </div>
  );
}

export default App;
