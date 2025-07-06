import { Lightbulb, Target, Flame } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: <Target className="text-blue-600 w-7 h-7" />,
      title: "Goal-Oriented",
      description: "Always focused on delivering high-quality solutions that meet user needs.",
    },
    {
      icon: <Flame className="text-red-500 w-7 h-7" />,
      title: "Passionate",
      description: "Deeply passionate about technology and its potential to solve problems.",
    },
    {
      icon: <Lightbulb className="text-yellow-500 w-7 h-7" />,
      title: "Innovative",
      description: "Constantly exploring new technologies and creative approaches.",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 bg-background text-foreground font-sans">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center font-extrabold text-4xl md:text-5xl leading-tight mb-16"
      >
        <span className="text-black">About </span>
        <span className="text-[#2563EB]">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* My Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl shadow-md p-8"
        >
          <h3 className="text-2xl font-bold mb-5 text-[#2563EB]">My Story</h3>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            I’m <span className="font-semibold text-foreground">Pasupuleti Harish</span>, a passionate and detail-oriented{" "}
            <span className="text-foreground font-medium">Full Stack Developer</span> and{" "}
            <span className="text-foreground font-medium">Machine Learning enthusiast</span> with a strong foundation in
            building dynamic, user-centered applications. My work lies at the intersection of{" "}
            <span className="italic">technology, creativity, and problem-solving</span>, and I thrive on crafting
            solutions that are both beautiful and functional.
            <br />
            <br />
            With expertise in technologies like the <span className="font-medium text-foreground">MERN Stack</span>,{" "}
            <span className="font-medium text-foreground">Python</span>, and{" "}
            <span className="font-medium text-foreground">cloud platforms</span>, I enjoy turning complex challenges into
            scalable, intuitive products. Whether it's designing smooth user interfaces, developing robust backend
            systems, or exploring innovative machine learning models, I bring clarity, structure, and energy to every
            project I work on.
            <br />
            <br />
            I’m driven by a deep curiosity and a relentless desire to grow. Beyond the code, I value{" "}
            <span className="underline decoration-blue-400 underline-offset-4">collaboration</span>,{" "}
            <span className="underline decoration-green-400 underline-offset-4">clean design</span>, and{" "}
            <span className="underline decoration-yellow-400 underline-offset-4">continuous learning</span> — all while
            staying laser-focused on delivering real-world impact.
          </p>
        </motion.div>

        {/* My Values */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-[#2563EB]">My Values</h3>
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div>{value.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{value.title}</h4>
                  <p className="text-sm text-[#64748B] leading-snug">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
