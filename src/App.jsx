import ThemeSwitcher from "./components/ThemeSwitcher";
import Screen from "./components/Screen";
import {
  useContext
} from "react";
import {
  AppContext
} from "./context/Appcontext";
import {
  useTheme
} from "./hooks/useTheme";
import KeyPads from "./components/KeyPads";
import Header from "./components/Header";

function App() {
  const {
    mainBackground
  } = useTheme();

  return (
    <div
      style={ { backgroundColor: mainBackground }}
      className={` w-screen h-screen flex justify-center items-center`}
      >
      <div className="w-full  min-[377px]:w-96  h-auto  rounded-2xl  ">
        <div className="w-auto mx-3 m-5 h-6 flex justify-between">
          <Header />
      </div>
        <Screen />
        <KeyPads />
      </div>
    </div>
  );
}

export default App;