import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import NavBar from './NavBar'; // insead of using navbar i am using sidebar
import Sidebar from './SideBar';
import Footer from './Footer';
import Card from './Card';
import Dashoard from '../dashboard/Dashboard';
import  Background  from '../../ui/Background';

const Home = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/');
      return;
    }

    const user = JSON.parse(storedUser);
    setUserData(user);
  }, [navigate]);

  if (!userData) return null;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Full-Screen Background Behind Everything */}

      <Background>
        <h1 className="text-white text-4xl font-bold">Welcome to SpendSence</h1>
      </Background>


      <div className="fixed inset-0 -z-10">
        <Background className="w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
       <Sidebar />
        <main className="pt-20 px-4 pb-10">
        <Card name={userData.name} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
