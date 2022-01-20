import React, { useEffect, useState } from "react";
import baseUrl from './url';

function ListTunnels() {
  const APIUrl = baseUrl+'/list';

  const dummyData = [
    {
      id: 1,
      type: 1,
      src: 2301,
      dest: 3098,

    },
    {
      id: 2,
      type: 2,
      src: 2501,
      dest: 3698,

    },
    {
      id: 3,
      type: 1,
      src: 2381,
      dest: 3018,

    }
  ];

  const [inprogress, setInprogress] = useState(true);
  const [data, setData] = useState([]);
  const fetchEffectDependency = false;
  useEffect(() => {
    //some data from server
    fetch(APIUrl).
      then(response => response.json()).
      then(data => {
        const newData2=data.body.map((ele, ind)=>{
          return{
            id: ind,
            type: ele.type,
            src: ele.src,
            dest: ele.dest
          }
        });
        console.log(Date.now());
        console.log(data);
        console.log(data.error);

        setData(newData2);
        setInprogress(false);

      });

  }, [fetchEffectDependency]);

  const Spinner = () => {
    return (
      <div className="mx-5 my-5 ">
        <div className="spinner-border d-flex align-items-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const removeRow = (id) => {
    const newData = data.filter((element) => {
      return element.id !== id;
    });
    setData(newData);
  }



  const Row = ({ id, type, src, dest, removeRowFunct }) => {
    const disconnectHandler = () => {
      //something in backend
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          "dest":dest,
          "type":type
     })
    };
      const disconnectUrl= baseUrl+'/disconnect';
      fetch(disconnectUrl, requestOptions)
      .then(response=> response.json())
      .then(data=>{
        console.log(data.error);
        console.log(data.body);
      });
      removeRowFunct(id);
    }

    return (
      < tr className="">
        <td colSpan="1">{type==0?'Local':'Remote'}</td>
        <td colspan="1">{src}</td>
        <td colspan="1">{dest}</td>
        <td><button type="button" className="my-1 btn btn-primary" onClick={disconnectHandler}>Disconnect</button></td>
      </tr>
    );
  }


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">List Tunnels</h1>
      </div>
      <div className="mx-5 my-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Source Port</th>
              <th scope="col">Destination Port</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            {inprogress ? <Spinner /> :
              data.map((val, ind) => {
                console.log('Id'+val.id);
                return (
                  <Row type={val.type}
                    key={ind}
                    src={val.src}
                    dest={val.dest}
                    id={val.id}
                    removeRowFunct={removeRow} />
                )
              })}


          </tbody>
        </table>
      </div>
    </>

  );

}

export default ListTunnels;
