import React, { createContext } from 'react';
import NavBar from './components/NavBar';
import { useReducer, useState, useEffect } from 'react';
import specs from "./components/specs/state"
import Footer from "./components/Footer"
import GetInTouch from "./components/GetInTouch"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import HowItWorks from './components/howitworks';
import Blog from './components/blog';
import FAQS from './components/faqs';
import specsfooter from "./components/specs/footer"
import specsnavbar from "./components/specs/navbar"
import specsgetintouch from "./components/specs/getintouch"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export const PageContext = createContext()

/*  Links to read before reading the code
    
    https://stackoverflow.com/questions/61391830/sass-like-interpolation-in-material-ui-to-get-bem-like-classnames


*/

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%'
  },
  media: {
    height: '77vh',
  },
}));

function App() {
  // https://github.com/facebook/create-react-app/issues/1765
  // BUG FIX: state is undefined , look in state.js and the corresponding state file of the component 
  const [state,] = useReducer(function (state, action) { }, { ...specsnavbar, ...specs, ...specsgetintouch, ...specsfooter });

  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState("true");
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    <div className="App">
      {loading
        ?
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Skeleton animation="wave" variant="circle" width={40} height={40} />
            }
            title={
              // 'Niroggyan'
              <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
            }
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
          />
          <Skeleton animation="wave" variant="rect" className={classes.media} />
          <CardContent>
            <Grid container wrap="nowrap">
              {Array.from(new Array(3)).map((item, index) => (
                <Box width="33%" marginRight={2} >
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </Grid>
            {/* <React.Fragment>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment> */}
          </CardContent>
        </Card>
        :
        <PageContext.Provider value={{ page, setPage }}>
          <NavBar state={state.NavBar} />

          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/home">
                <Home state={state.home} />
              </Route>
              <Route path="/about">
                <About state={state.about} >
                  <GetInTouch state={state.GetInTouch} />
                </About>
              </Route>
              <Route path="/how-it-works">
                <HowItWorks state={state.howitworks} >
                  <GetInTouch state={state.GetInTouch} />
                </HowItWorks>
              </Route>
              <Route path="/blog">
                <Blog state={state.blog} >
                  <GetInTouch state={state.GetInTouch} />
                </Blog>
              </Route>
              <Route path="/faqs">
                <FAQS state={state.faqs} />
              </Route>
              <Route path="/">
                <Home state={state.home} />
              </Route>
            </Switch>
          </Router>
          <Footer state={state.Footer} />
        </PageContext.Provider>
      }
    </div>
  );
}

export default App;
