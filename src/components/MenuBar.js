import '../App.css';

function MenuBar() {
  return(
    <>
      <div className='menuContainer'>
        <div className='menuBar'>
          <div className='homeBar'>
            <h6>Home</h6>
          </div>
          <div className='aboutBar'>
            <h6>About</h6>
          </div>
          <div className='projectBar'>
            <h6>Project</h6>
          </div>
          <div className='contactBar'>
            <h6>Contact</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;