
const rolesItems = [
  'Full Stack',
  'Front end',
  'Back end'
];

class Roles extends Component {
  constructor(props) {
    super(props);
    this.createRolesCheckboxes = this.createRolesCheckboxes.bind(this);
    this.handleRolesChange = this.handleRolesChange.bind(this);
  }

  createRolesCheckboxes() {
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

  handleRolesChange(event) {
    const selectedRole = event.target.value;
    let roles = this.state.selectedRolesItems;
    if (roles.includes('Nothing selected')) {
      roles.splice(roles.indexOf('Nothing selected'), 1);
      roles.push(selectedRole);
    } else {
      if (roles.includes(selectedRole)) {
        roles.splice(roles.indexOf(selectedRole), 1);
        if (roles.length === 0) {
          roles = ['Nothing selected'];
        }
      } else {
        roles.push(selectedRole);
      }
    }
    this.setState({
      selectedRolesItems: roles
    }, () => {
      this.props.actions.filterMentors({
        techStacks: this.state.selectedTechStacksItems,
        roles: this.state.selectedRolesItems,
        locations: this.state.selectedLocationItems,
      });
    })
  }

  render () {
    this.createRolesCheckboxes()
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

export default connect(mapStateToProps, mapDispatchToProps)(Roles);