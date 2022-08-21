
import { Hero } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourse } from "@content/courses/fetcher";
import { useWeb3 } from "@components/provider";

export default function Home({ courses }) {
  const {
    web3Api: { isInitialized, web3 },
  } = useWeb3();
  console.log(isInitialized);
  console.log(web3);
  return (
    <>
      {isInitialized ? "IS INIT" : "IS NOT INIT"}
      <Hero />
      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourse();
  return {
    props: {
      courses: data,
    },
  };
}

Home.Layout = BaseLayout;