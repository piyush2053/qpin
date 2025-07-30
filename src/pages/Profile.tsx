import FooterNav from "./FooterNav.tsx";

const Profile = () => {
  return (
    <div className="text-white text-center mt-10 mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Profile</h2>
      <p className="text-gray-400">Username: johndoe</p>
      <p className="text-gray-400">Total Bets: 25</p>
      <p className="text-gray-400">Winning Rate: 62%</p>
      <FooterNav/>
    </div>
  );
};

export default Profile;
