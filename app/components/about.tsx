"use client";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useInViewSection } from "../lib/hooks";

const About = () => {
  const { ref } = useInViewSection("About");

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 text-center sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
  I&apos;m a {""}
  <span className="font-bold">
    frontend developer with a background in geology, now specializing in
    DevOps engineering
  </span>
  , driven by a passion for automation, cloud infrastructure, and
  sustainable technology solutions. I specialize in {""}
  <span className="font-bold">
    designing scalable, secure, and efficient systems across cloud
    platforms
  </span>
  that enhance development workflows and deployment reliability.  
  I work extensively with tools such as
  <span className="font-bold">
    {" "}
    Docker, Terraform, Ansible, and Kubernetes
  </span>{" "}
  to automate and optimize infrastructure, and I&apos;m deeply obsessed
  with
  <span className="font-bold"> observability and system reliability</span>.  
  Outside of technology, I enjoy video games and running. I&apos;m currently
  <span className="font-bold">
    {" "}
    refining my expertise in Kubernetes orchestration, cloud computing, and
    CI/CD automation
  </span>
  to further strengthen my end-to-end DevOps capabilities. {""}
  My goal is to build innovative, cloud-native solutions that promote
  operational excellence and long-term sustainability.
</p>

    </motion.section>
  );
};

export default About;
