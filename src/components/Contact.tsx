import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
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
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 dark:border-emerald-900">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-700 dark:text-gray-300">yann.felix@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Adresse</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    IUT de La Réunion<br />
                    40 Avenue de Soweto<br />
                    97410 Saint-Pierre,<br />
                    La Réunion
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=-21.341389,55.483333&zoom=16&size=400x300&maptype=satellite&markers=color:red%7C-21.341389,55.483333&key=YOUR_API_KEY"
                alt="IUT de La Réunion - Vue satellite"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 dark:border-teal-900">
            <div>
              <Input
                placeholder="Votre nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Votre email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <Input
                placeholder="Sujet"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <Textarea
                placeholder="Votre message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] dark:bg-gray-800 dark:text-white"
              />
            </div>
            <Button type="submit" className="w-full">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
