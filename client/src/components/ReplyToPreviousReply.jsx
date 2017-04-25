import React, { Component } from 'react';
import axios from 'axios';

class ReplyToPreviousReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      reply: e.target.value
    })
  }

  handleClick(reply) {
    axios.post('/postReply',
      {
        message: reply,
        reply_to_message_id: this.props.id,
        root_message_id: this.props.root_message_id
      },
      { headers: { authorization: localStorage.getItem('token') }
    });
  }

  render() {
    console.log('ReplyToPreviousReply', this.props)
    return (
     <div>
       <form>
         <input
         value={this.state.reply}
         placeholder="Enter your comment"
         onChange={this.handleInputChange}/>
         <button
          onClick={() => this.handleClick(this.state.reply)}>
          Postpost</button>
       </form>
     </div>
    );
  }
}

export default ReplyToPreviousReply;

// const ReplyToPreviousReply = (props) => {
//   const handleClick = (reply) => {
//     axios.post('/postReply', props, {
//       headers: { authorization: localStorage.getItem('token') }
//     });
//   }

//   // console.log('ReplyToPreviousReply', props)

//   return (
//   	<div>
//   		<form>
//   			<input placeholder="Enter your comment" />
//   			<button
//         onClick={() => handleClick({})}>
//         Postpost</button>
//   		</form>
//   	</div>
//   );
// }

// export default ReplyToPreviousReply;