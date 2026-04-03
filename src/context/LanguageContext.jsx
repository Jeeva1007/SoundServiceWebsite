import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            experience: 'Experience',
            gallery: 'Gallery',
            contact: 'Contact',
            location: 'Location',
            founders: 'Leadership',
            book: 'Book Now',
            connect: 'Connect',
            inquire: 'Inquire Now'
        },
        hero: {
            subtitle: 'SOUNDS OF PERFECTION',
            title: <>BODI <span className="text-gradient-primary">Sound</span> <br /> Service</>,
            description: 'Elevating every event with high-fidelity audio, dynamic lighting, and professional setups. We bring your vision to life with sonic clarity.',
            cta1: 'Get Started',
            cta2: 'View Our Work'
        },
        about: {
            overline: 'OUR STORY',
            title: <>Precision <span className="text-gradient-primary">Craftsmanship</span> in Every Wave</>,
            description: 'BODI Sound Service isn\'t just about equipment; it\'s about the atmosphere. We combine technical mastery with creative vision to deliver experiences that resonate with your audience.',
            stat1: { value: '5+', label: 'Years Expertise', desc: 'Delivering flawless technical event production since 2019.' },
            stat2: { value: '100+', label: 'Events', desc: 'Successfully managed a diverse range of large-scale celebrations.' },
            stat3: { value: 'Premium', label: 'Value', desc: 'Top-tier equipment at competitive and transparent pricing.' }
        },
        services: {
            overline: 'OUR EXPERTISE',
            title: <>Premium <span className="text-gradient-primary">Event</span> Solutions</>,
            subtitle: 'We provide end-to-end technical production for events of all sizes. Quality equipment matched with professional expertise.',
            starting: 'STARTING FROM',
            inquire: 'Inquire',
            items: {
                sound: {
                    title: 'Sound System',
                    desc: 'Immersive audio experiences with high-fidelity speakers and professional digital mixers.'
                },
                lighting: {
                    title: 'Stage Lighting',
                    desc: 'Dynamic stage lighting, LED washes, and intelligent movers to create the perfect atmosphere.'
                },
                decor: {
                    title: 'Event Decor',
                    desc: 'Elegant and customized decorations for weddings, corporate events, and private parties.'
                },
                dj: {
                    title: 'DJ & Visuals',
                    desc: 'High-energy DJ setups, laser shows, and smoke machines for a complete performance.'
                }
            }
        },
        experience: {
            title: 'EXPERIENCE THE SOUND',
            vid1: { title: 'Dynamic Lighting', sub: 'State-of-the-art stage effects and intelligent lighting systems.' },
            vid2: { title: 'Elite Sound', sub: 'Crystal clear audio production for massive crowds and intimate venues.' },
            vid3: { title: 'Function Decor', sub: 'Transforming standard venues into spectacular visual experiences.' }
        },
        gallery: {
            overline: 'VISUAL JOURNEY',
            title: <>Experience <span className="text-gradient-primary">The Magic</span></>,
            subtitle: 'A showcase of our best work across various venues and event styles. From intimate gatherings to large-scale productions.',
            setup: 'Professional Setup',
            imgs: [
                'Grand Venue Decoration',
                'Event Stage Decor',
                'Elegant Floral Setup',
                'Luxury Canopy',
                'Premium Decor',
                'Outdoor Festive',
                'Traditional Decor',
                'Wedding Lights',
                'Building Illumination',
                'House Warming Lights',
                'Serial Lights'
            ]
        },
        founders: {
            overline: 'OUR LEADERSHIP',
            title: <>The Minds <span className="text-gradient-primary">Driving</span> Excellence</>,
            subtitle: 'Meet the professionals who ensure every event is a sonic success. Dedicated to precision and quality in every setup.',
            raj: { role: 'Founder & Visionary' },
            jeeva: { role: 'Operations Lead' },
            contact: 'CONTACT',
            loc: 'LOCATION',
            connect: 'Connect with'
        },
        contact: {
            overline: 'GET IN TOUCH',
            title1: 'Ready to',
            title2: 'Transform',
            title3: 'Your Event?',
            desc: 'Whether it\'s a grand wedding or a corporate concert, we provide the excellence you need.',
            call: 'Call Us',
            email: 'Email Us',
            visit: 'Visit Us',
            available: 'Available 24/7',
            response: 'Quick Response',
            form: {
                name: 'Full Name',
                phone: 'Phone Number',
                email: 'Email Address',
                details: 'Event Details',
                send: 'Send Inquiry',
                sending: 'Sending...',
                success: 'Your message has been sent successfully!'
            }
        },
        location: {
            overline: 'FIND US',
            title: 'Our Headquarters'
        },
        footer: {
            desc: 'Premium sound, lighting, and decoration services for your most precious moments.',
            quickLinks: 'Quick Links',
            services: 'Our Services',
            rights: 'All Rights Reserved.'
        }
    },
    ta: {
        nav: {
            home: 'முகப்பு',
            about: 'எம்மைப் பற்றி',
            services: 'சேவைகள்',
            experience: 'அனுபவம்',
            gallery: 'புகைப்படங்கள்',
            contact: 'தொடர்புக்கு',
            location: 'இடம்',
            founders: 'தலைமை',
            book: 'பதிவு செய்க',
            connect: 'இணைய',
            inquire: 'இப்போதே விசாரிக்கவும்'
        },
        hero: {
            subtitle: 'சிறந்த நிகழ்வு தீர்வுகள்',
            title: <>போடி <span className="text-gradient-primary">சவுண்ட்</span> <br /> சர்வீஸ்</>,
            description: 'உயர்தர ஸ்பீக்கர்கள், வண்ணமயமான விளக்குகள் மற்றும் நவீன அமைப்புகளுடன் ஒவ்வொரு நிகழ்வையும் சிறப்பாக்குகிறோம்.',
            cta1: 'தொடங்குங்கள்',
            cta2: 'எங்கள் வேலைகள்'
        },
        about: {
            overline: 'எங்கள் கதை',
            title: <>ஒவ்வொரு அலைவரிசையிலும் <span className="text-gradient-primary">நேர்த்தி</span></>,
            description: 'போடி சவுண்ட் சர்வீஸ் என்பது ஒரு நிறுவனத்தை விட ஒரு சிறந்த முயற்சி. தொழில்நுட்பம் மற்றும் கலை நயத்துடன் சிறந்த அனுபவங்களை வழங்குகிறோம்.',
            stat1: { value: '5+', label: 'ஆண்டு அனுபவம்', desc: '2019 முதல் குறைபாடற்ற தொழில்நுட்ப நிகழ்வுகளை தயாரித்து வருகிறோம்.' },
            stat2: { value: '100+', label: 'நிகழ்வுகள்', desc: 'பரந்த அளவிலான விழாக்களையும் சிறப்பாக நிர்வகித்துள்ளோம்.' },
            stat3: { value: 'சிறந்த', label: 'மதிப்பு', desc: 'உயர்தர உபகரணங்களை வெளிப்படையான விலையில் வழங்குகிறோம்.' }
        },
        services: {
            overline: 'நிபுணத்துவம்',
            title: <>சிறந்த <span className="text-gradient-primary">நிகழ்வு</span> தீர்வுகள்</>,
            subtitle: 'அனைத்து அளவிலான நிகழ்வுகளுக்கும் முழுமையான தொழில்நுட்ப சேவைகளை வழங்குகிறோம்.',
            starting: 'தொடக்கம்',
            inquire: 'விசாரிக்க',
            items: {
                sound: {
                    title: 'ஒலி அமைப்பு',
                    desc: 'உயர்தர ஸ்பீக்கர்கள் மற்றும் நவீன மிக்சர்களுடன் தெளிவான ஒலி அனுபவம்.'
                },
                lighting: {
                    title: 'மேடை விளக்குகள்',
                    desc: 'அழகான மேடை விளக்குகள் மற்றும் எல்.ஈ.டி விளக்குகள் மூலம் சிறந்த சூழலை உருவாக்குதல்.'
                },
                decor: {
                    title: 'அலங்காரம்',
                    desc: 'திருமணம் மற்றும் அனைத்து விசேஷங்களுக்கும் அழகான மற்றும் நவீன அலங்காரங்கள்.'
                },
                dj: {
                    title: 'டிஜே மற்றும் காட்சிகள்',
                    desc: 'டிஜே செட்டப்கள், லேசர் ஷோக்கள் மற்றும் புகையூட்டும் இயந்திரங்களுடன் முழுமையான கொண்டாட்டம்.'
                }
            }
        },
        experience: {
            title: 'ஒலியை அனுபவியுங்கள்',
            vid1: { title: 'மேடை விளக்குகள்', sub: 'நவீன மேடை விளைவுகள் மற்றும் விளக்கு அமைப்புகள்.' },
            vid2: { title: 'சிறந்த ஒலி', sub: 'பெரிய கூட்டங்களுக்கு தெளிவான ஒலி உற்பத்தி.' },
            vid3: { title: 'விசேஷ அலங்காரம்', sub: 'சாதாரண இடங்களை மிகச்சிறந்த காட்சிகளாக மாற்றுதல்.' }
        },
        gallery: {
            overline: 'புகைப்பட தொகுப்பு',
            title: <> <span className="text-gradient-primary">மாயாஜாலத்தை</span> அனுபவியுங்கள்</>,
            subtitle: 'எங்கள் சிறந்த வேலைகளின் தொகுப்பு. சிறிய கூட்டங்கள் முதல் பெரிய விழா வரை.',
            setup: 'நிபுணத்துவ அமைப்பு',
            imgs: [
                'பெரிய இட அலங்காரம்',
                'மேடை அலங்காரம்',
                'பூ அலங்காரம்',
                'சொகுசு கூடாரம்',
                'சிறந்த அலங்காரம்',
                'வெளிப்புற விழா',
                'பாரம்பரிய அலங்காரம்',
                'திருமண விளக்குகள்',
                'கட்டிட விளக்குகள்',
                'புதுமனை புகுவிழா விளக்குகள்',
                'சீரியல் விளக்குகள்'
            ]
        },
        founders: {
            overline: 'தலைமை',
            title: <>சிறந்த <span className="text-gradient-primary">தலைமை</span> அதிகாரிகள்</>,
            subtitle: 'ஒவ்வொரு நிகழ்வையும் வெற்றியடைய செய்யும் நிபுணர்களை சந்திக்கவும்.',
            raj: { role: 'நிறுவனர் மற்றும் தொலைநோக்கு பார்வையாளர்' },
            jeeva: { role: 'செயல்பாட்டுத் தலைவர்' },
            contact: 'தொடர்புக்கு',
            loc: 'இடம்',
            connect: 'தொடர்பு கொள்ள'
        },
        contact: {
            overline: 'தொடர்பு கொள்ள',
            title1: 'உங்கள் நிகழ்வை',
            title2: 'மாற்ற',
            title3: 'தயாரா?',
            desc: 'பெரிய திருமணங்கள் அல்லது இசை நிகழ்ச்சிகள் எதுவாக இருந்தாலும், நாங்கள் சிறந்த சேவையை வழங்குகிறோம்.',
            call: 'அழைக்க',
            email: 'மின்னஞ்சல்',
            visit: 'நேரில் வர',
            available: '24/7 கிடைக்கும்',
            response: 'விரைவான பதில்',
            form: {
                name: 'முழு பெயர்',
                phone: 'தொலைபேசி எண்',
                email: 'மின்னஞ்சல் முகவரி',
                details: 'நிகழ்வு விவரங்கள்',
                send: 'அனுப்பவும்',
                sending: 'அனுப்பப்படுகிறது...',
                success: 'உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!'
            }
        },
        location: {
            overline: 'எங்களைக் கண்டறிய',
            title: 'எங்கள் தலைமையகம்'
        },
        footer: {
            desc: 'உங்கள் விலைமதிப்பற்ற தருணங்களுக்கு உயர்தர ஒலி, ஒளி மற்றும் அலங்கார சேவைகள்.',
            quickLinks: 'விரைவு இணைப்புகள்',
            services: 'சேவைகள்',
            rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = (lang) => {
        setLanguage(lang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
