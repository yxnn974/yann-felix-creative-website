
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Mail, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'fr' ? "Message envoyé !" : "Message sent!",
      description: language === 'fr' 
        ? "Merci de m'avoir contacté. Je vous répondrai dès que possible." 
        : "Thank you for contacting me. I will respond as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center gradient-text">
            {language === 'fr' ? 'Contact' : 'Contact'}
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-8 mx-auto"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  {language === 'fr' ? 'Informations de contact' : 'Contact Information'}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        {language === 'fr' ? 'Adresse' : 'Address'}
                      </h4>
                      <p className="text-foreground/80">
                        IUT de La Réunion<br />
                        40 Avenue de Soweto<br />
                        97410 Saint-Pierre,<br />
                        La Réunion
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        {language === 'fr' ? 'Email' : 'Email'}
                      </h4>
                      <p className="text-foreground/80">
                        contact@yannfelix.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14911.965261226204!2d55.47560089137377!3d-21.341137720765455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182a282fd5d8f11%3A0x63f2ef69be9c6f52!2sIUT%20de%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1679218347395!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="IUT de La Réunion"
                ></iframe>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in delay-200 bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                {language === 'fr' ? 'Envoyez-moi un message' : 'Send me a message'}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-1 text-foreground/80">
                    {language === 'fr' ? 'Nom' : 'Name'}
                  </label>
                  <Input
                    id="name"
                    placeholder={language === 'fr' ? "Votre nom" : "Your name"}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted border-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-1 text-foreground/80">
                    {language === 'fr' ? 'Email' : 'Email'}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={language === 'fr' ? "Votre email" : "Your email"}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted border-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-sm font-medium block mb-1 text-foreground/80">
                    {language === 'fr' ? 'Sujet' : 'Subject'}
                  </label>
                  <Input
                    id="subject"
                    placeholder={language === 'fr' ? "Sujet du message" : "Message subject"}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-muted border-muted"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium block mb-1 text-foreground/80">
                    {language === 'fr' ? 'Message' : 'Message'}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={language === 'fr' ? "Votre message" : "Your message"}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-muted border-muted"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full gradient-button gap-2">
                <Send size={18} />
                {language === 'fr' ? 'Envoyer' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
