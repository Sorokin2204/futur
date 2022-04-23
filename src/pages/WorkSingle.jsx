import React from 'react';
import clsx from 'clsx';
import Feedback from '../components/common/Feedback/Feedback';
import WorkSingle from '../components/workSingle/WorkSingle';
import Breadcrumbs from '../components/common/Breadcrumbs/Breadcrumbs';
import { worksList } from '../data/list/works';
const WorkSinglePage = () => {
  return (
    <>
      <Breadcrumbs
        list={[
          { path: '/', name: 'Главная' },
          { path: '/works/123', name: worksList[0].title },
        ]}
      />
      <WorkSingle />
      <Feedback />
    </>
  );
};

export default WorkSinglePage;
