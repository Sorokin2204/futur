import React, { useEffect } from 'react';
import clsx from 'clsx';
import Feedback from '../components/common/Feedback/Feedback';
import WorkSingle from '../components/workSingle/WorkSingle';
import Breadcrumbs from '../components/common/Breadcrumbs/Breadcrumbs';
import { worksList } from '../data/list/works';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router';
import { getSingleWork } from '../redux/slices/workSlice';
const WorkSinglePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleData, singleLoading, singleError } = useSelector((state) => state.work);
  useEffect(() => {
    if (id) {
      console.log(id);
      dispatch(getSingleWork({ id }));
    }
  }, [id]);
  useEffect(() => {
    if (singleError) {
      navigate('/');
    }
  }, [singleError]);

  return (
    <>
      {singleData && !singleLoading && !singleError ? (
        <>
          {' '}
          <Breadcrumbs
            list={[
              { path: '/', name: 'Главная' },
              { path: `/works/${singleData.slug}`, name: singleData.title },
            ]}
          />
          <WorkSingle />
          <Feedback />
        </>
      ) : null}
    </>
  );
};

export default WorkSinglePage;
