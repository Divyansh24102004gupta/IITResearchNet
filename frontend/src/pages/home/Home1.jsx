import Footer from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home1 = () => {
	return (
		<>
		{/* <Navbar/> */}
		<div className='mt-16 flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
		</>
	);
};
export default Home1;