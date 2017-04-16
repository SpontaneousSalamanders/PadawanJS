import React from 'react'
import { Row, Input } from 'react-materialize';
import { Divider, Checkbox } from 'semantic-ui-react'


function SideBarMenu () {
  return (
    <div className="sidebar-container">
      <h4>Tech stack</h4>
    <Divider />
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
      <h4>Roles</h4>
    <Divider />
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
    <Row>
      <Input name='group1' type='checkbox' value='red' label='Node' />
    </Row>
      <h4>Location</h4>
    <Divider />
    <Row>
      <Checkbox label='San Fransisco' />
    </Row>
    <Row>
      <Checkbox label='Seoul' />
    </Row>
    <Row>
      <Checkbox label='Chicago' />
    </Row>

    </div>

  )
}

export default SideBarMenu;