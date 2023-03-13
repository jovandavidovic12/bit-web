const HelloWorldFunc = () => {
    const divs = [];
    for (let i = 0; i < 5; i++){
        divs.push(<div key={i} className="col-6 p-2 m-2 align-items-center bg-secondary "> 
        
        Lorem ipsum dolor sit amet.
        
        <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, velit?</p>
        </div>
    )
    }

  return (
    <div className="d-flex flex-column align-items-center">
      {divs}
    </div>
  );
};

export default HelloWorldFunc;





// const dayInAWeek = ["Mon", "tue", "wed", "thur", "fri", "sat", "sun"];
{/* <h1>Hello World from a functional component</h1>
      <ul>
        {dayInAWeek.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul> */}