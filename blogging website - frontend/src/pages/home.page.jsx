// This file is started from the Part-3, Not included in Part-1 or Part-2

import AnimationWrapper from "../common/page-animation";
import InPageNavigation from "../components/inpage-navigation.component";

const HomePage = () => {
  return (
    <AnimationWrapper>
      <section className="h-cover flex justify-center gap-10">
       {/* latest blogs */}
        <div className="w-full">
          <InPageNavigation routes={["home","trending blogs"]} defaultHidden={["trending blogs"]}> 
            
            <h1>Latest Blog Here.</h1>

            <h1>Trending Blogs Here.</h1>

          </InPageNavigation>
        </div>
        {/* filters and trending blogs */}
        <div></div>
      </section>
    </AnimationWrapper>
  );
};

export default HomePage;

