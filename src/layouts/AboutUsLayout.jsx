import React from "react";
import Headline from "./Headline";
import { Container, Header, Grid } from "semantic-ui-react";

export default function AboutUsLayout() {
  return (
    <div>
      <Container className="content">
        <Headline content="About Us" />

        <Grid>
          <Grid.Row>
            <Grid.Column width="3" />
            <Grid.Column width="10">
              <Header as="h1" color="violet" className="orbitron"  icon="cube" content="HRMS" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipiscing elit pellentesque.
              Enim sed faucibus turpis in eu mi. Amet risus nullam eget felis
              eget nunc lobortis mattis aliquam. Mauris augue neque gravida in
              fermentum et sollicitudin ac orci. Amet nulla facilisi morbi
              tempus iaculis urna id volutpat lacus. Dignissim diam quis enim
              lobortis scelerisque fermentum dui faucibus. Mauris pharetra et
              ultrices neque. Diam volutpat commodo sed egestas egestas
              fringilla phasellus. Donec adipiscing tristique risus nec feugiat.
              Scelerisque mauris pellentesque pulvinar pellentesque habitant
              morbi tristique senectus et. Mauris commodo quis imperdiet massa
              tincidunt. Facilisi nullam vehicula ipsum a. Amet nisl suscipit
              adipiscing bibendum est.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Elit duis tristique sollicitudin nibh sit. Vitae proin sagittis
              nisl rhoncus mattis. Mus mauris vitae ultricies leo integer
              malesuada nunc. Eget gravida cum sociis natoque penatibus et
              magnis dis parturient. Ut placerat orci nulla pellentesque
              dignissim enim sit amet. Neque sodales ut etiam sit amet.
              Condimentum vitae sapien pellentesque habitant morbi tristique.
              Nunc sed blandit libero volutpat. Porttitor lacus luctus accumsan
              tortor. Ante metus dictum at tempor commodo ullamcorper a lacus.
              Augue interdum velit euismod in pellentesque massa.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Orci eu lobortis elementum nibh tellus molestie nunc non.
              Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus.
              Arcu dui vivamus arcu felis bibendum ut tristique. Nisl pretium
              fusce id velit ut tortor pretium. Diam donec adipiscing tristique
              risus nec. Pretium quam vulputate dignissim suspendisse in. Est
              ultricies integer quis auctor elit sed vulputate mi sit. Nulla
              facilisi cras fermentum odio eu feugiat pretium nibh. Pharetra
              magna ac placerat vestibulum lectus mauris ultrices. Adipiscing
              diam donec adipiscing tristique risus. Nulla aliquet enim tortor
              at. Adipiscing vitae proin sagittis nisl. Et egestas quis ipsum
              suspendisse ultrices gravida. Ipsum a arcu cursus vitae. Sit amet
              tellus cras adipiscing enim. Tempus urna et pharetra pharetra
              massa. Tincidunt tortor aliquam nulla facilisi cras fermentum odio
              eu. Cursus mattis molestie a iaculis at.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Arcu odio ut sem nulla pharetra diam. At erat pellentesque
              adipiscing commodo elit at imperdiet dui accumsan. Tristique et
              egestas quis ipsum suspendisse ultrices gravida. Pharetra
              convallis posuere morbi leo urna molestie at. Duis at consectetur
              lorem donec massa sapien faucibus. Pellentesque habitant morbi
              tristique senectus. Massa vitae tortor condimentum lacinia quis
              vel. At in tellus integer feugiat scelerisque varius morbi enim
              nunc. Vitae elementum curabitur vitae nunc. Ultricies mi quis
              hendrerit dolor magna eget. Scelerisque purus semper eget duis.
              Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
              Sed odio morbi quis commodo odio. Natoque penatibus et magnis dis.
              Arcu odio ut sem nulla pharetra diam sit. Tempus egestas sed sed
              risus pretium quam vulputate. Ac turpis egestas sed tempus. Nunc
              eget lorem dolor sed viverra ipsum nunc.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Nunc eget lorem dolor sed viverra ipsum. Nec ultrices dui sapien
              eget mi proin sed libero enim. Feugiat nisl pretium fusce id velit
              ut. Nunc mattis enim ut tellus elementum sagittis vitae. Convallis
              tellus id interdum velit laoreet id donec ultrices. Nisl vel
              pretium lectus quam id leo in vitae turpis. Quam elementum
              pulvinar etiam non quam lacus suspendisse. Accumsan sit amet nulla
              facilisi. Volutpat odio facilisis mauris sit amet massa vitae
              tortor. Mauris cursus mattis molestie a iaculis. Non odio euismod
              lacinia at quis risus.
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
