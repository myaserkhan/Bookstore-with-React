import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import '../scss/Categories.scss';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  return (
    <>
      <div className="container">
        <Spin indicator={antIcon} />
        <button type="button" className="statusBtn" onClick={() => dispatch(checkingStatus())}>
          Check status
        </button>
        <span className="statusMsg">
          {status.message}
        </span>
      </div>
    </>
  );
}

export default Categories;
