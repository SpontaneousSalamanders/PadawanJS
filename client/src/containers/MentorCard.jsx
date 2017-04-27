import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

function MentorCard(props) {
  return (
    <Card style={{marginTop: 50}}>
      <Image src={props.mentor.picture} />
      <Card.Content>
        <Card.Header >
          {props.mentor.name}
        </Card.Header>
        <Card.Meta>
          <span >
            {props.mentor.location}
          </span>
        </Card.Meta>
        <Card.Description>
          <h5>Technology Expertise:</h5> {props.mentor.techStack.join(', ')}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor,
  };
}

export default connect(mapStateToProps)(MentorCard);