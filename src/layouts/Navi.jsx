import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Header, Icon, Button } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu borderless fixed="top">
        <Container>
          <Menu.Item color="violet" position="left">
            <Header as="h4" color="violet" className="orbitron">
              <Icon name="cube" />
              HRMS
            </Header>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/home">
            <Icon name="circle notched" />
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/jobPostings">
            <Icon name="list alternate outline" />
            Job Postings
          </Menu.Item>
          <Menu.Item as={NavLink} to="/candidates">
            <Icon name="user outline" />
            Candidates
          </Menu.Item>
          <Menu.Item as={NavLink} to="/employers">
            <Icon name="building outline" />
            Employers
          </Menu.Item>
          <Menu.Item as={NavLink} to="/aboutUs">
            <Icon name="heart outline" />
            About Us
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button circular color="pink" content="Log-in" />
            </Menu.Item>
            <Menu.Item>
              <Button circular color="yellow" content="Sign up" />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
