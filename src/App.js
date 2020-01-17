import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About'
import Blog from './Blog'
import Home from './Home'
import Projects from './Projects'

// Importing CSS
import './App.css';

class App extends React.Component {

  posts = [
    { Title: 'My First Blog Post.', Body: 'This is my first blog post!' },
    { Title: 'Welcome to my React Portfolio.', Body: 'This portfolio was built with React.' }
  ]

  render() {
    return (
      <Router>
        <div className = 'app'>
          <div className='navbar'>
            <Link className='link' to ='/'> Home Page</Link>
            <Link className='link' to ='/about'>About Me</Link>
            <Link className='link' to ='/blog'>Blog</Link>
            <Link className='link' to ='/projects'>Projects</Link>
          </div>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path="/blog" render={ () => 
            <Blog posts={this.props.posts} />
          } />
          <Route path='/projects' component={Projects}/>
        </div>
      </Router>
    )
  }
};

export default App;
