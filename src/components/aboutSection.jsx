import { motion } from "framer-motion";
import {
  SiSpringboot,
  SiJenkins,
  SiDocker,
  SiInformatica,
} from "react-icons/si";
import { FaGithub, FaReact, FaAws } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          About <span className="text-primary">Me</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-12"
        >
          {/* Timeline Line */}
          <span className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/30 to-transparent rounded-full"></span>

          {/* === Experience Card: Model N === */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex gap-4 items-start">
            <span className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary mt-1">
              <img src="/assets/modeln-logo.png" alt="Model N" className="h-7 w-7 object-contain" />
            </span>

            <div className="gradient-border  rounded-xl shadow-sm p-6 w-full hover:shadow-md transition">
              <h4 className="font-semibold text-lg text-primary">Model N</h4>
              <p className="text-muted-foreground font-medium">Software Engineer · Hyderabad, India</p>
              <p className="text-sm text-gray-500">Aug 2022 – Dec 2023</p>

                <ul className="mt-6 pl-6 list-disc space-y-3 text-[15px] text-foreground dark:text-foreground leading-relaxed">
                <li>
                    Engineered scalable full-stack solutions using <strong className="text-primary dark:text-primary">React</strong> and <strong className="text-primary dark:text-primary">Spring Boot</strong>, enhancing performance and maintainability.
                </li>
                <li>
                    Integrated <strong className="text-primary dark:text-primary">OAuth 2.0</strong> protocols to enforce secure authentication and granular access control.
                </li>
                <li>
                    Improved system reliability by reducing production defects by <strong className="font-semibold text-green-600 dark:text-green-400">30%</strong> through targeted performance optimization and root-cause analysis.
                </li>
                <li>
                    Refactored and tuned SQL queries, resulting in a <strong className="font-semibold text-blue-600 dark:text-blue-400">30%</strong> increase in data retrieval efficiency.
                </li>
                <li>
                    Elevated test coverage to <strong className="font-semibold text-purple-600 dark:text-purple-400">95%</strong> using <strong className="text-primary dark:text-primary">JUnit</strong>, ensuring robust validation and minimizing regression risks.
                </li>
                <li>
                    Automated build and deployment workflows via <strong className="text-primary dark:text-primary">Jenkins</strong> and containerized environments with <strong className="text-primary dark:text-primary">Docker</strong>, accelerating release cycles.
                </li>
                </ul>

              <div className="flex gap-3 mt-4">
                <SiSpringboot className="h-5 w-5 text-green-700" />
                <SiJenkins className="h-5 w-5 text-red-600" />
                <SiDocker className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </motion.div>

          {/* === Experience Card: Cognizant === */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex gap-4 items-start">
            <span className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 ring-2 ring-primary mt-1">
              <img src="/assets/cognizant-logo.png" alt="Cognizant" className="h-7 w-7 object-contain" />
            </span>

            <div className="gradient-border  rounded-xl shadow-sm p-6 w-full hover:shadow-md transition">
              <h4 className="font-semibold text-lg text-primary">Cognizant</h4>
              <p className="text-muted-foreground font-medium">Junior Data Analyst · Hyderabad, India</p>
              <p className="text-sm text-gray-500">Feb 2022 – Jun 2022</p>

            <ul className="mt-6 pl-6 list-disc space-y-3 text-foreground dark:text-foreground text-[15px] leading-relaxed">
            <li>
                Designed and maintained robust ETL pipelines using <strong className="text-primary dark:text-primary">Informatica</strong> to streamline data integration and transformation.
            </li>
            <li>
                Developed and optimized complex <strong className="text-primary dark:text-primary">SQL</strong> queries to extract actionable insights for business intelligence.
            </li>
            <li>
                Collaborated in Agile sprints to deliver high-quality data solutions aligned with evolving project requirements.
            </li>
            </ul>

              <div className="flex gap-3 mt-4">
                <SiInformatica className="h-5 w-5 text-orange-600" />
                <FaAws className="h-5 w-5 text-yellow-500" />
                <FaGithub className="h-5 w-5 text-gray-800" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};