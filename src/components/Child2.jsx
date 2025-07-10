import Child3 from "./Child3";

export const Child2 = ({name}) => {
    
     return (
          <div>
               <h1 style={{ backgroundColor: "yellow" }}>This is Child2</h1>
               <Child3 name={name}/>
               
          </div>
     );
};
