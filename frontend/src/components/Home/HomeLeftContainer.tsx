import styles from "./HomeLeftContainer.module.scss";
import { FC, useEffect, useRef } from "react";
import { interviewModes, mobileQuery } from "../../constants/constants";
import ModeBox from "./ModeBox";
import { HomeLeftContainerProps } from "../../types/types";
import { useMediaQuery } from "react-responsive";
import LoginButton from "./LoginButton";

const HomeLeftContainer: FC<HomeLeftContainerProps> = ({
  selectedMode,
  setSelectedMode,
  rightContainerWidth,
  state,
}) => {
  const firstMountFlag = useRef(false);

  const isMobile = useMediaQuery({
    query: mobileQuery,
  });

  useEffect(() => {
    firstMountFlag.current = true;
  }, []);

  const moveLeftAnimation = {
    transform:
      state === "exited"
        ? `translateX(${(rightContainerWidth as number) / 2}px)`
        : "none",
    opacity: firstMountFlag.current ? "100%" : "0%",
    transition: "all 500ms ease-in-out",
  };

  return (
    <div
      className={`${styles.HomeLeftContainer}`}
      style={isMobile ? {} : moveLeftAnimation}
    >
      {/* 🔐 로그인 버튼 우측 상단 */}
      <div className={styles.login_button_container}>
        <LoginButton />
      </div>

      <section className={styles.title_section}>
        <h3>합격의 지름길</h3>
        <h2>위듀</h2>
        <p>
        你可以找到工作
          <br />
          면접에 합격하는 그날까지 {isMobile && <br />}위듀는 당신 곁에 있습니다
        </p>
      </section>

      <section className={styles.select_mode_section}>
        {interviewModes.map((it) => (
          <ModeBox
            key={it.key}
            id={it.key}
            title={it.title}
            description={it.description}
            selectedMode={selectedMode}
            setSelectedMode={setSelectedMode}
          />
        ))}
      </section>
    </div>
  );
};

export default HomeLeftContainer;
