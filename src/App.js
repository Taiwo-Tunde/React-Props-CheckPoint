import Bio from "./Profile.js/ProfileComponent/Bio";
import FullName from "./Profile.js/ProfileComponent/FullName";
import Profession from "./Profile.js/ProfileComponent/Profession";

function App(props) {
  return (
    <div style={{ backgroundColor: "red", textAlign: "center" }}>
      <FullName FullName="Taiwo Tunde Abdulrasheed" />
      <Profession Profession="Full-Stack Javascript Web Developer" />
      <Bio Bio="Web Developer, Computer Engineer." />
    </div>
  );
}

export default App;
