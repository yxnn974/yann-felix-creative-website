
-- Mettre à jour les symboles pour une meilleure lisibilité
-- ✅ pour les projets validés et ⏳ pour ceux en attente

UPDATE public.projects SET 
  title_fr = 'SAE 1.01 - Se sensibiliser à l''hygiène informatique et à la cybersécurité ✅',
  title_en = 'SAE 1.01 - Awareness of computer hygiene and cybersecurity ✅'
WHERE title_fr = 'SAE 1.01 - Se sensibiliser à l''hygiène informatique et à la cybersécurité ✔️';

UPDATE public.projects SET 
  title_fr = 'SAE 1.02 - S''initier aux réseaux informatiques ✅',
  title_en = 'SAE 1.02 - Introduction to computer networks ✅'
WHERE title_fr = 'SAE 1.02 - S''initier aux réseaux informatiques ✔️';

UPDATE public.projects SET 
  title_fr = 'SAE 1.03 - Découvrir un dispositif de transmission ✅',
  title_en = 'SAE 1.03 - Discover a transmission device ✅'
WHERE title_fr = 'SAE 1.03 - Découvrir un dispositif de transmission ✔️';

UPDATE public.projects SET 
  title_fr = 'SAE 1.04 - Se présenter sur internet ✅',
  title_en = 'SAE 1.04 - Present yourself on the internet ✅'
WHERE title_fr = 'SAE 1.04 - Se présenter sur internet ✔️';

UPDATE public.projects SET 
  title_fr = 'SAE 1.05 - Traiter des données ✅',
  title_en = 'SAE 1.05 - Data processing ✅'
WHERE title_fr = 'SAE 1.05 - Traiter des données ✔️';

UPDATE public.projects SET 
  title_fr = '[BUT1] SAE 2.03 - Web Dynamique ✅',
  title_en = '[BUT1] SAE 2.03 - Dynamic Web ✅'
WHERE title_fr = '[BUT1] SAE 2.03 - Web Dynamique ✔️';

UPDATE public.projects SET 
  title_fr = 'SAE 2.01 - Construire un réseau informatique pour une petite structure (JV) ⏳',
  title_en = 'SAE 2.01 - Build a computer network for a small structure (JV) ⏳'
WHERE title_fr = 'SAE 2.01 - Construire un réseau informatique pour une petite structure (JV) ❌';

UPDATE public.projects SET 
  title_fr = 'SAE 2.02 - Mesurer et caractériser un signal ou un système ⏳',
  title_en = 'SAE 2.02 - Measure and characterize a signal or system ⏳'
WHERE title_fr = 'SAE 2.02 - Mesurer et caractériser un signal ou un système ❌';

UPDATE public.projects SET 
  title_fr = 'SAE 2.04 - Projet intégratif ⏳',
  title_en = 'SAE 2.04 - Integrative project ⏳'
WHERE title_fr = 'SAE 2.04 - Projet intégratif ❌';
