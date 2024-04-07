// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { someAction } from './store/action';; // Import your action creators

const App = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.someReducer.data);
    const loader = useSelector(state => state.someReducer.loader);

    useEffect(() => {
        dispatch(someAction());
    }, [dispatch]);

    if(loader){
      return <p>data is fetching</p>
    }   
    
    return (
        <div>
            {
              data && data.length > 0 &&  (<>
              {data.map((i)=>(
                <p>Data: {i.title}</p>
              ))}
              
              </>)
            }
        </div>
    );
};

export default App;
