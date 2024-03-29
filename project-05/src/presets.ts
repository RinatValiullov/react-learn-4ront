export type presets = {
  moveToLeftFromRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  moveToRightFromLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  moveToTopFromBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  moveToBottomFromTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  fadeFromRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      onTop: boolean;
    };
  };
  fadeFromLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      onTop: boolean;
    };
  };
  fadeFromBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      onTop: boolean;
    };
  };
  fadeFromTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      onTop: boolean;
    };
  };
  fadeLeftFadeRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  fadeRightFadeLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  fadeTopFadeBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  fadeBottomFadeTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  scaleDownFromRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      onTop: boolean;
    };
  };
  scaleDownFromLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      onTop: boolean;
    };
  };
  scaleDownFromBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      onTop: boolean;
    };
  };
  scaleDownFromTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      onTop: boolean;
    };
  };
  scaleDownScaleDown: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  scaleUpScaleUp: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  moveToLeftScaleUp: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  moveToRightScaleUp: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  moveToTopScaleUp: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  moveToBottomScaleUp: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  scaleDownScaleUp: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  glueLeftFromRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
      onTop: boolean;
    };
  };
  glueRightFromLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
      onTop: boolean;
    };
  };
  glueBottomFromTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
      onTop: boolean;
    };
  };
  glueTopFromBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
      onTop: boolean;
    };
  };
  flipRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  flipLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  flipTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  flipBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  fall: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  newspaper: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  pushLeftFromRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  pushRightFromLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  pushTopFromBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  pushBottomFromTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  pushLeftPullRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  pushRightPullLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  pushTopPullBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  pushBottomPullTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  foldLeftFromRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  foldRightFromLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  foldTopFromBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  foldBottomFromTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  moveToRightUnfoldLeft: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  moveToLeftUnfoldRight: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  moveToBottomUnfoldTop: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  moveToTopUnfoldBottom: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
  roomToLeft: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  roomToRight: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  roomToTop: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  roomToBottom: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  cubeToLeft: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  cubeToRight: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  cubeToTop: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  cubeToBottom: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  carouselToLeft: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  carouselToRight: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  carouselToTop: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  carouselToBottom: {
    exit: {
      name: string;
      onTop: boolean;
    };
    enter: {
      name: string;
    };
  };
  slides: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
      delay: number;
    };
  };
  slide: {
    exit: {
      name: string;
    };
    enter: {
      name: string;
    };
  };
};
