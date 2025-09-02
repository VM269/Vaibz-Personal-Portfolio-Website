/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Automation Maestro 🛠️⚡
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base  ">
            ✨ My journey in DevOps engineering is powered by an arsenal of mystical tools and practices, with automation casting the core of my enchantments. I wield platforms like Docker, Kubernetes, and Terraform with precision, orchestrating seamless deployments that bridge realms (development and production) across the digital universe. The ancient arts of CI/CD pipelines empower me to deliver fast, reliable, and scalable experiences, while my monitoring and cloud mastery ensure every system is not only resilient but also battle-ready. Join me as I continue to explore new spells and technologies to shape the future of infrastructure and operations.
            <span className="font-semibold">
              My work and project tell more about me. 🧙‍♂️
            </span>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Cloud DevOps Engineer
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2.5+
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://www.linkedin.com/company/cheggindia"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">Chegg </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                Solved diverse problems across DSA, OS, CN, DBMS, and OOP with clean, optimized code.
                </li>
                <li>
                Delivered clear, well-explained solutions tailored to varying academic and professional needs.
                </li>
                <li>
                Turned academic expertise into practical success through real-world problem-solving.
                </li>
                <li>Built a consistent freelance track record with strong client satisfaction and skill growth</li>
              </ul>
              <p className="float-end font-semibold text-xs">
                June 2021 - June 2023
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://www.linkedin.com/company/t-systems-ict-india-pvt.-ltd."
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                T- Systems (Deutsche Telekom Company)
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Bridged the gap between code and cloud, turning ideas into scalable, reliable, and automated systems.
                </li>
                <li>
                  With automation, scalability, and resilience, I empower teams to deliver faster, safer, and smarter.
                </li>
                <li>
                  As a DevOps Engineer, I turn complexity into harmony—where development and operations move as one.
                </li>
                <li>I craft the invisible pipelines that transform raw code into reliable, production-ready experiences.</li>
              </ul>
              <p className="float-end font-semibold text-xs">
                July 2023 - Present
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://www.linkedin.com/in/vaibhav-matkar-v69/"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                My Certifications
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                GCP Certification Associate Cloud Engineer
                </li>
                <li>
                GCP Certification Proffesional Cloud Devops Engineer
                </li>
                <li>
                Generative AI Leader Certification
                </li>
                <li>
                GCP Certification Associate Data Practitioner
                </li>
                <li>Microsoft Certified Azure Fundamentals-AZ900</li>
                <li>GCP Certification Cloud Digital Leader</li>              </ul>
              <p className="float-end font-semibold text-xs">
                July 2023 - Present
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src='https://skillicons.dev/icons?i=aws,azure,gcp,docker,kubernetes,terraform,ansible,jenkins,gitlab,prometheus,grafana,linux,nginx,bash'
            alt="VaibhavMatkar"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
