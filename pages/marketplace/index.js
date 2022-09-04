import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourse } from "@content/courses/fetcher";
import { WalletBar } from "@components/ui/web3";
import { useAccount } from "@components/hooks/web3/useAccount";

export default function Marketplace({ courses }) {
  const { account } = useAccount();

  return (
    <>
      <div className="py-4">
        <WalletBar address={account.data} />
      </div>
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

Marketplace.Layout = BaseLayout;
