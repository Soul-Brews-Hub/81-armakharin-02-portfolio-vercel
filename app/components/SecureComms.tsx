'use client';

import { useState } from 'react';

export default function SecureComms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'consultation',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('TRANSMITTING MESSAGE...');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage('MESSAGE TRANSMITTED SUCCESSFULLY');
      setFormData({
        name: '',
        email: '',
        subject: 'consultation',
        message: ''
      });

      // Clear status message after 3 seconds
      setTimeout(() => {
        setStatusMessage('SYSTEMS READY');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="comms" className="section secure-comms bg-secondary">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title text-neon-red text-4xl md:text-5xl font-heading">
            SECURE COMMS
          </h1>
          <div className="title-line"></div>
        </div>

        <div className="comms-content max-w-4xl mx-auto">
          <div className="comms-intro text-center mb-12">
            <h2 className="text-3xl font-heading text-neon-red mb-4">
              INITIATE SECURE COMMUNICATION CHANNEL
            </h2>
            <p className="text-secondary text-lg">
              For collaboration opportunities, fraud detection consulting, or discussing advanced security solutions.
            </p>
          </div>

          <form className="comms-form space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label text-neon-red text-sm font-heading block mb-2">
                  AGENT IDENTIFIER:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-neon w-full"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label text-neon-red text-sm font-heading block mb-2">
                  SECURE CHANNEL:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-neon w-full"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label text-neon-red text-sm font-heading block mb-2">
                MESSAGE CLASSIFICATION:
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="input-neon w-full"
              >
                <option value="consultation">CONSULTATION REQUEST</option>
                <option value="collaboration">COLLABORATION OPPORTUNITY</option>
                <option value="speaking">SPEAKING ENGAGEMENT</option>
                <option value="other">OTHER MATTERS</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label text-neon-red text-sm font-heading block mb-2">
                ENCRYPTED MESSAGE:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="textarea-neon w-full"
                rows={6}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn-neon px-8 py-4 text-lg font-heading disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <span className="button-text flex items-center">
                  {isSubmitting ? (
                    <>
                      <span className="loading-neon mr-2"></span>
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      TRANSMIT MESSAGE
                      <span className="button-icon ml-2">&rarr;</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>

          <div className="comms-status mt-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className={`status-indicator ${statusMessage.includes('TRANSMITTING') ? 'scanning' : statusMessage.includes('SUCCESSFULLY') ? 'online' : 'online'}`}></div>
              <span className="status-text text-secondary font-body">
                {statusMessage || 'SYSTEMS READY'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}