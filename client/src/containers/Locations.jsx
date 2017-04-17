const locationItems = [
  'SF',
  'San Jose',
  'Palo Alto'
];


class Locations extends Component {
  constructor(props) {
    super(props);
    this.createLocationsCheckboxes = this.createLocationsCheckboxes.bind(this);
    this.handleLocationsChange = this.handleLocationsChange.bind(this);
  }

  createLocationsCheckboxes() {
    const isAllChecked = false;
    return locationItems.map((item) => (
      <div key={item}>
        <input
          key={item}
          id={item}
          type="checkbox"
          checked={isAllChecked || this.state.selectedLocationItems.includes(item)}
          value={item}
          onChange={this.handleLocationsChange} />
        <label htmlFor={item}>{item}</label>
      </div>
    ));
  }

  handleLocationsChange(event) {
    const selectedLocation = event.target.value;
    let locations = this.state.selectedLocationItems;
    if (locations.includes('Nothing selected')) {
      locations.splice(locations.indexOf('Nothing selected'), 1);
      locations.push(selectedLocation);
    } else {
      if (locations.includes(selectedLocation)) {
        locations.splice(locations.indexOf(selectedLocation), 1);
        if (locations.length === 0) {
          locations = ['Nothing selected'];
        }
      } else {
        locations.push(selectedLocation);
      }
    }
    this.setState({
      selectedLocationItems: locations
    }, () => {
      this.props.actions.filterMentors({
        techStacks: this.state.selectedTechStacksItems,
        roles: this.state.selectedRolesItems,
        locations: this.state.selectedLocationItems,
      });
    })
  }

  render () {
    this.createLocationsCheckboxes()
  }

function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      filterMentors,
      getMentors,
      selectMentor,
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);