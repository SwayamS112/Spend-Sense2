import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Card from './Card';
import Dashboard from '../dashboard/Dashboard';
import { Background } from '../../ui/background';

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
      <div className="fixed inset-0 -z-10">
        <Background className="w-full h-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <NavBar name={userData.name} email={userData.email} />
        <main className="pt-20 px-4 pb-10">
        <Card name={userData.name} />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
