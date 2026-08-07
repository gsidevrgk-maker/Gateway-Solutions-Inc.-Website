'use client';
import { motion } from 'framer-motion';
import {
  Server,
  Database,
  Globe,
  MonitorCog,
  Cpu,
  Briefcase,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Server,
      title: 'Client-Server Services',
      desc: 'GUI, database and Web design for n-Tier, Object-Oriented Development, and ERP/CRM/EDI Integration.',
    },
    {
      icon: Database,
      title: 'Data Management',
      desc: 'Project management, modeling, and administration for Oracle and SQL Server data warehousing.',
    },
    {
      icon: Globe,
      title: 'Web Services',
      desc: 'Lifecycle application development, .NET, Java/J2EE, and Web-enabling projects in Windows and UNIX environments.',
    },
    {
      icon: MonitorCog,
      title: 'Systems Administration',
      desc: 'Installation, configuration, performance tuning, and capacity planning across Linux, Windows, and Sun Solaris.',
    },
    {
      icon: Cpu,
      title: 'Mainframe Expertise',
      desc: 'Decades of experience working with IBM MVS, OS/390, CICS, and IMS DB/DC.',
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      desc: 'Certified PMI and PMP staff capable of organizing and leading major initiatives using tools like ABT Project Workbench.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-900 mb-6"
        >
          Core Areas of Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-lg leading-relaxed"
        >
          With experience providing technical expertise to Fortune 1000
          companies and government entities worldwide, we understand Information
          Technology from the inside out.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <IconComponent className="text-blue-600 w-7 h-7 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
