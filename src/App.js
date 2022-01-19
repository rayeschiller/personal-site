import './App.css';
import { Text, Grid, Page, Image } from '@geist-ui/react'
import profile from "./img/profile.png" 

function App() {
  return (
    <div className="App">
      <Page>
      <Page.Header>
        {/* <h5>Nav Bar</h5> */}
      </Page.Header>
      <Page.Content>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12}>
            <Image width="140px" height="140px" src={profile} />
          </Grid>
          <Grid xs={12}> 
            <Text h2>Hi, I'm Raye Schiller</Text>
            <Text p>I'm a software engineer, writer, and performer. I create.</Text>
          </Grid>
        </Grid.Container>
      </Page.Content>
      </Page>
      
    </div>
  );
}

export default App;
