import Hero from "./components/Hero";
import TimeLine from "./components/TimeLine";
import ProphetPicture from "./components/ProphetPicture";
import TenTeaching from "./components/TenTeaching";
import Crusades from "./components/Crusades";
import Adventures from "./components/Adventures";
import Followers from "./components/Followers";
import Footer from "./components/Footer";
import VideoAdPlayer from "./components/Featured";

const Home = () => {
  return (
    <div>
      <section ><Hero /></section>
      <section ><TimeLine /></section>
      <section ><ProphetPicture /></section>
      <section ><TenTeaching /></section>
      <section ><Crusades /></section>
      <section ><Adventures /></section>
      <section >
        <VideoAdPlayer
          vastUrl="https://silkyspite.com/dcmcFfzUd.GDNLv_ZOGTUv/le-m/9su/ZeUYlAknPUTiYh2xNxjkMo4IMuDlcFtUNPjoYd2/MTzhgjwPOEAN"
          mainSrc="https://candid-caramel-6869b2.netlify.app/doravideo.mp4"
        />

      </section>
      <section ><Followers /></section>
      <section ><Footer /></section>
    </div>
  );
};

export default Home;
