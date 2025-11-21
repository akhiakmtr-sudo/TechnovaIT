import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, Loader2 } from 'lucide-react';
import { refineMessageWithAI } from '../services/geminiService';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isRefining, setIsRefining] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRefine = async () => {
    if (!formData.message || formData.message.length < 5) {
      setStatusMessage({ type: 'error', text: 'Please enter a message to refine.' });
      return;
    }

    setIsRefining(true);
    try {
      const polishedMessage = await refineMessageWithAI(formData.message);
      setFormData(prev => ({ ...prev, message: polishedMessage }));
      setStatusMessage({ type: 'success', text: 'Message refined by AI!' });
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'Could not refine message. Please try again.' });
    } finally {
      setIsRefining(false);
      // Clear success status after 3 seconds
      setTimeout(() => setStatusMessage(null), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({ type: 'success', text: 'Thank you! Your query has been sent successfully.' });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-sky-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-secondary text-lg">
            Ready to start your project? Contact us for a free consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sky-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">Headquarters</h4>
                  <p className="text-sky-800">123 Tech Boulevard, Silicon Valley<br />CA 94025, USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">Phone</h4>
                  <p className="text-sky-800">+1 (555) 123-4567</p>
                  <p className="text-sky-600 text-sm">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">Email</h4>
                  <p className="text-sky-800">hello@technovait.com</p>
                  <p className="text-sky-800">support@technovait.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-sky-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sky-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-sky-200 focus:border-accent focus:ring-2 focus:ring-sky-100 outline-none transition-all text-sky-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sky-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-sky-200 focus:border-accent focus:ring-2 focus:ring-sky-100 outline-none transition-all text-sky-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6 relative">
                <div className="flex justify-between items-center mb-2">
                   <label htmlFor="message" className="block text-sm font-medium text-sky-900">Your Query</label>
                   <button 
                    type="button"
                    onClick={handleRefine}
                    disabled={isRefining || !formData.message}
                    className="flex items-center gap-1 text-xs font-semibold text-purple-600 hover:text-purple-700 disabled:opacity-50 transition-colors"
                    title="Use AI to make your message more professional"
                   >
                     <Sparkles size={14} />
                     {isRefining ? 'Refining...' : 'Polish with AI'}
                   </button>
                </div>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-sky-200 focus:border-accent focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none text-sky-900"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              {statusMessage && (
                <div className={`mb-6 p-4 rounded-lg ${statusMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {statusMessage.text}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-sky-800 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};