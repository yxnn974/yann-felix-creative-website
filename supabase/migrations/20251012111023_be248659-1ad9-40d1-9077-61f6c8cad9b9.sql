-- Créer la table projects pour les projets académiques et personnels
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title_fr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_fr TEXT,
  description_en TEXT,
  image_url TEXT,
  tags TEXT[],
  github_url TEXT,
  demo_url TEXT,
  category TEXT NOT NULL DEFAULT 'personal',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read projects (public portfolio)
CREATE POLICY "Projects are viewable by everyone" 
ON public.projects 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Ajouter les SAE du BUT RT
INSERT INTO public.projects (title_fr, title_en, description_fr, description_en, image_url, tags, github_url, demo_url, category) VALUES
(
  'SAE 1.01 - Se sensibiliser à l''hygiène informatique et à la cybersécurité ✔️',
  'SAE 1.01 - Awareness of computer hygiene and cybersecurity ✔️',
  'Sensibilisation aux bonnes pratiques d''hygiène informatique et aux enjeux de cybersécurité. Formation aux mesures préventives et aux comportements sécurisés.',
  'Awareness of good computer hygiene practices and cybersecurity issues. Training in preventive measures and secure behaviors.',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  ARRAY['Cybersécurité', 'Sécurité informatique', 'Prévention', 'Bonnes pratiques'],
  NULL,
  NULL,
  'academic'
),
(
  'SAE 1.02 - S''initier aux réseaux informatiques ✔️',
  'SAE 1.02 - Introduction to computer networks ✔️',
  'Introduction aux concepts de base des réseaux informatiques. Apprentissage des protocoles, topologies et architectures réseau fondamentales.',
  'Introduction to basic computer network concepts. Learning fundamental protocols, topologies and network architectures.',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  ARRAY['Réseaux', 'Protocoles', 'TCP/IP', 'Topologie', 'Architecture'],
  NULL,
  NULL,
  'academic'
),
(
  'SAE 1.03 - Découvrir un dispositif de transmission ✔️',
  'SAE 1.03 - Discover a transmission device ✔️',
  'Exploration des dispositifs utilisés pour la transmission de données. Étude des supports de transmission et des technologies de communication.',
  'Exploration of devices used for data transmission. Study of transmission media and communication technologies.',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  ARRAY['Transmission', 'Dispositifs', 'Communication', 'Technologie', 'Données'],
  NULL,
  NULL,
  'academic'
),
(
  'SAE 1.04 - Se présenter sur internet ✔️',
  'SAE 1.04 - Present yourself on the internet ✔️',
  'Apprentissage des stratégies pour créer et gérer une présence en ligne professionnelle. Formation aux bonnes pratiques de communication digitale et de personal branding.',
  'Learning strategies to create and manage a professional online presence. Training in digital communication best practices and personal branding.',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  ARRAY['Communication', 'Web', 'Personal Branding', 'Stratégie Digitale'],
  NULL,
  NULL,
  'academic'
),
(
  'SAE 1.05 - Traiter des données ✔️',
  'SAE 1.05 - Data processing ✔️',
  'Formation sur les méthodes de collecte, d''analyse et de visualisation des données. Apprentissage des outils statistiques et des techniques de data science.',
  'Training in data collection, analysis and visualization methods. Learning statistical tools and data science techniques.',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  ARRAY['Data Science', 'Analyse', 'Statistiques', 'Visualisation'],
  NULL,
  NULL,
  'academic'
),
(
  'SAE 2.01 - Construire un réseau informatique pour une petite structure (JV) ❌',
  'SAE 2.01 - Build a computer network for a small structure (JV) ❌',
  'Apprentissage des techniques pour concevoir et mettre en place un réseau adapté à une petite entreprise. Configuration d''équipements réseau et sécurisation.',
  'Learning techniques to design and implement a network suitable for a small business. Network equipment configuration and security.',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  ARRAY['Réseau', 'Infrastructure', 'Cisco', 'Sécurité', 'PME'],
  NULL,
  NULL,
  'academic'
),
(
  'SAE 2.02 - Mesurer et caractériser un signal ou un système ❌',
  'SAE 2.02 - Measure and characterize a signal or system ❌',
  'Introduction aux méthodes de mesure et d''analyse des signaux dans divers systèmes. Utilisation d''instruments de mesure et analyse spectrale.',
  'Introduction to signal measurement and analysis methods in various systems. Use of measuring instruments and spectral analysis.',
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
  ARRAY['Signaux', 'Mesure', 'Analyse spectrale', 'Instrumentation'],
  NULL,
  NULL,
  'academic'
),
(
  '[BUT1] SAE 2.03 - Web Dynamique ✔️',
  '[BUT1] SAE 2.03 - Dynamic Web ✔️',
  'Formation sur la création de sites web dynamiques en utilisant des technologies modernes. Développement front-end et back-end avec bases de données.',
  'Training in creating dynamic websites using modern technologies. Front-end and back-end development with databases.',
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8',
  ARRAY['HTML', 'CSS', 'JavaScript', 'PHP', 'Base de données', 'Web Dynamique'],
  NULL,
  NULL,
  'academic'
),
(
  'SAE 2.04 - Projet intégratif ❌',
  'SAE 2.04 - Integrative project ❌',
  'Réalisation d''un projet intégratif pour appliquer les compétences acquises dans un contexte pratique. Synthèse des apprentissages du semestre.',
  'Implementation of an integrative project to apply acquired skills in a practical context. Synthesis of semester learning.',
  'https://images.unsplash.com/photo-1552664730-d307ca884978',
  ARRAY['Projet', 'Intégration', 'Synthèse', 'Pratique', 'Compétences'],
  NULL,
  NULL,
  'academic'
);