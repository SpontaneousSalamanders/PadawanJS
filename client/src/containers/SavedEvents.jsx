import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { getSavedEvents } from '../actions/savedEventsActions.jsx';

class SavedEvents extends Component {
  componentDidMount() {
    this.props.getSavedEvents();
  }

  render() {
    console.log('savedEvents', this.props.savedEvents);
    return (
      <div>
      <h4 style={{textAlign: 'center', marginTop: 20}}>Saved Events</h4>
      <Divider />
      <ul className="media-list">
        {this.props.savedEvents.map((event, index)=>{
          return (
            <Segment key={index}>

            </Segment>
          )
        })}

      </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mentor: state.selectedMentor,
    savedEvents: state.savedEvents.savedEventsData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getSavedEvents: getSavedEvents}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedEvents);

// <li key={index} className="media">
//   <div className="media-left">
//     <div
//       key={index}
//       style={{width: 50, cursor: 'pointer'}}
//       className='thumbnail'
//       onClick={()=>{window.open(resource.URL)}}>
//       <img
//         className="media-object"
//         src={resource.icon}
//         key={index}
//         alt="..."/>
//     </div>
//   </div>
//   <div
//     key={index}
//     className="media-body">
//     <h5
//       style={{cursor: 'pointer'}}
//       onClick={()=>{window.open(resource.URL)}}
//       className="media-heading" >{resource.title}</h5>
//     <p key={index}>
//       {resource.description}
//     </p>
//   </div>
// </li>
