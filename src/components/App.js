import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}
// Create a third component, <About>. The <About> component should also be a child component of <App>.
// The <About> component should return a <div> with an id of about. To match the screenshot, the div should contain an <h2> element with the text "About." However, as long as it has an id of about, it will pass the test!
function About(){
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  );
}

// Two components, <Navbar> and <Home>, are already defined in the App.js file. Display both of these components as child components of <App>.
function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
