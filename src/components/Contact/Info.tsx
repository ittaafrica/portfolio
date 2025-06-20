const ContactInfo = () => {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg h-full">
        <ContactItem 
          icon="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
          title="Location:"
          text="Oposite Elim Church Yelwa Bauchi, Bauchi State"
        />
        
        <ContactItem 
          icon="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          title="Email:"
          text="abdullahiyusufrufai@gmail.com"
        />
        
        <ContactItem 
          icon="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          title="Call:"
          text="+234 703 741 1315"
        />
  
        <div className="mt-8 h-64 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405811.8548713691!2d9.9796223!3d10.3145547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044ccfce3a2741f%3A0xd9b22f10debae5d8!2sBauchi%2C%20Bauchi%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1591011938365!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  };
  
  const ContactItem = ({ icon, title, text }:{icon:string;title:string;text:string;}) => (
    <div className="flex items-start mb-6">
      <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
  
  export default ContactInfo;