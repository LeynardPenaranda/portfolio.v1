import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content/content";
import Darkmode from "./components/Darkmode/Darkmode";
import { PostProvider } from "./components/PostProvider";
export default function App() {
  return (
    <>
      <PostProvider>
        <Header />
        <Darkmode />
        <Content />
        <Footer />
      </PostProvider>
    </>
  );
}
