




import React, { useState, useEffect } from 'react';
import "./User.css";
import { useGlobalContext } from './context';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const { users } = useGlobalContext();
  console.log(users);

  const [inputValue, setInputValue] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const Navigate = useNavigate();

  console.log(filterData);

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const searchTitle = () => {
    if (inputValue) {
      setFilterData([
        ...users.filter(ele =>
          ele.title.toLowerCase().includes(inputValue.toLowerCase())
        ),
      ]);
    } else {
      setFilterData(users);
    }
  };

  useEffect(() => {
    searchTitle();
  }, [inputValue, users]);

  return (
    <div className='body'>
      <main className='table'>
        <section className='table__header'>
          <h1>User's Details</h1>
          <input
            type='text'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder='Search Here...'
          />
        </section>
        <section className='table__body'>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>UserId</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {filterData
                .slice(pagination.start, pagination.end)
                .map((el, id) => {
                  return (
                    <tr onClick={()=>{
                        Navigate(`/detail/${el.userId}`)
                    }} key={id}>
                      <td>{el.id}</td>
                      <td>{el.title}</td>
                      <td>{el.userId}</td>
                      <td>{el.body}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={users.length}
        />
      </main>
    </div>
  );
};

export default User;
