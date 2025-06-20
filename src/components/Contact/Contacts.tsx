import SectionTitle from '../Projects';
import ContactInfo from './Info';
import ContactForm from './Form';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Contact"
          description="Feel free to get in touch with me. I'm always open to new opportunities, collaborations, 
          and conversations related to technology, programming, researching and writing. 
          Looking forward to connecting with you!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;