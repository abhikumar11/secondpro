export const Child2 = ({userinfo}) => {
    
     return (
          <div>
               <h1 style={{ backgroundColor: "yellow" }}>Child2</h1>
               <h2>Name:{userinfo.name}</h2>
               <h2>Contact:{userinfo.contact}</h2>
               <h2>City:{userinfo.city}</h2>
          </div>
     );
};
