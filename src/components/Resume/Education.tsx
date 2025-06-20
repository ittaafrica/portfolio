const Education = () => {
    const education = [
      {
        degree: "B. Eng. in Mechatronics and system engineering",
        period: "Inview",
        institution: "Abubakar Tafawa Balewa University, Bauchi",
        description: "I'am Current running my degree program in Mechatronics and system engineering at ATBU with enthusiast in control engineering."
      },
      {
        degree: "Diploma in Embedded System.",
        period: "2021 - 2022",
        institution: "Nascomsoft Embedded Hub",
        description: "I am certify Embedded system engineer at Nascomsoft Embedded hub with knowledge on using microcontrollers and microprocessors for different real life applications."
      }
    ];
  
    return (
      <>
        <h3 className="text-2xl font-bold mb-6 text-indigo-400">Education</h3>
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </>
    );
  };
  
  const EducationItem = ({ degree, period, institution, description }:{degree:string;period:string;institution:string;description:string;}) => (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      <h4 className="text-xl font-bold mb-2">{degree}</h4>
      <h5 className="text-indigo-400 mb-2">{period}</h5>
      <p className="text-gray-400 mb-2"><em>{institution}</em></p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
  
  export default Education;