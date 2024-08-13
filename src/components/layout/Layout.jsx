import Navbar from '../navbar/Navbar'; // Adjust path as needed
import Footer from '../footer/Footer'; // Adjust path as needed

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
