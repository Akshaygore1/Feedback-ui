import React from 'react';
import { FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/card';
import {useContext} from 'react'
import FeedbackContext from '../Context/FeedbackContext';

//handledelete prop added for the dynamic button flow diagram in note book 
function FeedbackItem({item}) {
  const{deleteFeedback, editFeedback}= useContext(FeedbackContext)
 
  return (
      <Card >
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className='edit'>
          <FaEdit color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
      </Card>
      )
}
 

export default FeedbackItem;

// added close button