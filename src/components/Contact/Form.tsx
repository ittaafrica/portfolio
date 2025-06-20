const ContactForm = () => {
    return (
      <form className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField 
            label="Your Name" 
            id="name" 
            type="text" 
            required 
          />
          <FormField 
            label="Your Email" 
            id="email" 
            type="email" 
            required 
          />
        </div>
        
        <FormField 
          label="Subject" 
          id="subject" 
          type="text" 
          required 
        />
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={6}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" 
            required
          ></textarea>
        </div>
        
        <div className="text-center">
          <button 
            type="submit" 
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    );
  };
  
  const FormField = ({ label, id, type = "text", required = false }:{label:string;id:string;type:string;required:boolean;}) => (
    <div>
      <label htmlFor={id} className="block text-gray-400 mb-2">{label}</label>
      <input 
        type={type} 
        id={id} 
        name={id} 
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white" 
        required={required} 
      />
    </div>
  );
  
  export default ContactForm;