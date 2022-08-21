

import { Model } from "@components/ui/common";
import { CourseHero, Curriculum, Keypoints } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourse } from "@content/courses/fetcher";

export function getStaticPaths() {
  const { data } = getAllCourse();
  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  };
}


export function getStaticProps({ params }) {
  const { data } = getAllCourse();
  const course = data.filter((c) => c.slug === params.slug)[0];
  return {
    props: {
      course,
    },
  };
}

export default function Course({course}) {
  
  return (
    <BaseLayout>
      <div className="py-4">
        <CourseHero 
        title={course.title}
        image={course.coverImage}
        description={course.description}
        />
      </div>
      <Keypoints
        points={course.wsl}
      />
      <Curriculum 
        locked={true}
      />
      <Model />
    </BaseLayout>
  );
}
