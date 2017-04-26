import React, { Component } from 'react';
import { Divider, Segment, Button } from 'semantic-ui-react';
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
    e.preventDefault();

    this.setState({
      reply: e.target.value
    })
  }

  handleClick(reply) {
    reply.preventDefault();

    axios.post('/postReply',
      {
        message: this.state.reply,
        reply_to_message_id: this.props.id,
        root_message_id: this.props.root_message_id
      },
      { headers: { authorization: localStorage.getItem('token') }
    });
  }

  render() {
    return (
     <div>
       <form>
         <input
         value={this.state.reply}
         placeholder="Enter your comment"
         onChange={this.handleInputChange}/>
         <button
          onClick={this.handleClick}>
          Post</button>
       </form>
     </div>
    );
  }
}

export default ReplyToPreviousReply;
