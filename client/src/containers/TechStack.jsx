const techStackItems = [
  'React',
  'Angular',
  'Backbone',
  'React Native',
  'Express',
  'Node.js',
  'TDD',
  'Mocha/Chai',
  'Redux'
];

class TechStacks extends Component {
  constructor(props) {
    super(props);
    this.createTechStackCheckboxes = this.createTechStackCheckboxes.bind(this);
    this.handleTechStackChange = this.handleTechStackChange.bind(this);
  }

  createTechStackCheckboxes() {
    const isAllChecked = false;
    return techStackItems.map((item) => (
      <div key={item}>
        <input
          key={item}
          id={item}
          type="checkbox"
          checked={isAllChecked || this.state.selectedTechStacksItems.includes(item)}
          value={item}
          onChange={this.handleTechStackChange} />
        <label htmlFor={item}>{item}</label>
      </div>
    ));
  }

  handleTechStackChange(event) {
    const selectedTechStack = event.target.value;
    let techStacks = this.state.selectedTechStacksItems;
    if (techStacks.includes('Nothing selected')) {
      techStacks.splice(techStacks.indexOf('Nothing selected'), 1);
      techStacks.push(selectedTechStack);
    } else {
      if (techStacks.includes(selectedTechStack)) {
        techStacks.splice(techStacks.indexOf(selectedTechStack), 1);
        if (techStacks.length === 0) {
          techStacks = ['Nothing selected'];
        }
      } else {
        techStacks.push(selectedTechStack);
      }
    }
    this.setState({
      selectedTechStacksItems: techStacks
    }, () => {
      console.log('techstack after setstate looks like:', techStacks);
      this.props.actions.filterMentors({
        techStacks: this.state.selectedTechStacksItems,
        roles: this.state.selectedRolesItems,
        locations: this.state.selectedLocationItems,
      });
    })
  }
  render () {
    <div>
      {this.createTechStackCheckboxes()}
    </div>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(TechStack);