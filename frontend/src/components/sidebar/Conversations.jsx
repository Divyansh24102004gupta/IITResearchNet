import useGetConversations from "../../hooks/useGetConversations";
import Conversation from './Conversation';
import {getRandomEmoji} from "../../utils/emojis"

const Conversations = () => {
	const {loading,conversations} = useGetConversations();
	console.log("conversations: ",conversations);
	return (
		<div className='py-2 flex flex-col overflow-auto' style={{
			paddingTop: '0.5rem',
			paddingBottom: '0.5rem',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'auto !important'
		  }}>
			
			{conversations.map((conversation,idx) => (
				<Conversation
				key={conversation._id}
				conversation = {conversation}
				emoji = {getRandomEmoji()}
				lastIdx = {idx === conversations.length -1}
				/>
			))}

			{loading ? (<span className="loading loading-spinner"></span>):(null)}
		</div>
	);
};
export default Conversations;