import Hero from "./components/Hero";
import TimeLine from "./components/TimeLine";
import ProphetPicture from "./components/ProphetPicture";
import TenTeaching from "./components/TenTeaching";
import Crusades from "./components/Crusades";
import Adventures from "./components/Adventures";
import Followers from "./components/Followers";
import Footer from "./components/Footer";
import RumbleEmbed from "./components/Featured";

const Home = () => {
  return (
    <div>
      <section ><Hero /></section>
      <section ><TimeLine /></section>
      <section ><ProphetPicture /></section>
      <section ><TenTeaching/></section>
      <section ><Crusades/></section>
      <section ><Adventures/></section>
      <section ><RumbleEmbed/></section>
      <section ><Followers/></section>
      <section ><Footer/></section>
    </div>
  );
};

export default Home;
