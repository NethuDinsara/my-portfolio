import { motion } from 'framer-motion';

const Extracurricular = () => {
  const activities = [
    { id: 1, title: "Volunteering", image: "/src/assets/images/extracurricular-placeholder.png", description: "Helping communities." },
    { id: 2, title: "Hackathons", image: "/src/assets/images/extracurricular-placeholder.png", description: "Participated in 5+ hackathons." },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-20"
    >
      <h2 className="text-4xl font-bold text-[var(--light-blue)] text-center">Extracurricular</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            whileHover={{ scale: 1.05 }}
            className="bg-[var(--slate)] p-6 rounded-lg shadow-lg"
          >
            <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-2xl font-bold mt-4 text-[var(--navy-blue)]">{activity.title}</h3>
            <p className="mt-2 text-[var(--navy-blue)]">{activity.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Extracurricular;