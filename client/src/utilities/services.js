import { institutes } from "./institutes"
import { departments } from "./departments"

export const services = {
  [departments[institutes.CENDIE][0]]: ['NA'],
  [departments[institutes.CNCCB][0]]: ['NA'],
  [departments[institutes.CNGM][0]]: [
    'Diagnóstico Genético 3ºP',
    'Genética Médica y Poblacional',
    'Genética experimental',
    'Diagnóstico Genético 4ºP'
  ],
  [departments[institutes.MALBRAN][0]]: [
    'Administración',
    'Arquitectura',
    'Jardín',
    'Laboratorio colecciones',
    'Recepción de muestras',
    'Residuos patogénicos',
    'Seguridad e Higiene',
    'Sistemas'
  ],
  [departments[institutes.INE][0]]: departments[institutes.INE][0],
  [departments[institutes.INE][1]]: departments[institutes.INE][1],
  [departments[institutes.INE][2]]: departments[institutes.INE][2],
  [departments[institutes.INE][3]]: departments[institutes.INE][3],
  [departments[institutes.INEI][0]]: [
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
  [departments[institutes.INEI][1]]: [
    'Micología',
  ],
  [departments[institutes.INEI][2]]: [
    'Parasitología',
  ],
  [departments[institutes.INEI][3]]: [
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
  ],
  [departments[institutes.INP][0]]: [
    'Administración 6ºP',
    'Clínica 2ºP',
    'Clínica 3ºP',
    'Diagnóstico PB',
    'Investigación 3ºP',
    'Investigación 4ºP',
    'Investigación 5ºP',
    'Producción 7ºP',
  ],
  [departments[institutes.INPB][0]]: [
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
    'Vacunas y Sueros',
  ],
  [departments[institutes.UTNMDQ][0]]: ['NA'],
  [departments[institutes.UOCCB][0]]: [
    'NA',
    'Extensión UOCCB'
  ],
}