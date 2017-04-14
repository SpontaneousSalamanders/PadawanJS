import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageBoard from './MessageBoard.jsx';
import { Card, Icon, Image } from 'semantic-ui-react'
import Events from './Events.jsx';

class MentorProfile extends Component {
  render () {
    return (
      <div className="container" style={{marginTop: 100}}>
        <div className="row">
          <div className="col-lg-4">
              <Card style={{position: 'fixed'}}>
                <Image src={this.props.mentor.picture} />
                <Card.Content>
                  <Card.Header>
                    {this.props.mentor.name}
                  </Card.Header>
                  <Card.Meta>
                    <span className='Location'>
                      {this.props.mentor.location}
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    <h5>Tech Stacks:</h5> {this.props.mentor.techStack.join(', ')}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
          </div>
          <div className="col-lg-8">
            <MessageBoard id={this.props.mentor.id}/>
        </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor
  }
}

export default connect(mapStateToProps)(MentorProfile);

//       <div style={{marginTop: 100}}>
//         <img
//           style={{width: 300}}
//           src={this.props.mentor.picture} />
//         <h5>{this.props.mentor.name}</h5>
//         <div>Location: {this.props.mentor.location}</div>
//         <div>Tech Stacks: {this.props.mentor.techStack.map((stack)=>{return(<div>{stack}</div>)})}</div>
//         <div>Projects</div>
//         <div>Video Group</div>
//         <div><Events id={this.props.mentor.id}/></div>