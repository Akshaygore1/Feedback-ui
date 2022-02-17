import FeedbackItem from "./FeedbackItem"
import {useContext} from 'react'
import FeedbackContext from "../Context/FeedbackContext"

function FeedbackList () {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
}



// if their is no cooment or feedback is can help to show the no feedback
// prop handleDelete added which came from the feedback item hits the button 

return <div className="feedback-list">
    {feedback.map((item)=> (
        <FeedbackItem 
            key={item.id} 
            item={item}
        />
    
    )
        )}
</div>
    }


export default FeedbackList