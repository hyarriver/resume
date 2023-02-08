import styles from '@styles/sass/page/home.module.scss';

import { LayoutMain } from '@components/layout';
import { Banner } from '@components/common';
import {
  AboutMe,
  SkillList,
  // MyHobbyAndHonor,
  WorkExperience,
} from '@components/page/index';

const { home_wrapper } = styles;

const Home: React.FC = () => {
  return (
    <div className={home_wrapper}>
      <Banner isShowBtnDown isFullHeight />
      <LayoutMain
        pageTitleProps={{
          zhName: '黄勇－WEB前端',
          enName: 'hyarriver',
        }}
      >
        <AboutMe />
        <SkillList />
        {/* <MyHobbyAndHonor /> */}
        <WorkExperience />
      </LayoutMain>
    </div>
  );
};

export default Home;
