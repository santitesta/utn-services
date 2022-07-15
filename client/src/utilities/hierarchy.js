import { institutes } from "./institutes"

export const hierarchy = {
  [institutes.CENDIE]: {
    NA: ['NA']
  },
  [institutes.CNCCB]: {
    NA: ['NA']
  },
  [institutes.CNGM]: {
    NA: [
      'Diagnóstico Genético 3ºP',
      'Genética Médica y Poblacional',
      'Genética experimental',
      'Diagnóstico Genético 4ºP'
    ]
  },
  [institutes.MALBRAN]: {
    NA: [
      'Administración',
      'Arquitectura',
      'Jardín',
      'Laboratorio colecciones',
      'Recepción de muestras',
      'Residuos patogénicos',
      'Seguridad e Higiene',
      'Sistemas'
    ]
  },
  [institutes.INE]: {
    Bacteriología: ['Bacteriología'],
    Inmunoserología: ['Inmunoserología'],
    Micobacterias: ['Micobacterias'],
    Virología: ['Virología']
  },
  [institutes.INEI]: {
    Bacteriología: [
      'Antimicrobianos',
      'Bacteriología',
      'Brucelosis',
      'Clínica',
      'Enterobacterias',
      'Especial',
      'ETS',
      'Fisiopatogenia',
      'Micobacterias',
      'Sanitaria'
    ],
    Micología: ['Micología'],
    Parasitología: ['Parasitología'],
    Virología: [
      'Congénitas, perinatales y de transmisión sexual',
      'Cultivo de tejidos',
      'Gastroenteritis',
      'Hantavirus',
      'Hepatitis',
      'HIV',
      'Neurovirosis',
      'Oncogénicos',
      'Respiratorio',
      'Virología'
    ]
  },
  [institutes.INP]: {
    NA: [
      'Administración 6ºP',
      'Clínica 2ºP',
      'Clínica 3ºP',
      'Diagnóstico PB',
      'Investigación 3ºP',
      'Investigación 4ºP',
      'Investigación 5ºP',
      'Producción 7ºP',
    ]
  },
  [institutes.INPB]: {
    NA: [
      'Antígenos y Antisueros',
      'Apoyo Técnico',
      'B.C.G.',
      'Bioterio Central',
      'Bioterio de Experimentación',
      'Campo Marcos Paz',
      'Depósito de materias primas',
      'Dirección expedición',
      'Dirección técnica',
      'Dpto. Bioterio y Act. Agropecuarias',
      'Envases',
      'Extensión Investigación y desarrollo',
      'Gestión de la calidad',
      'Investigación y Desarrollo',
      'Laboratorio Central de Liofilización',
      'Laboratorio de control',
      'Mantenimiento',
      'Planta de agua',
      'Rabia',
      'Serpentario y Aracnario',
      'Sueros Terapéuticos',
      'Toxinas y Toxoides',
      'Vacunas Bacterianas',
      'Vacunas y Sueros'
    ]
  },
  [institutes.UTNMDQ]: {
    NA: ['NA']
  },
  [institutes.UOCCB]: {
    NA: [
      'NA',
      'Extensión UOCCB'
    ]
  },
  [institutes.ADMIN]: {
    NA: ['NA']
  },
}