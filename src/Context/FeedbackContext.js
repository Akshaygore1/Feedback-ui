import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";




const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This is Feedback item 1',
            rating:10,
        },
         {
            id:2,
            text:'This is Feedback item 2',
            rating:10,
        },
        {
            id:3,
            text:'This is Feedback item 3',
            rating:10,
        },
    ])
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
// add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    
// set item to updated
    const editFeedback = (item) => {
        setFeedbackEdit ({
            item,
            edit:true
        })
    }



//delete feedback

    const deleteFeedback = (id) => 
      {
          if (window.confirm('Are you want delete?')) {
            setFeedback(feedback.filter((item) => item.id !==id))
          }
      }

// update feedback
      const updateFeedback = (id,upItem) => {
          setFeedback(feedback.map((item) => (item.id === id ? {...item,...upItem} : item)))
      }


    return <FeedbackContext.Provider value={{
          feedback, 
          feedbackEdit,
          deleteFeedback,
          addFeedback,
          editFeedback,
          updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}
 export default FeedbackContext
